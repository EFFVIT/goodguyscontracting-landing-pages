'use client'
import { Suspense, useState } from 'react'
import GhlForm from '../GhlForm'
import GclidCapture from '../GclidCapture'
import './hardie-estimate.css'

// ─────────────────────────────────────────────────────────────────────────────
// /c/hardie-estimate — consolidated James Hardie LP for Google Search.
//
// Replaces the three-way split across /c/james-hardie, /c/siding-replacement
// and /c/siding-options plus the slower duplicate on start.goodguyscontracting.
//
// Written against the 2026-08-03 paid-media audit. Load-bearing decisions:
//
//  · The phone number rendered here MUST stay 631-840-6299. That is
//    DniSwap's DEFAULT_DIGITS; it is the string the swap matches on. Change
//    it and paid sessions silently stop leasing a tracking number.
//  · No Meta pixel. This page takes Google Search traffic only (H-08) — the
//    Meta LPs live under /m/ and carry their own pixel.
//  · GhlForm is the canonical shared component. Never fork it, never mutate
//    its src after mount, and never add a second iframe-resizer to this page
//    (effvit-ghl-form-embed §3 — that combination makes the form disappear).
//  · Every image is WebP under /img/hardie-estimate/. The old page shipped a
//    4.2MB hero PNG; the whole image set here is 700KB.
// ─────────────────────────────────────────────────────────────────────────────

const FORM_ID = 'puhKbvE5026OlrQ53J7j'
const PHONE_DISPLAY = '(631) 840-6299'
const PHONE_HREF = 'tel:+16318406299'
const VIMEO_ID = '1103219178'

function Check({ light = false }: { light?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 512 512" fill={light ? '#7FB0FF' : '#4473CA'} aria-hidden="true">
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  )
}

function Star() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
      <path d="M12 .587l3.668 7.431 8.204 1.192-5.936 5.786 1.402 8.174L12 18.896l-7.338 3.874 1.402-8.174L.128 9.21l8.204-1.192z" />
    </svg>
  )
}

function Stars() {
  return (
    <div className="he-stars" role="img" aria-label="Five out of five stars">
      {[0, 1, 2, 3, 4].map(i => <Star key={i} />)}
    </div>
  )
}

/* Click-to-play facade. Nothing is requested from player.vimeo.com until the
   visitor presses play, which is the single biggest load-time win on the page. */
function VideoFacade() {
  const [playing, setPlaying] = useState(false)
  if (playing) {
    return (
      <div className="he-video">
        <iframe
          src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&portrait=0&byline=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Why choose Good Guys Contracting for James Hardie siding"
        />
      </div>
    )
  }
  return (
    <button className="he-video" onClick={() => setPlaying(true)} aria-label="Play video: why homeowners choose Good Guys Contracting">
      <img src="/img/hardie-estimate/before-after-1.webp" alt="" width="700" height="758" loading="lazy" />
      <span className="he-video-play">
        <span className="he-video-disc">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="#050505" aria-hidden="true"><path d="M21 10.27a2 2 0 010 3.46L3 24.12a2 2 0 01-3-1.73V1.61A2 2 0 013-.12z" /></svg>
        </span>
        <span className="he-video-label">Why homeowners choose Good Guys</span>
      </span>
    </button>
  )
}

