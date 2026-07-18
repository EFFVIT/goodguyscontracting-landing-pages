'use client'
import { Suspense } from 'react'
import GhlForm from '../GhlForm'
import GclidCapture from '../GclidCapture'
import MetaPixel from '../MetaPixel'

// Paid-social (Meta) recreation of learn.goodguyscontracting.com/long-island-sm-001
// (a GHL-hosted funnel page) as clean React on the fleet. Copy reproduced
// verbatim from the source (including the source's "CONTACTING" heading typo).
// Non-medical client: browser Meta pixel retained. Forms wired through the
// shared GhlForm (gclid + fbclid + UTM passthrough), never a raw iframe.

const DARK = '#050505'
const BLUE = '#4473CA'
const ORANGE = '#f2743a'
const PHONE = '(516) 689-8802'
const PHONE_HREF = 'tel:+15166898802'
const IMG = '/img/m/long-island'
const QUOTE_FORM = 'osSaPKyY5TRbO78gFQ7I' // INSTANT QUOTE - Long Island - Social
const NEWSLETTER_FORM = 'yWrnhrk7Iuy6wJSUNCOa' // Newsletter - Long Island - Social

function BtnBlue({ children, href = '#hero-form' }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} style={{
      display: 'inline-block', background: BLUE, color: '#fff', fontWeight: 700,
      padding: '15px 34px', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.03em',
      fontSize: 15, textTransform: 'uppercase',
    }}>{children}</a>
  )
}

