'use client'
import { Suspense, useEffect } from 'react'
import GhlForm from '../GhlForm'
import GclidCapture from '../GclidCapture'
import './siding-options.css'

function toggleFaqClick(e: React.MouseEvent<HTMLButtonElement>) {
  const item = e.currentTarget.closest('.faq-item')
  if (!item) return
  const isOpen = item.classList.contains('open')
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'))
  if (!isOpen) item.classList.add('open')
}

function expandAllFaqs() {
  document.querySelectorAll('.faq-item').forEach(i => i.classList.add('open'))
}

export default function SidingOptionsClient() {
  useEffect(() => {
    const header = document.getElementById('site-header')
    if (!header) return
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Suspense fallback={null}><GclidCapture /></Suspense>
      <header className="site-header" id="site-header">
        <div className="container">
          <div className="header-inner">
            <a href="https://start.goodguyscontracting.com/" className="header-logo">
              <img src="/c/siding-options/images/logo.png" alt="Good Guys Contracting" width="48" height="48" />
            </a>
            <div className="header-actions">
              <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
              <a href="tel:+16318406299" className="btn btn-ghost-dark">(631) 840-6299</a>
            </div>
          </div>
        </div>
      </header>
      
      
      <section className="hero-section">
        <div className="container">
          <div className="hero-inner">
      
            
            <div className="hero-left">
              <h1 className="hero-h1">What Is The Best Siding For Long Island Homes?</h1>
              <p className="hero-sub">Compare siding materials, durability, and long-term value before replacing your home's exterior.</p>
              <p className="hero-sub2">Your home's siding protects against weather damage while enhancing curb appeal and property value.</p>
      
              <p className="hero-form-label">CONTACT US FOR A QUOTE WITHIN 24 HOURS</p>
              <div className="hero-form-wrap" id="estimate-form">
                <GhlForm formId="CZckNmjcWQNDGPK1y4p1" height={620} formName="Siding Replacement on Long Island – Good" />
              </div>
              <p className="hero-form-note">Get a professional estimate based on your home size, siding material, and installation details.</p>
            </div>
      
            
            <div className="hero-right">
              <img src="/c/siding-options/images/hero-house.png" alt="Siding replacement project" className="hero-house-img" width="607" height="611" loading="eager" />
              <img src="/c/siding-options/images/five-stars.png" alt="5-star ratings" className="hero-stars-img" width="320" height="60" loading="eager" />
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="trust-section">
        <div className="container">
          <div className="trust-inner">
      
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M40 26C40 36 33 41 24.68 43.9C24.2443 44.0476 23.7711 44.0406 23.34 43.88C15 41 8 36 8 26V12C8 11.4696 8.21071 10.9608 8.58579 10.5858C8.96086 10.2107 9.46957 9.99998 10 9.99998C14 9.99998 19 7.59998 22.48 4.55998C22.9037 4.19798 23.4427 3.99908 24 3.99908C24.5573 3.99908 25.0963 4.19798 25.52 4.55998C29.02 7.61998 34 9.99998 38 9.99998C38.5304 9.99998 39.0391 10.2107 39.4142 10.5858C39.7893 10.9608 40 11.4696 40 12V26Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="trust-badge-title">Licensed &amp; Insured</span>
            </div>
      
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M40 20C40 29.986 28.922 40.386 25.202 43.598C24.8554 43.8586 24.4336 43.9995 24 43.9995C23.5664 43.9995 23.1446 43.8586 22.798 43.598C19.078 40.386 8 29.986 8 20C8 15.7565 9.68571 11.6869 12.6863 8.68629C15.6869 5.68571 19.7565 4 24 4C28.2435 4 32.3131 5.68571 35.3137 8.68629C38.3143 11.6869 40 15.7565 40 20Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="trust-badge-title">Long Island Local</span>
            </div>
      
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M30 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V14L30 4Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 4V12C28 13.0609 28.4214 14.0783 29.1716 14.8284C29.9217 15.5786 30.9391 16 32 16H40" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 30L22 34L30 26" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="trust-badge-title">Free Consultations</span>
            </div>
      
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M30.954 25.78L33.984 42.832C34.0179 43.0328 33.9898 43.2392 33.9032 43.4235C33.8167 43.6079 33.676 43.7614 33.4999 43.8636C33.3237 43.9658 33.1206 44.0118 32.9176 43.9954C32.7146 43.9791 32.5215 43.9011 32.364 43.772L25.204 38.398C24.8583 38.1398 24.4384 38.0003 24.007 38.0003C23.5755 38.0003 23.1556 38.1398 22.81 38.398L15.638 43.77C15.4806 43.8989 15.2877 43.9767 15.085 43.9931C14.8822 44.0095 14.6793 43.9637 14.5033 43.8618C14.3273 43.7598 14.1865 43.6067 14.0998 43.4227C14.0131 43.2387 13.9846 43.0327 14.018 42.832L17.046 25.78" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 28C30.6274 28 36 22.6274 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 22.6274 17.3726 28 24 28Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="trust-badge-title">Quality Craftsmanship</span>
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="matters-section">
        <div className="container">
          <div className="matters-inner">
      
            <div>
              <img src="/c/siding-options/images/siding-comparison.png" alt="Siding options comparison" className="matters-img" width="740" height="576" loading="lazy" />
            </div>
      
            <div>
              <h2 className="section-heading">Choosing The Right Siding Matters</h2>
              <p className="section-text">Your siding protects your home from the elements while shaping the appearance of your property. Long Island homes face unique challenges including:</p>
              <ul className="check-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                  Coastal moisture
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                  Wind and storms
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                  Seasonal temperature swings
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                  Long-term weather exposure
                </li>
              </ul>
              <p className="section-text">Choosing the right siding helps prevent costly repairs and protects your home for years.</p>
              <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="options-section">
        <div className="container">
          <h2 className="section-heading options-heading">Popular Siding Options</h2>
          <div className="options-grid">
      
            
            <div className="siding-card">
              <p className="siding-card-title">Vinyl Siding</p>
              <div>
                <p className="siding-card-sub">Pros</p>
                <ul className="check-list">
                  <li><svg width="18" height="18" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Lower upfront cost</li>
                  <li><svg width="18" height="18" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Low maintenance</li>
                  <li><svg width="18" height="18" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Many color options</li>
                </ul>
              </div>
              <div>
                <p className="siding-card-sub">Cons</p>
                <ul className="x-list">
                  <li><svg width="16" height="16" viewBox="0 0 352 512" fill="#cc3333" aria-hidden="true"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>Can crack or warp over time</li>
                  <li><svg width="16" height="16" viewBox="0 0 352 512" fill="#cc3333" aria-hidden="true"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>Less durable than fiber cement</li>
                  <li><svg width="16" height="16" viewBox="0 0 352 512" fill="#cc3333" aria-hidden="true"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>Lower perceived home value</li>
                </ul>
              </div>
            </div>
      
            
            <div className="siding-card recommended">
              <p className="siding-card-title">Fiber Cement Siding</p>
              <div>
                <p className="siding-card-sub">Pros</p>
                <ul className="check-list">
                  <li><svg width="18" height="18" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Exceptional durability</li>
                  <li><svg width="18" height="18" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Moisture and pest resistance</li>
                  <li><svg width="18" height="18" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Long lifespan</li>
                  <li><svg width="18" height="18" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>High-end appearance</li>
                </ul>
              </div>
              <div>
                <p className="siding-card-sub">Cons</p>
                <ul className="x-list">
                  <li><svg width="16" height="16" viewBox="0 0 352 512" fill="#cc3333" aria-hidden="true"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>Higher upfront investment</li>
                  <li><svg width="16" height="16" viewBox="0 0 352 512" fill="#cc3333" aria-hidden="true"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>Requires professional installation</li>
                </ul>
              </div>
              <a href="#estimate-form" className="recommended-badge">RECOMMENDED</a>
            </div>
      
            
            <div className="siding-card">
              <p className="siding-card-title">Wood Siding</p>
              <div>
                <p className="siding-card-sub">Pros</p>
                <ul className="check-list">
                  <li><svg width="18" height="18" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Natural appearance</li>
                  <li><svg width="18" height="18" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Custom finishing options</li>
                </ul>
              </div>
              <div>
                <p className="siding-card-sub">Cons</p>
                <ul className="x-list">
                  <li><svg width="16" height="16" viewBox="0 0 352 512" fill="#cc3333" aria-hidden="true"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>Requires regular maintenance</li>
                  <li><svg width="16" height="16" viewBox="0 0 352 512" fill="#cc3333" aria-hidden="true"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>Vulnerable to moisture and pests</li>
                </ul>
              </div>
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="fiber-section">
        <div className="container">
          <div className="fiber-inner">
      
            <div className="fiber-copy">
              <h2 className="section-heading">Why Fiber Cement Siding Is Often the Best Choice</h2>
              <p className="section-text">Many Long Island homeowners choose fiber cement siding because it offers the best balance of durability, appearance, and long-term value.</p>
              <p className="fiber-copy-sub">Compared to vinyl siding, fiber cement provides:</p>
              <ul className="check-list" style={{ marginBottom: '32px' }}>
                <li><svg width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Greater durability</li>
                <li><svg width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Longer lifespan</li>
                <li><svg width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Better weather resistance</li>
                <li><svg width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>Premium curb appeal</li>
              </ul>
              <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
            </div>
      
            <div className="fiber-img-col">
              <img src="/c/siding-options/images/installer-photo.png" alt="Professional siding installer" className="fiber-img" width="1083" height="1422" loading="lazy" />
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="projects-section">
        <div className="container">
          <div className="projects-header">
            <h2 className="section-heading">Real Siding Replacement Projects</h2>
            <p className="section-text">See how replacing old siding can dramatically improve a home's appearance.</p>
          </div>
          <div className="projects-grid">
            <div className="video-wrap">
              <iframe src="https://player.vimeo.com/video/1112006174?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1" allowFullScreen allow="autoplay; fullscreen; picture-in-picture" title="Siding Replacement Project 1"></iframe>
            </div>
            <div className="video-wrap">
              <iframe src="https://player.vimeo.com/video/1112025749?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1" allowFullScreen allow="autoplay; fullscreen; picture-in-picture" title="Siding Replacement Project 2"></iframe>
            </div>
            <div className="video-wrap">
              <iframe src="https://player.vimeo.com/video/1112025499?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1" allowFullScreen allow="autoplay; fullscreen; picture-in-picture" title="Siding Replacement Project 3"></iframe>
            </div>
          </div>
          <div className="projects-cta">
            <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
          </div>
        </div>
      </section>
      
      
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-inner">
      
            <div className="testimonials-left">
              <h2 className="section-heading">What Homeowners Say</h2>
              <p className="testimonials-left-sub">Real feedback from satisfied Long Island homeowners</p>
            </div>
      
            <div className="testimonials-right">
      
              <div className="tcard">
                <div className="tcard-stars">
                  <img src="/c/siding-options/images/google-stars.png" alt="5 stars" width="120" height="20" loading="lazy" />
                </div>
                <p className="tcard-quote">"The staff at Good Guys Contracting was extremely professional and the craftsmanship was so great that people keep stopping by to mention how beautiful my house looks."</p>
                <p className="tcard-name">Danielle M.</p>
                <p className="tcard-location">Long Beach, NY</p>
              </div>
      
              <div className="tcard">
                <div className="tcard-stars">
                  <img src="/c/siding-options/images/google-stars.png" alt="5 stars" width="120" height="20" loading="lazy" />
                </div>
                <p className="tcard-quote">"Good Guys Contracting prepared me for the scope of the job in advance. They did the job exactly as they stated they and the job were completed flawlessly. Their team approach made the job go very smoothly."</p>
                <p className="tcard-name">Hank B.</p>
                <p className="tcard-location">Westhampton, NY</p>
              </div>
      
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <div className="faq-inner">
            <div className="faq-list">
      
              <div className="faq-item">
                <button className="faq-btn" onClick={toggleFaqClick}>
                  What is the best siding for Long Island homes?
                  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 448 512" fill="#717182" aria-hidden="true"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                </button>
                <div className="faq-answer">Fiber cement siding is often considered one of the best options because it offers strong durability and weather resistance.</div>
              </div>
      
              <div className="faq-item">
                <button className="faq-btn" onClick={toggleFaqClick}>
                  Is fiber cement siding better than vinyl?
                  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 448 512" fill="#717182" aria-hidden="true"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                </button>
                <div className="faq-answer">Fiber cement typically lasts longer and offers better resistance to weather, pests, and impact.</div>
              </div>
      
              <div className="faq-item">
                <button className="faq-btn" onClick={toggleFaqClick}>
                  How do I know when to replace my siding?
                  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 448 512" fill="#717182" aria-hidden="true"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                </button>
                <div className="faq-answer">Signs include cracking, moisture damage, fading, and rising energy costs.</div>
              </div>
      
              <div className="faq-item">
                <button className="faq-btn" onClick={toggleFaqClick}>
                  Do you sell siding materials directly?
                  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 448 512" fill="#717182" aria-hidden="true"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                </button>
                <div className="faq-answer">Good Guys Contracting is a licensed siding installation contractor. We do not sell siding materials or supplies. All services are professional installation for Long Island homeowners.</div>
              </div>
      
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-heading">Not sure which siding option is best for your home?</h2>
          <p className="cta-sub">Schedule a consultation and our team will help you choose the best solution.</p>
          <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
        </div>
      </section>
      
      
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
      
            <div>
              <a href="https://start.goodguyscontracting.com/">
                <img src="/c/siding-options/images/logo.png" alt="Good Guys Contracting" className="footer-logo" width="496" height="500" loading="lazy" />
              </a>
              <p className="footer-brand">The Good Guys</p>
              <p className="footer-tagline">Expert siding installation and home renovation services for Long Island homeowners.</p>
              <img src="/c/siding-options/images/five-stars.png" alt="5-star rated contractor" style={{ maxWidth: '200px', marginTop: '14px' }} loading="lazy" />
            </div>
      
            <div>
              <p className="footer-col-head">Contact</p>
              <ul className="footer-contact-list">
                <li><a href="tel:+16318406299">(631) 840-6299</a></li>
                <li><a href="mailto:info@goodguyscontracting.com">info@goodguyscontracting.com</a></li>
              </ul>
            </div>
      
            <div>
              <p className="footer-col-head">Service Area</p>
              <ul className="footer-contact-list">
                <li><a href="https://maps.app.goo.gl/4pz8i5c7hagk5sst6" target="_blank" rel="noopener">Long Island, NY</a></li>
                <li><a href="https://maps.app.goo.gl/6jFDSzJvCSyDAndN6" target="_blank" rel="noopener">Suffolk County, NY</a></li>
                <li><a href="https://maps.app.goo.gl/zHRAWQmozucZxmjo6" target="_blank" rel="noopener">Nassau County, NY</a></li>
              </ul>
            </div>
      
          </div>
      
          <div className="footer-bottom">
            <span>&#169; 2026 Good Guys Contracting. All rights reserved.</span>
            <div className="footer-legal">
              <a href="https://more.goodguyscontracting.com/privacy-policy/">Privacy Policy</a>
              <a href="https://more.goodguyscontracting.com/cookie-policy/">Cookie Policy</a>
              <a href="https://more.goodguyscontracting.com/terms-of-service/">Terms of Service</a>
            </div>
          </div>
      
        </div>
      </footer>
    </>
  )
}
