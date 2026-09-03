'use client'
import { Suspense, useState, useEffect, useRef, useCallback } from 'react'
import GhlForm from '../GhlForm'
import GclidCapture from '../GclidCapture'
import './hardie-estimate-v2.css'

// ─────────────────────────────────────────────────────────────────────────────
// /c/hardie-estimate-v2 — the Good Guys house style, fully CRO optimized.
//
// The look follows the existing /c/siding-replacement, /c/siding-options and
// /c/james-hardie pages, which are the real Good Guys identity: Cormorant
// Garamond headlines over Lato, #4473CA blue on white, generous whitespace,
// rounded photography, one strong color. Clean. Nothing invented visually.
//
// The structure follows the 2026-08-14 teardown of 16 competitor Hardie and
// siding LPs across 13 metros. v1 finished 9th of 16: elite on first paint
// (204ms, fastest of the set) and form position (425px, 3rd best), and losing
// on proof placement, financing and message specificity. So this page keeps
// what v1 was winning on and closes the three gaps:
//
//   1. PROOF BEFORE THE ASK. 4.8 / 122 Google reviews and Elite Preferred sit
//      above the form. v1 held both and showed neither until after it.
//   2. FINANCING. Present on 15 of 18 pages measured, absent from v1 — while
//      Good Guys' own /m/long-island page already advertises 0% for 12 months.
//   3. HARDIEZONE. Two of the five strongest pages independently run a climate
//      section. v1 said "coastal weather" without naming the product system.
//   Plus a second, lower-commitment CTA ("what moves your number") for the
//   researcher who is not ready to book — the one thing every strong page had
//   and v1 did not.
//
// Every claim already existed somewhere Good Guys publishes:
//   · 4.8 / 122 — their live Google Business Profile, read 2026-08-14
//   · 0% for 12 months / no payments for 12 months on approved credit —
//     verbatim from the offer running on /m/long-island
//   · $40,000–$65,000, the three reviews, the process, the FAQ — from v1
// No stock photography: every image is existing Good Guys project work.
//
// Load-bearing constraints — do not break:
//   · PHONE stays 631-840-6299 (DniSwap DEFAULT_DIGITS matches this string).
//   · No Meta pixel. /c/ is Google Search only (H-08).
//   · GhlForm is canonical and unforked; no second iframe-resizer on the page.
//   · Fonts are self-hosted (3 faces, 49KB) rather than the fleet's Google
//     Fonts @import, which render-blocks on three families to render two.
//
// NOT added, deliberately: JSON-LD. This route is noindex like every page in
// this app, so schema here can never be read. That gap is real but it belongs
// on goodguyscontracting.com, which actually ranks organically.
// ─────────────────────────────────────────────────────────────────────────────

const FORM_ID = 'puhKbvE5026OlrQ53J7j'
const PHONE_DISPLAY = '(631) 840-6299'
const PHONE_HREF = 'tel:+16318406299'
const VIMEO_ID = '1103219178'

function Check({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true">
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  )
}

function Chev() {
  return (
    <svg className="gg-chev" width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function Stars({ size = 17 }: { size?: number }) {
  return (
    <span className="gg-stars" role="img" aria-label="Rated 4.8 out of 5">
      {[0, 1, 2, 3, 4].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
          <path d="M12 .587l3.668 7.431 8.204 1.192-5.936 5.786 1.402 8.174L12 18.896l-7.338 3.874 1.402-8.174L.128 9.21l8.204-1.192z" />
        </svg>
      ))}
    </span>
  )
}