export default function HardieEstimateClient() {
  return (
    <div className="he-page">
      <Suspense fallback={null}><GclidCapture /></Suspense>

      <header className="he-header">
        <div className="he-container he-header-inner">
          {/* Ink variant, not the white one. Every logo asset in this repo is a
              pure-white silhouette (they were cut for the old dark hero), and a
              white logo on this white header renders as nothing at all. Same
              mark, same alpha, ink fill. */}
          <img
            src="/img/hardie-estimate/gg-logo-ink.webp"
            alt="Good Guys Contracting"
            className="he-logo"
            width="300" height="303"
          />
          <div className="he-header-actions">
            <a href="#estimate" className="he-btn he-btn-primary he-header-cta">Get My Free Estimate</a>
            <a href={PHONE_HREF} className="he-header-phone">
              <svg width="16" height="16" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true">
                <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────────
          On mobile this stacks headline → FORM → bullets, so the form is
          reachable without scrolling. Desktop splits it into two columns. */}
      <section className="he-hero" id="estimate">
        <img
          src="/img/hardie-estimate/hero-bg.webp"
          alt=""
          className="he-hero-bg"
          width="1600" height="1418"
          fetchPriority="high"
        />
        <div className="he-container he-hero-inner">

          <div>
            <p className="he-eyebrow">
              <Check light /> Serving Long Island, Queens &amp; Brooklyn
            </p>
            <h1>James Hardie Siding, Installed Right on Long Island</h1>
            <p className="he-hero-sub">
              Fiber cement siding built for coastal weather, installed by a licensed local
              crew. Get a detailed estimate within 24&nbsp;hours.
            </p>
          </div>

          <div className="he-form-card">
            <h2 className="he-form-head">Get your free estimate</h2>
            <p className="he-form-sub">Takes about 30 seconds. No obligation.</p>
            {/* 420 matches the height form_embed.js settles this 4-field form to
                (measured 409px). Reserving the real height keeps the placeholder
                from opening a dead gap that then collapses on resize. */}
            <GhlForm formId={FORM_ID} height={420} formName="Hardie Estimate — Long Island (Search)" />
            <p className="he-form-note">
              <Check />
              We install James Hardie. We are not a siding supplier.
            </p>
          </div>

          <ul className="he-hero-bullets">
            <li><Check light />Built to withstand Long Island coastal weather</li>
            <li><Check light />James Hardie Elite Preferred installer</li>
            <li><Check light />Licensed and insured, with one dedicated project manager</li>
          </ul>

        </div>
      </section>

      {/* ── TRUST ───────────────────────────────────────────────────────── */}
      <section className="he-trust">
        <div className="he-container he-trust-grid">
          <div className="he-trust-item">
            <img
              src="/img/hardie-estimate/elite-member-badge.webp"
              alt="James Hardie Elite Preferred contractor"
              className="he-badge-img" width="900" height="170" loading="lazy"
            />
          </div>
          <div className="he-trust-item">
            <Check /><span className="he-trust-text">Licensed &amp;<br />insured</span>
          </div>
          <div className="he-trust-item">
            <Check /><span className="he-trust-text">Estimate within<br />24 hours</span>
          </div>
          <div className="he-trust-item">
            <Check /><span className="he-trust-text">Long Island,<br />Queens &amp; Brooklyn</span>
          </div>
        </div>
      </section>

      {/* ── WHY / VIDEO ─────────────────────────────────────────────────── */}
      <section className="he-section">
        <div className="he-container">
          <h2 className="he-h2">Hardie siding is only as good as the installation</h2>
          <p className="he-lede">
            Fiber cement is a demanding material. Cut spacing, flashing, and fastening all
            have to be right or the warranty and the weather protection go with them. That
            is the part homeowners cannot see from the curb, and it is the part we are
            judged on.
          </p>
          <VideoFacade />
        </div>
      </section>

      {/* ── PRICE ───────────────────────────────────────────────────────── */}
      <section className="he-section he-section-alt">
        <div className="he-container">
          <div className="he-price">
            <div className="he-price-num">$40,000 – $65,000</div>
            <p className="he-price-lab">
              Typical James Hardie siding project on Long Island. Your estimate depends on
              the size of your home, the profile you choose, and the condition of what is
              behind the existing siding.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="he-section">
        <div className="he-container">
          <h2 className="he-h2">How the project runs</h2>
          <p className="he-lede">Four steps, and you know the cost before anything is ordered.</p>
          <div className="he-steps">
            <div className="he-step">
              <span className="he-step-n">1</span>
              <h3>Free consultation</h3>
              <p>We inspect your home and help you choose the best Hardie siding style and colour.</p>
            </div>
            <div className="he-step">
              <span className="he-step-n">2</span>
              <h3>Clear project estimate</h3>
              <p>You receive a detailed estimate explaining materials, cost, and project timeline.</p>
            </div>
            <div className="he-step">
              <span className="he-step-n">3</span>
              <h3>Professional installation</h3>
              <p>Our team removes the old siding, prepares the exterior, and installs your new fiber cement system.</p>
            </div>
            <div className="he-step">
              <span className="he-step-n">4</span>
              <h3>Final walkthrough</h3>
              <p>We review the completed project with you to make sure everything meets expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────────── */}
      <section className="he-section he-section-alt">
        <div className="he-container">
          <h2 className="he-h2">Real Long Island transformations</h2>
          <p className="he-lede">Recent James Hardie installations, before and after.</p>
          <div className="he-gallery">
            <figure className="he-shot">
              <img src="/img/hardie-estimate/before-after-1.webp" alt="Long Island home before and after James Hardie siding installation" width="700" height="758" loading="lazy" />
              <figcaption className="he-shot-cap">Full siding replacement, Suffolk County</figcaption>
            </figure>
            <figure className="he-shot">
              <img src="/img/hardie-estimate/before-after-2.webp" alt="Long Island home before and after fiber cement siding replacement" width="700" height="767" loading="lazy" />
              <figcaption className="he-shot-cap">Hardie plank with trim detail, Nassau County</figcaption>
            </figure>
            <figure className="he-shot">
              <img src="/img/hardie-estimate/container.webp" alt="Completed James Hardie fiber cement siding on a Long Island home" width="700" height="758" loading="lazy" />
              <figcaption className="he-shot-cap">Board and batten accent, South Shore</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────────── */}
      <section className="he-section">
        <div className="he-container">
          <h2 className="he-h2">What Long Island homeowners say</h2>
          <p className="he-lede">Reviews from completed siding projects.</p>
          <div className="he-reviews">
            <div className="he-review">
              <Stars />
              <p>&ldquo;Our time and work with Good Guys have been one of the benefits of having gone through Hurricane Sandy. They really made the process painless. They were better than we could have hoped for!&rdquo;</p>
              <p className="he-review-attr">Susan K. &middot; Lido Beach, NY</p>
            </div>
            <div className="he-review">
              <Stars />
              <p>&ldquo;Good Guys Contracting prepared me for the scope of the job in advance. They did the job exactly as they stated and the job was completed flawlessly. Their team approach made the job go very smoothly.&rdquo;</p>
              <p className="he-review-attr">Hank B. &middot; Westhampton, NY</p>
            </div>
            <div className="he-review">
              <Stars />
              <p>&ldquo;The staff at Good Guys Contracting was extremely professional and the craftsmanship was so great that people keep stopping by to mention how beautiful my house looks.&rdquo;</p>
              <p className="he-review-attr">Danielle M. &middot; Long Beach, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="he-section he-section-alt">
        <div className="he-container">
          <h2 className="he-h2">Common questions</h2>
          <div className="he-faq">
            <details>
              <summary>How long does James Hardie siding last?</summary>
              <p className="he-faq-body">James Hardie fiber cement siding can last 30 to 50 years with proper installation and maintenance.</p>
            </details>
            <details>
              <summary>How is fiber cement different from vinyl siding?</summary>
              <p className="he-faq-body">Fiber cement is typically more durable, more weather resistant, and gives a higher-end appearance than vinyl. It also holds colour far longer, which matters on the coast.</p>
            </details>
            <details>
              <summary>How long does the installation take?</summary>
              <p className="he-faq-body">Most siding installations take one to two weeks depending on the size and complexity of the home.</p>
            </details>
            <details>
              <summary>Does new siding add value to my home?</summary>
              <p className="he-faq-body">Yes. High-quality siding can significantly improve curb appeal and increase resale value.</p>
            </details>
            <details>
              <summary>Do you sell siding materials?</summary>
              <p className="he-faq-body">No. Good Guys Contracting is a licensed siding installation contractor. We do not sell siding materials or supplies. Everything we do is professional installation for Long Island, Queens and Brooklyn homeowners.</p>
            </details>
            <details>
              <summary>What areas do you serve?</summary>
              <p className="he-faq-body">Nassau and Suffolk County on Long Island, plus Queens and Brooklyn. We do not travel outside those areas.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="he-final">
        <div className="he-container">
          <h2>Ready for a real number on your siding project?</h2>
          <p>Get a detailed James Hardie estimate within 24 hours.</p>
          <div className="he-final-actions">
            <a href="#estimate" className="he-btn he-btn-primary">Get My Free Estimate</a>
            <a href={PHONE_HREF} className="he-btn he-btn-ghost-light">Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="he-footer">
        <div className="he-container">
          <div className="he-footer-grid">
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
          <div className="he-footer-legal">
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

      {/* ── STICKY MOBILE BAR ───────────────────────────────────────────── */}
      <div className="he-sticky">
        <a href={PHONE_HREF} className="he-btn he-btn-outline">Call now</a>
        <a href="#estimate" className="he-btn he-btn-primary">Free estimate</a>
      </div>
    </div>
  )
}