export default function LongIslandMetaLP() {
  return (
    <>
      <MetaPixel />
      <Suspense fallback={null}><GclidCapture /></Suspense>

      <style>{`
        .li-wrap * { box-sizing: border-box; }
        .li-wrap { font-family: 'Lato', system-ui, sans-serif; color: ${DARK}; }
        .li-wrap h1, .li-wrap h2, .li-wrap h3 { font-family: 'Cormorant Garamond', Georgia, serif; }
        .li-container { max-width: 1160px; margin: 0 auto; padding: 0 20px; }
        .li-hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
        .li-steps, .li-why { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .li-why { grid-template-columns: repeat(4, 1fr); }
        .li-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .li-videos { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .li-tst { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) {
          .li-hero-grid, .li-videos { grid-template-columns: 1fr; }
          .li-steps, .li-why, .li-gallery, .li-tst { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="li-wrap">
        {/* Hero */}
        <header id="hero-form" style={{ background: DARK, color: '#fff', padding: '26px 0 64px' }}>
          <div className="li-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
              <img src={`${IMG}/logo.svg`} alt="Good Guys Contracting" style={{ height: 64, width: 'auto' }} />
              <a href={PHONE_HREF} style={{ color: '#fff', fontWeight: 700, fontSize: 22, textDecoration: 'none' }}>{PHONE}</a>
            </div>
            <div className="li-hero-grid">
              <div>
                <h1 style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.1, fontWeight: 700, margin: '0 0 18px' }}>
                  Long Island&apos;s Premier Exterior Remodeling Company
                </h1>
                <p style={{ fontSize: 18, lineHeight: 1.6, color: '#d6d6d6', margin: 0 }}>
                  Trust the experts with the reputation for quality service at a fair price. Get a quote within 24 hours.
                </p>
              </div>
              <div style={{ background: '#fff', color: DARK, borderRadius: 10, padding: '26px 24px', boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}>
                <h2 style={{ fontSize: 26, fontWeight: 700, textAlign: 'center', margin: '0 0 6px', textTransform: 'uppercase' }}>
                  Get A Quote Within 24 Hours
                </h2>
                <GhlForm formId={QUOTE_FORM} height={560} formName="INSTANT QUOTE - Long Island - Social" />
              </div>
            </div>
          </div>
        </header>

        {/* Why Good Guys video */}
        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div className="li-container" style={{ textAlign: 'center', maxWidth: 900 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, margin: '0 0 18px', textTransform: 'uppercase' }}>
              Only Good Guys Should Install James Hardie Siding
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#333', margin: '0 auto 30px' }}>
              At Good Guys Contracting, we believe in providing the best results, made with the best products, which is
              why we use James Hardie Siding. Wind resistant to 150 mph and fire, moisture, pest, and impact resistant,
              so your home is safe &amp; secure.
            </p>
            <div style={{ maxWidth: 760, margin: '0 auto 30px' }}>
              <video controls muted loop playsInline preload="none" poster={`${IMG}/poster-why.webp`}
                style={{ width: '100%', borderRadius: 10, display: 'block' }}>
                <source src={`${IMG}/video-why.mp4`} type="video/mp4" />
              </video>
            </div>
            <BtnBlue>Get A Quote</BtnBlue>
          </div>
        </section>

        {/* Process */}
        <section style={{ background: '#f5f6f8', padding: '72px 0' }}>
          <div className="li-container">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, textAlign: 'center', margin: '0 0 48px', textTransform: 'uppercase' }}>
              We Make The Process Easy
            </h2>
            <div className="li-steps">
              {[
                { icon: 'step-1.svg', title: 'Click', body: 'Just call us or fill out our contact form to book an appointment for an estimate.' },
                { icon: 'step-2.svg', title: 'Consult', body: 'After listening carefully to your goals & needs, we’ll put together a detailed proposal and estimate so you’ll know exactly what you’re getting.' },
                { icon: 'step-3.svg', title: 'Transform', body: 'Enjoy your newly renovated home, crafted to provide the space, appearance, and features you’ve been dreaming about.' },
              ].map(s => (
                <div key={s.title} style={{ textAlign: 'center' }}>
                  <img src={`${IMG}/${s.icon}`} alt={s.title} style={{ width: 80, height: 80, margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 10px' }}>{s.title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: '#444', margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <img src={`${IMG}/financing.webp`} alt="0% interest for 12 months, no payments for 12 months on approved credit" style={{ maxWidth: 560, width: '100%', height: 'auto' }} />
            </div>
          </div>
        </section>

        {/* Schedule inspection form */}
        <section style={{ background: DARK, color: '#fff', padding: '72px 0' }}>
          <div className="li-container" style={{ maxWidth: 720, textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, margin: '0 0 14px', textTransform: 'uppercase' }}>
              Schedule An Inspection Today
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#d6d6d6', margin: '0 0 30px' }}>
              Stop frowning and grumbling about your old siding, roofing, or other exterior features and start loving your home again!
            </p>
            <div style={{ background: '#fff', color: DARK, borderRadius: 10, padding: '26px 24px' }}>
              <GhlForm formId={QUOTE_FORM} height={560} formName="INSTANT QUOTE - Long Island - Social" />
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div className="li-container">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, textAlign: 'center', margin: '0 0 48px', textTransform: 'uppercase' }}>
              Why Choose Good Guys Contacting?
            </h2>
            <div className="li-why">
              {[
                { icon: 'why-pencil.svg', title: 'Design/Estimating Process', body: 'We listen carefully to your needs to create a design & estimate that will have you smiling.' },
                { icon: 'why-award.svg', title: 'Pricing', body: 'At Good Guys Contracting, fair pricing and accurate estimates are our promise.' },
                { icon: 'why-house.svg', title: 'Quality Craftsmanship', body: 'We build to last so you can be confident the results are as sturdy as they are beautiful.' },
                { icon: 'why-award.svg', title: 'Job Implementation', body: 'We treat our customers with respect. That means we show up when we say so and do what we promised.' },
              ].map(c => (
                <div key={c.title} style={{ textAlign: 'center' }}>
                  <img src={`${IMG}/${c.icon}`} alt="" style={{ width: 64, height: 64, margin: '0 auto 14px' }} />
                  <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 10px' }}>{c.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: '#444', margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <BtnBlue>Get A Quote</BtnBlue>
            </div>
          </div>
        </section>

        {/* Real homes / videos + gallery */}
        <section style={{ background: '#f5f6f8', padding: '72px 0' }}>
          <div className="li-container">
            <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 44px' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, margin: '0 0 16px', textTransform: 'uppercase' }}>
                Real Homes. Real Results
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: '#333', margin: 0 }}>
                Don&apos;t take our word for it. Read our testimonials &amp; look at our gallery for proof that Good Guys is
                the best. Remodeling, Roofing, Siding, and More!
              </p>
            </div>
            <div className="li-videos" style={{ marginBottom: 32 }}>
              <video controls muted loop playsInline preload="none" poster={`${IMG}/poster-testimonial.webp`}
                style={{ width: '100%', borderRadius: 10, display: 'block' }}>
                <source src={`${IMG}/video-testimonial.mp4`} type="video/mp4" />
              </video>
              <video controls muted loop playsInline preload="none" poster={`${IMG}/poster-afters.webp`}
                style={{ width: '100%', borderRadius: 10, display: 'block' }}>
                <source src={`${IMG}/video-afters.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className="li-gallery">
              <img src={`${IMG}/home-1.webp`} alt="Long Island home with new siding by Good Guys Contracting" style={{ width: '100%', borderRadius: 10, display: 'block' }} />
              <img src={`${IMG}/home-2.webp`} alt="Board and batten siding project by Good Guys Contracting" style={{ width: '100%', borderRadius: 10, display: 'block' }} />
              <img src={`${IMG}/home-3.webp`} alt="Completed exterior remodel by Good Guys Contracting" style={{ width: '100%', borderRadius: 10, display: 'block' }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <BtnBlue>Get Your Quote</BtnBlue>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div className="li-container" style={{ maxWidth: 820, textAlign: 'center' }}>
            <img src={`${IMG}/consult.webp`} alt="Good Guys Contracting consultation with a Long Island homeowner" style={{ maxWidth: 340, width: '100%', borderRadius: 10, margin: '0 auto 28px', display: 'block' }} />
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, margin: '0 0 16px', textTransform: 'uppercase' }}>
              Long Island Homeowners Trust Good Guys
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#333', margin: '0 0 30px' }}>
              Home renovation is a big job. Trust the experts with the reputation for quality service at a fair price.
              Trust Good Guys Contracting.
            </p>
            <BtnBlue href={PHONE_HREF}>Give Us A Call</BtnBlue>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ background: DARK, color: '#fff', padding: '72px 0' }}>
          <div className="li-container">
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <p style={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 8px' }}>Testimonials</p>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, margin: 0 }}>Hear What Others Are Raving About</h2>
            </div>
            <div className="li-tst">
              {[
                { q: 'The staff at Good Guys Contracting was extremely professional and the craftsmanship was so great that people keep stopping by to mention how beautiful my house looks.', who: 'Danielle M. of Long Beach, NY' },
                { q: 'Good Guys Contracting prepared me for the scope of the job in advance. They did the job exactly as they stated they and the job were completed flawlessly. Their team approach made the job go very smoothly.', who: 'Hank B. of Westhampton, NY' },
                { q: 'Our time and work with Good Guys have been one of the benefits of having gone through Hurricane Sandy. They really made the process painless. They were better than we could have hoped for!', who: 'Susan K. of Lido Beach, NY' },
              ].map(t => (
                <div key={t.who} style={{ background: '#141414', borderRadius: 10, padding: '28px 24px' }}>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: '#e6e6e6', margin: '0 0 16px', fontStyle: 'italic' }}>&ldquo;{t.q}&rdquo;</p>
                  <p style={{ fontWeight: 700, color: ORANGE, margin: 0 }}>{t.who}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: '#0a0a0a', color: '#fff', padding: '56px 0 40px' }}>
          <div className="li-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
            <div>
              <img src={`${IMG}/logo.svg`} alt="Good Guys Contracting" style={{ height: 72, width: 'auto', marginBottom: 18 }} />
              <p style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>Social Media</p>
              <div style={{ display: 'flex', gap: 14 }}>
                <a href="https://www.facebook.com/goodguyscontracting" aria-label="Facebook" style={{ background: '#fff', borderRadius: 6, padding: 8, display: 'inline-flex' }}>
                  <img src={`${IMG}/facebook.svg`} alt="Facebook" width={20} height={20} />
                </a>
                <a href="https://www.instagram.com/goodguyscontracting" aria-label="Instagram" style={{ background: '#fff', borderRadius: 6, padding: 8, display: 'inline-flex' }}>
                  <img src={`${IMG}/instagram.svg`} alt="Instagram" width={20} height={20} />
                </a>
              </div>
            </div>
            <div>
              <p style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>Newsletter</p>
              <div style={{ background: '#fff', color: DARK, borderRadius: 10, padding: '18px 18px' }}>
                <GhlForm formId={NEWSLETTER_FORM} height={220} formName="Newsletter - Long Island - Social" />
              </div>
            </div>
          </div>
          <div className="li-container" style={{ borderTop: '1px solid #2a2a2a', marginTop: 40, paddingTop: 20, color: '#9a9a9a', fontSize: 13 }}>
            &copy; {new Date().getFullYear()} Good Guys Contracting. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}