/* ── Gallery ────────────────────────────────────────────────────────────────
   THREE DISTINCT PROJECTS. The earlier build showed two copies of the same
   photo, because this folder carries byte-identical duplicates under two
   names: container.webp IS before-after-1.webp, and container-1.webp IS
   before-after-2.webp (verified by md5). Only these are actually distinct:

     before-after-1  modern contemporary, before/after composite
                     (its halves also exist separately as before-1 + after-2)
     before-after-2  cedar-shake colonial, before/after composite
                     (its "before" half also exists as before-2)
     after-1         attached rowhouse — FINISHED SHOT ONLY. There is no
                     "before" for this job anywhere in the folder.

   Never reach for container*.webp here; it will silently duplicate a tile.

   `kind` is load-bearing, not decoration. The two composites carry BEFORE and
   AFTER labels burned into the image; the rowhouse does not, because no before
   exists. Presenting all three under a "before and after" heading claimed a
   transformation we cannot show, so each tile now states what it actually is,
   and the section heading no longer promises a before for every photo. If a
   real "before" for the rowhouse turns up, switch its kind to 'ba'. */
const SHOTS = [
  {
    src: '/img/hardie-estimate/before-after-1.webp',
    alt: 'Contemporary Long Island home before and after James Hardie siding installation, from stained wood to grey fiber cement panel',
    cap: 'Contemporary re-side, Suffolk County',
    kind: 'ba' as const,
    w: 700, h: 758,
  },
  {
    src: '/img/hardie-estimate/before-after-2.webp',
    alt: 'Colonial home before and after James Hardie siding, from cedar shake to white fiber cement lap siding',
    cap: 'Cedar shake to Hardie plank, Nassau County',
    kind: 'ba' as const,
    w: 700, h: 767,
  },
  {
    src: '/img/hardie-estimate/after-1.webp',
    alt: 'Attached rowhouse refinished in green James Hardie lap siding with dark trim',
    cap: 'Rowhouse re-side, Brooklyn',
    kind: 'after' as const,
    w: 700, h: 380,
  },
]

const KIND_LABEL = { ba: 'Before & after', after: 'Completed' }

/* Click to enlarge. No library: a dialog with the full uncropped image, closed
   by Escape, the backdrop, or the button, with arrow keys moving between shots.
   The grid crops to a uniform 4:5 so it reads as a designed set; this is where
   the whole photo is actually visible, which is the point of a before/after. */
function Lightbox({ index, onClose, onMove }:
  { index: number; onClose: () => void; onMove: (d: number) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose() }
      if (e.key === 'ArrowRight') { e.preventDefault(); onMove(1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); onMove(-1) }
      // Focus stays inside: the dialog holds only buttons, so trap on Tab.
      if (e.key === 'Tab') {
        const f = Array.from(
          document.querySelectorAll<HTMLElement>('.gg-lb button')
        ).filter(el => el.offsetParent !== null)
        if (!f.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, onMove])

  const shot = SHOTS[index]
  return (
    <div className="gg-lb" role="dialog" aria-modal="true" aria-label={`${shot.cap}. Image ${index + 1} of ${SHOTS.length}`}
         onClick={onClose}>
      <div className="gg-lb-inner" onClick={e => e.stopPropagation()}>
        <img src={shot.src} alt={shot.alt} />
        <p className="gg-lb-cap">
          <span className={`gg-shot-kind gg-shot-kind-${shot.kind} gg-lb-kind`}>{KIND_LABEL[shot.kind]}</span>
          <span>{shot.cap}</span>
          <span className="gg-lb-count">{index + 1} / {SHOTS.length}</span>
        </p>
      </div>
      <button ref={closeRef} className="gg-lb-x" onClick={onClose} aria-label="Close image">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>
      <button className="gg-lb-nav gg-lb-prev" onClick={e => { e.stopPropagation(); onMove(-1) }} aria-label="Previous image">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="gg-lb-nav gg-lb-next" onClick={e => { e.stopPropagation(); onMove(1) }} aria-label="Next image">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  )
}

/* Click-to-play facade. Nothing is requested from player.vimeo.com until the
   visitor presses play, which is the single biggest load-time win on the page. */
