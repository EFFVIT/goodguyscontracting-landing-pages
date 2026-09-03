'use client'
import { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// EFFVIT canonical GHL form embed. Do not fork this per client.
//
// Three rules, each paid for with a real outage. See the
// `effvit-ghl-form-embed` skill for the full contract.
//
// 1. PARAMS BEFORE MOUNT. The iframe is not rendered until the click ids and
//    UTMs have been resolved, so its `src` is never mutated after mount.
//    Swapping src post-mount reloads the widget and blanks the form.
//
// 2. form_embed.js IS MANDATORY. It is GHL's parent-page bridge: it posts
//    `document.location.href` + `document.referrer` + the merged query params
//    to the widget. Without it the widget only sees the iframe's cross-origin
//    Referer, which the browser trims to the bare origin under the default
//    strict-origin-when-cross-origin policy — so every lead lands in GHL as
//    `sessionSource: "Direct traffic"` with null gclid/utm/referrer, even on a
//    real paid click. (Biltmore, 2026-07-16 to 07-23.) It is injected once per
//    page, after every mounted form has its final src.
//
// 3. NEVER LOAD A SECOND IFRAME-RESIZER. form_embed.js bundles its own and
//    re-parents each iframe into an `<id>-wrapper` div. A standalone
//    iframe-resizer then throws `iFrame (<id>) does not exist`, and that
//    uncaught error aborts form_embed's init and leaves an empty wrapper — the
//    form disappears entirely. That is the crash that got form_embed.js
//    deleted from the fleet in the first place. form_embed.js owns resizing.
//
// 4. THE FORM OWNS THE BOTTOM OF THE SCREEN. While a form is on screen this
//    sets `data-gg-form-visible` on <html>, so a page can stand its own fixed
//    furniture down. Measured on production 2026-09-03: the sticky CTA bar
//    (z 60) and the RootLogic FAB (z 999990) both sat over the GHL Submit
//    button on every mobile viewport tested, and elementFromPoint confirmed
//    the bottom 12-16% of the form was swallowing taps rather than passing
//    them through. A page that pays $12-18 a click must not cover its own
//    submit. Each page hides its own furniture off this attribute; nothing is
//    hidden from here, so the contract stays additive.
//
// Hidden-field aliasing (H-27): GHL silently discards any param without a
// matching hidden field on the form. The gclid field was created with key
// `gclid-of`, so the plain `?gclid=` never matches — all spellings are sent.
// ─────────────────────────────────────────────────────────────────────────────

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid', 'fbclid']

const FORM_EMBED_SRC = 'https://link.msgsndr.com/js/form_embed.js'

// Default GHL widget host. Elite MD overrides it: api.leadconnectorhq.com is
// DNS-blocked for that practice's visitors, so its forms are served from a
// white-labelled host instead. form_embed.js talks to the iframe by
// contentWindow.postMessage(msg, '*'), so a non-default host still works.
const DEFAULT_HOST = 'api.leadconnectorhq.com'

// form_embed.js processes every form iframe present when it runs, so one
// injection covers a page with several forms. Components mount in the same
// commit; the short delay lets them all settle before the script lands.
let embedScheduled = false
function injectFormEmbedOnce() {
  if (embedScheduled) return
  embedScheduled = true
  setTimeout(() => {
    if (document.querySelector(`script[src="${FORM_EMBED_SRC}"]`)) return
    const s = document.createElement('script')
    s.src = FORM_EMBED_SRC
    s.async = true
    document.body.appendChild(s)
  }, 50)
}

// Ref-counted across every mounted form on the page.
const VISIBLE_FORMS = new Set<string>()
function syncFormVisibleAttr() {
  const root = document.documentElement
  if (VISIBLE_FORMS.size > 0) root.setAttribute('data-gg-form-visible', '1')
  else root.removeAttribute('data-gg-form-visible')
}

export default function GhlForm({
  formId,
  height = 620,
  formName = '',
  host = DEFAULT_HOST,
}: {
  formId: string
  height?: number
  formName?: string
  host?: string
}) {
  const widgetBase = `https://${host}/widget/form`
  // null until params are resolved — the iframe does not render before then.
  const [src, setSrc] = useState<string | null>(null)
  const iframeId = `inline-${formId}`
  const frameRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const out = new URLSearchParams()

    // sessionStorage fallback keeps attribution alive across internal
    // navigation, where the landing params are no longer in the URL.
    ;[...CLICK_ID_KEYS, ...UTM_KEYS].forEach(key => {
      const val = urlParams.get(key) || sessionStorage.getItem(key)
      if (val) {
        try { sessionStorage.setItem(key, val) } catch { /* private mode */ }
        out.set(key, val)
      }
    })

    // utm_* and gbraid/wbraid slugs match their params exactly; the two click
    // ids whose GHL field keys differ get aliased to every spelling in use.
    const gclid = out.get('gclid')
    if (gclid) { out.set('gclid-of', gclid); out.set('gclidof', gclid) }
    const fbclid = out.get('fbclid')
    if (fbclid) { out.set('fbclid-of', fbclid); out.set('fbclidof', fbclid) }

    const qs = out.toString()
    setSrc(qs ? `${widgetBase}/${formId}?${qs}` : `${widgetBase}/${formId}`)
  }, [formId, widgetBase])

  useEffect(() => {
    if (src) injectFormEmbedOnce()
  }, [src])

  // Flag <html> while this form is on screen. Ref-counted, because a page may
  // carry more than one form and the attribute must survive until the last one
  // leaves. form_embed.js re-parents the iframe into an `<id>-wrapper` div, but
  // it moves the same node rather than replacing it, so the observer holds.
  useEffect(() => {
    const el = frameRef.current
    if (!src || !el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) VISIBLE_FORMS.add(iframeId)
        else VISIBLE_FORMS.delete(iframeId)
        syncFormVisibleAttr()
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      VISIBLE_FORMS.delete(iframeId)
      syncFormVisibleAttr()
    }
  }, [src, iframeId])

  // Reserve the space so resolving params does not shift the page.
  if (!src) {
    return <div style={{ width: '100%', height: `${height}px` }} aria-hidden="true" />
  }

  return (
    <iframe
      ref={frameRef}
      src={src}
      style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '0px', display: 'block' }}
      id={iframeId}
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name={formName}
      data-height={height}
      data-layout-iframe-id={iframeId}
      data-form-id={formId}
      title={formName || formId}
    />
  )
}