function VideoFacade() {
  const [playing, setPlaying] = useState(false)
  if (playing) {
    return (
      <div className="gg-video">
        <iframe
          src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&portrait=0&byline=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Why homeowners choose Good Guys Contracting for James Hardie siding"
        />
      </div>
    )
  }
  return (
    <button className="gg-video" onClick={() => setPlaying(true)}
            aria-label="Play video: why homeowners choose Good Guys Contracting">
      {/* A still from the video itself, rather than a project photo the gallery
          already shows. */}
      <img src="/img/hardie-estimate/david-ferraro.webp" alt="" width="520" height="672" loading="lazy" />
      <span className="gg-video-play">
        <span className="gg-video-disc">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="#050505" aria-hidden="true"><path d="M21 10.27a2 2 0 010 3.46L3 24.12a2 2 0 01-3-1.73V1.61A2 2 0 013-.12z" /></svg>
        </span>
        <span className="gg-video-label">Why homeowners choose Good Guys</span>
      </span>
    </button>
  )
}

export default function HardieEstimateV2Client() {
  const [lb, setLb] = useState<number | null>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)

  const closeLb = useCallback(() => {
    setLb(null)
    // Return focus to the thumbnail that opened it, per dialog convention.
    lastTrigger.current?.focus()
  }, [])
  const moveLb = useCallback((d: number) => {
    setLb(i => (i === null ? i : (i + d + SHOTS.length) % SHOTS.length))
  }, [])

  return (
    <div className="gg">
      <Suspense fallback={null}><GclidCapture /></Suspense>

      <header className="gg-header">
        <div className="gg-wrap gg-header-in">
          {/* Ink variant. Every other logo asset in this repo is a pure-white
              silhouette cut for a dark hero, and white on this white header
              renders as nothing at all. */}
          <img src="/img/hardie-estimate/gg-logo-ink.webp" alt="Good Guys Contracting"
               width="300" height="303" />
          <div className="gg-header-r">
            <a href={PHONE_HREF} className="gg-tel">{PHONE_DISPLAY}</a>
            <a href="#estimate" className="gg-btn gg-btn-blue">Get My Free Estimate</a>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────────
          Mobile order: headline → sub → proof → FORM → photo, so the form is
          reachable without scrolling. Desktop splits 57/43 like the rest of
          the fleet, with the form held in the right column. */}
      <section className="gg-hero" id="estimate">
        <div className="gg-wrap gg-hero-in">

          <div className="gg-hero-copy">
            <h1>James Hardie Siding, Installed Right on Long Island</h1>
            <p className="gg-hero-sub">
              Fiber cement siding built for coastal weather, installed by a licensed local
              crew. Get a detailed estimate within 24&nbsp;hours.
            </p>
            <div className="gg-proof">
              <span className="gg-rate">
                <Stars />
                <b>4.8</b>
                <span>122 Google reviews</span>
              </span>
              <span className="gg-proof-div" aria-hidden="true" />
              <span className="gg-proof-elite">
                <Check size={16} />James Hardie Elite Preferred
              </span>
            </div>
          </div>

          <div className="gg-form">
            <h2>Get your free estimate</h2>
            <p className="gg-form-sub">Takes about 30 seconds. No obligation.</p>

            {/* Affordability answered before the ask, not after it. */}
            <div className="gg-fin">
              <b>0% interest for 12 months</b>
              <span>and no payments for 12 months</span>
              <i>On approved credit. Ask about terms during your estimate.</i>
            </div>

            <GhlForm formId={FORM_ID} height={420} formName="Hardie Estimate v2 — Long Island (Search)" />

            <p className="gg-form-note">
              <Check size={15} />
              We install James Hardie. We are not a siding supplier.
            </p>
          </div>

          {/* after-2, the finished contemporary. NOT container.webp — that file
              is a byte-identical copy of before-after-1, which the gallery uses,
              so the old build showed the same photo twice on one page. */}
          <div className="gg-hero-photo">
            <img src="/img/hardie-estimate/after-2.webp"
                 alt="Long Island home finished in grey James Hardie fiber cement panel and lap siding"
                 width="552" height="300" fetchPriority="high" />
          </div>

        </div>
      </section>

      {/* ── TRUST ─────────────────────────────────────────────────────────
          The badge is shown at 58–66px so the text inside it is readable. The
          same asset was rendered at 30px on the earlier page, where it read as
          a grey smudge — a badge nobody can read is decoration, not proof. */}
      <section className="gg-trust">
        <div className="gg-wrap">
          <div className="gg-badge-row">
            <img src="/img/hardie-estimate/elite-member-badge.webp"
                 alt="James Hardie Elite Preferred contractor — top-rated contractor selected on ratings, reviews and reliability"
                 className="gg-badge" width="900" height="170" loading="lazy" />
          </div>
        </div>
        <div className="gg-wrap gg-trust-grid">
          <div className="gg-trust-i"><Check /><span>Licensed &amp; insured</span></div>
          <div className="gg-trust-i"><Check /><span>Estimate within 24 hours</span></div>
          <div className="gg-trust-i"><Check /><span>Financing available</span></div>
          <div className="gg-trust-i"><Check /><span>Long Island, Queens &amp; Brooklyn</span></div>
        </div>
      </section>

      {/* ── WHY / VIDEO ───────────────────────────────────────────────────── */}
      <section className="gg-sec">
        <div className="gg-wrap">
          <h2>Hardie siding is only as good as the installation</h2>
          <p className="gg-lede">
            Fiber cement is a demanding material. Cut spacing, flashing, and fastening all
            have to be right or the warranty and the weather protection go with them. That
            is the part homeowners cannot see from the curb, and it is the part we are
            judged on.
          </p>
          <VideoFacade />
        </div>
      </section>

      {/* ── HARDIEZONE ────────────────────────────────────────────────────── */}
      <section className="gg-sec gg-sec-soft">
        <div className="gg-wrap">
          <div className="gg-zone">
            <div>
              <span className="gg-ztag">HardieZone&reg; HZ5</span>
              <h2>Long Island needs the HZ5 board, not the other one</h2>
              <p className="gg-lede">
                James Hardie does not make one siding product. It makes two climate-engineered
                lines, and Long Island sits in HZ5 &mdash; the northern zone built for freeze-thaw
                cycling, wet winters and coastal wind-driven rain. The HZ10 boards sold into
                southern markets are a different formulation.
              </p>
              <p className="gg-lede">
                It matters because the failure modes here are seasonal. Water that gets behind a
                board in November freezes in January, and the expansion is what opens a joint.
              </p>
            </div>
            <ul className="gg-zlist">
              <li><Check /><div><b>Freeze-thaw resistance</b><p>HZ5 boards are engineered for repeated freezing after moisture exposure, which is the Long Island winter in one sentence.</p></div></li>
              <li><Check /><div><b>Wind-driven coastal rain</b><p>Fastening pattern and flashing detail change near the water. South Shore and North Fork homes are not installed the same way as inland ones.</p></div></li>
              <li><Check /><div><b>Salt air</b><p>Fiber cement does not corrode the way metal trim and fasteners can, which is why it holds up on waterfront exposures.</p></div></li>
              <li><Check /><div><b>Color retention</b><p>ColorPlus&reg; finish is baked on rather than field-painted, so it holds through UV and salt far longer than a painted substrate.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── PRICE + SECOND CTA ────────────────────────────────────────────
          Deliberately not a fake instant-quote calculator. We cannot price a
          re-side without seeing the house, and a widget that pretends otherwise
          produces a number we then have to walk back on the call. An honest
          breakdown does the same job for the researching visitor. */}
      <section className="gg-sec">
        <div className="gg-wrap">
          <h2>What a Hardie project costs here</h2>
          <div className="gg-price" style={{ marginTop: 30 }}>
            <div className="gg-price-n">$40,000&ndash;$65,000</div>
            <p className="gg-price-l">
              Typical James Hardie siding project on Long Island. Your estimate depends on the
              size of your home, the profile you choose, and the condition of what is behind
              the existing siding.
            </p>
          </div>

          <details className="gg-drivers">
            <summary>See what moves your number <Chev /></summary>
            <div className="gg-drivers-body">
              <div className="gg-driver">
                <b>Square footage and how many stories</b>
                <p>The biggest single driver. A two-storey colonial costs more per square foot than a ranch of the same area because of staging and access, not just material.</p>
              </div>
              <div className="gg-driver">
                <b>What is behind the old siding</b>
                <p>This is the one nobody budgets for. Rotted sheathing, failed housewrap or previous water damage is not visible until tear-off. We tell you what we find before we proceed, not after.</p>
              </div>
              <div className="gg-driver">
                <b>Profile and finish</b>
                <p>HardiePlank lap, HardiePanel board-and-batten and HardieShingle price differently. ColorPlus factory finish costs more up front than primed board and saves a repaint cycle.</p>
              </div>
              <div className="gg-driver">
                <b>Trim, corners and detail work</b>
                <p>Window count, corner count, gables, dormers and soffit detail drive labour more than most homeowners expect. A busy elevation is a bigger job than a plain one of equal area.</p>
              </div>
              <div className="gg-driver">
                <b>Anything going on at the same time</b>
                <p>Gutters, capping, roofing or window replacement done while the exterior is already open is cheaper than coming back for it later.</p>
              </div>
              <p className="gg-drivers-foot">
                We do not price a re-side without seeing the house. The estimate is free, it is
                itemized, and it arrives within 24 hours of the visit &mdash; and if the number does
                not work for you, that is the end of it.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="gg-sec gg-sec-soft">
        <div className="gg-wrap">
          <h2>How the project runs</h2>
          <p className="gg-lede">Four steps, and you know the cost before anything is ordered.</p>
          <div className="gg-steps">
            <div className="gg-step">
              <div className="gg-step-n">1</div>
              <h3>Free consultation</h3>
              <p>We inspect your home and help you choose the best Hardie siding style and color.</p>
            </div>
            <div className="gg-step">
              <div className="gg-step-n">2</div>
              <h3>Clear project estimate</h3>
              <p>You receive a detailed estimate explaining materials, cost, and project timeline.</p>
            </div>
            <div className="gg-step">
              <div className="gg-step-n">3</div>
              <h3>Professional installation</h3>
              <p>Our team removes the old siding, prepares the exterior, and installs your new fiber cement system.</p>
            </div>
            <div className="gg-step">
              <div className="gg-step-n">4</div>
              <h3>Final walkthrough</h3>
              <p>We review the completed project with you to make sure everything meets expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section className="gg-sec">
        <div className="gg-wrap">
          <h2>Recent Long Island work</h2>
          <p className="gg-lede">
            James Hardie installations across Nassau, Suffolk and the boroughs. Tap any photo
            to see it full size.
          </p>
          <div className="gg-gal">
            {SHOTS.map((s, i) => (
              <figure className="gg-shot" key={s.src}>
                <button
                  type="button"
                  className="gg-shot-btn"
                  onClick={e => { lastTrigger.current = e.currentTarget; setLb(i) }}
                  aria-label={`Enlarge photo: ${s.cap}`}
                >
                  <img src={s.src} alt={s.alt} width={s.w} height={s.h} loading="lazy"
                       className={s.kind === 'after' ? 'gg-fit' : undefined} />
                  <span className="gg-shot-zoom" aria-hidden="true">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" /><line x1="16.2" y1="16.2" x2="21" y2="21" />
                      <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                  <span className={`gg-shot-kind gg-shot-kind-${s.kind}`}>{KIND_LABEL[s.kind]}</span>
                </button>
                <figcaption>{s.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      <section className="gg-sec gg-sec-soft">
        <div className="gg-wrap">
          <h2>What Long Island homeowners say</h2>
          <p className="gg-lede">Reviews from completed siding projects.</p>
          <div className="gg-revs">
            <div className="gg-rev">
              <Stars size={16} />
              <p>&ldquo;Our time and work with Good Guys have been one of the benefits of having gone through Hurricane Sandy. They really made the process painless. They were better than we could have hoped for!&rdquo;</p>
              <p className="gg-rev-attr">Susan K. &middot; Lido Beach, NY</p>
            </div>
            <div className="gg-rev">
              <Stars size={16} />
              <p>&ldquo;Good Guys Contracting prepared me for the scope of the job in advance. They did the job exactly as they stated and the job was completed flawlessly. Their team approach made the job go very smoothly.&rdquo;</p>
              <p className="gg-rev-attr">Hank B. &middot; Westhampton, NY</p>
            </div>
            <div className="gg-rev">
              <Stars size={16} />
              <p>&ldquo;The staff at Good Guys Contracting was extremely professional and the craftsmanship was so great that people keep stopping by to mention how beautiful my house looks.&rdquo;</p>
              <p className="gg-rev-attr">Danielle M. &middot; Long Beach, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="gg-sec">
        <div className="gg-wrap">
          <h2>Common questions</h2>
          <div className="gg-faq">
            <details>
              <summary>How long does James Hardie siding last? <Chev /></summary>
              <p className="gg-faq-body">James Hardie fiber cement siding can last 30 to 50 years with proper installation and maintenance.</p>
            </details>
            <details>
              <summary>What does a Hardie re-side cost on Long Island? <Chev /></summary>
              <p className="gg-faq-body">Most projects land between $40,000 and $65,000. The range is wide because square footage, the number of stories, the profile you choose, and the condition of the sheathing behind the old siding all move it. We do not quote a re-side without seeing the house.</p>
            </details>
            <details>
              <summary>Do you offer financing? <Chev /></summary>
              <p className="gg-faq-body">Yes. We offer 0% interest for 12 months with no payments for 12 months, on approved credit. We will walk you through the terms during your estimate.</p>
            </details>
            <details>
              <summary>How is fiber cement different from vinyl siding? <Chev /></summary>
              <p className="gg-faq-body">Fiber cement is typically more durable, more weather resistant, and gives a higher-end appearance than vinyl. It also holds color far longer, which matters on the coast.</p>
            </details>
            <details>
              <summary>How long does the installation take? <Chev /></summary>
              <p className="gg-faq-body">Most siding installations take one to two weeks depending on the size and complexity of the home.</p>
            </details>
            <details>
              <summary>Does new siding add value to my home? <Chev /></summary>
              <p className="gg-faq-body">Yes. High-quality siding can significantly improve curb appeal and increase resale value.</p>
            </details>
            <details>
              <summary>Do you sell siding materials? <Chev /></summary>
              <p className="gg-faq-body">No. Good Guys Contracting is a licensed siding installation contractor. We do not sell siding materials or supplies. Everything we do is professional installation for Long Island, Queens and Brooklyn homeowners.</p>
            </details>
            <details>
              <summary>What areas do you serve? <Chev /></summary>
              <p className="gg-faq-body">Nassau and Suffolk County on Long Island, plus Queens and Brooklyn. We do not travel outside those areas.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="gg-final">
        <div className="gg-wrap">
          <h2>Ready for a real number on your siding project?</h2>
          <p>Get a detailed James Hardie estimate within 24 hours. Financing available on approved credit.</p>
          <div className="gg-final-a">
            <a href="#estimate" className="gg-btn gg-btn-blue">Get My Free Estimate</a>
            <a href={PHONE_HREF} className="gg-btn gg-btn-out">Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="gg-footer">
        <div className="gg-wrap">
          <div className="gg-footer-grid">
            <div>
              <strong>Good Guys Contracting</strong>
              Professional James Hardie siding installation for Long Island, Queens and Brooklyn.
            </div>
            <div>
              <strong>Contact</strong>
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a><br />
              <a href="mailto:info@goodguyscontracting.com">info@goodguyscontracting.com</a>
            </div>
            <div>
              <strong>Service area</strong>
              Nassau County &middot; Suffolk County<br />Queens &middot; Brooklyn
            </div>
          </div>
          <div className="gg-footer-legal">
            {/* Static, not new Date(): this route is prerendered, so a build-time
                year and a hydration-time year can disagree across a New Year
                boundary and throw a hydration mismatch. */}
            <span>&copy; 2026 Good Guys Contracting</span>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </footer>

      <div className="gg-sticky">
        <a href={PHONE_HREF} className="gg-btn gg-btn-out">Call now</a>
        <a href="#estimate" className="gg-btn gg-btn-blue">Free estimate</a>
      </div>

      {lb !== null && <Lightbox index={lb} onClose={closeLb} onMove={moveLb} />}
    </div>
  )
}
