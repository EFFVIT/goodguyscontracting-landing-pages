'use client'
import { Suspense, useEffect } from 'react'
import GhlForm from '../GhlForm'
import GclidCapture from '../GclidCapture'
import MetaPixel from '../MetaPixel'
import './james-hardie.css'

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

export default function JamesHardieClient({
  formId = 'puhKbvE5026OlrQ53J7j',
  pixel = false,
}: {
  formId?: string
  pixel?: boolean
} = {}) {
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
      {pixel && <MetaPixel />}
      <Suspense fallback={null}><GclidCapture /></Suspense>
      <header className="site-header" id="site-header">
        <div className="container">
          <div className="header-inner">
            <a href="/james-hardie/" aria-label="Good Guys Contracting">
              <img src="/img/james-hardie/GG_logow-1-1.png" alt="" className="site-logo" width="352" height="356" />
            </a>
            <div className="header-actions">
              <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
              <a href="tel:+16318406299" className="btn btn-ghost">(631) 840-6299</a>
            </div>
          </div>
        </div>
      </header>
      
      
      <section className="hero" id="estimate-form">
        <div className="container">
          <div className="hero-inner">
      
            
            <div className="hero-content">
              <h1>Protect and Transform Your Long Island Home With James Hardie Siding&#8212;Installed by Trusted Local Experts</h1>
              <p className="hero-sub">Upgrade your Long Island home with premium fiber cement siding designed to last decades&#8212;installed by trusted local siding professionals.</p>
              <ul className="hero-bullets">
                <li>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                  Built to withstand Long Island weather
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                  Premium curb appeal with long-lasting color
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                  Installed by experienced siding specialists
                </li>
              </ul>
              <div className="hero-cta-row">
                <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
                <a href="#projects" className="btn btn-outline-white">See Hardie Siding Projects</a>
              </div>
            </div>
      
            
            <div className="hero-form-col">
              <h2 className="hero-form-heading">CONTACT US FOR A QUOTE WITHIN 24 HOURS</h2>
              <GhlForm formId={formId} height={620} formName="Protect and Transform Your Long Island –" />
              <p className="hero-form-note">Spring and summer installation slots fill quickly</p>
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="trust-strip">
        <div className="container">
          <div className="trust-badges">
      
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M40 26C40 36 33 41 24.68 43.9C24.2443 44.0476 23.7711 44.0406 23.34 43.88C15 41 8 36 8 26V12C8 11.4696 8.21071 10.9608 8.58579 10.5858C8.96086 10.2107 9.46957 9.99998 10 9.99998C14 9.99998 19 7.59998 22.48 4.55998C22.9037 4.19798 23.4427 3.99908 24 3.99908C24.5573 3.99908 25.0963 4.19798 25.52 4.55998C29.02 7.61998 34 9.99998 38 9.99998C38.5304 9.99998 39.0391 10.2107 39.4142 10.5858C39.7893 10.9608 40 11.4696 40 12V26Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Licensed &amp; Insured
            </div>
      
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M40 20C40 29.986 28.922 40.386 25.202 43.598C24.8554 43.8586 24.4336 43.9995 24 43.9995C23.5664 43.9995 23.1446 43.8586 22.798 43.598C19.078 40.386 8 29.986 8 20C8 15.7565 9.68571 11.6869 12.6863 8.68629C15.6869 5.68571 19.7565 4 24 4C28.2435 4 32.3131 5.68571 35.3137 8.68629C38.3143 11.6869 40 15.7565 40 20Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Long Island Local
            </div>
      
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M30 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V14L30 4Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 4V12C28 13.0609 28.4214 14.0783 29.1716 14.8284C29.9217 15.5786 30.9391 16 32 16H40" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 30L22 34L30 26" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Free Consultations
            </div>
      
            <div className="trust-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M30.954 25.78L33.984 42.832C34.0179 43.0328 33.9898 43.2392 33.9032 43.4235C33.8167 43.6079 33.676 43.7614 33.4999 43.8636C33.3237 43.9658 33.1206 44.0118 32.9176 43.9954C32.7146 43.9791 32.5215 43.9011 32.364 43.772L25.204 38.398C24.8583 38.1398 24.4384 38.0003 24.007 38.0003C23.5755 38.0003 23.1556 38.1398 22.81 38.398L15.638 43.77C15.4806 43.8989 15.2877 43.9767 15.085 43.9931C14.8822 44.0095 14.6793 43.9637 14.5033 43.8618C14.3273 43.7598 14.1865 43.6067 14.0998 43.4227C14.0131 43.2387 13.9846 43.0327 14.018 42.832L17.046 25.78" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 28C30.6274 28 36 22.6274 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 22.6274 17.3726 28 24 28Z" stroke="#4473CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Quality Craftsmanship
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="why-section">
        <div className="container">
          <div className="why-inner">
      
            
            <div>
              <div className="video-wrap">
                <iframe
                  src="https://player.vimeo.com/video/1103219178?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Why Choose Good Guys Contracting for James Hardie Siding">
                </iframe>
              </div>
              <div className="partner-logos">
                <img src="/img/james-hardie/james-hardie-vector-logo-1.png" alt="" className="logo-jh" width="618" height="126" loading="lazy" />
                <img src="/img/james-hardie/elite-member-badge.png" alt="" className="logo-elite" width="1290" height="243" loading="lazy" />
              </div>
            </div>
      
            
            <div className="why-copy">
              <h2 className="section-heading">Why Homeowners Choose James Hardie Siding</h2>
              <p className="section-text">Most siding looks good for a few years. James Hardie siding is engineered to protect homes for decades while maintaining its appearance. Made from durable fiber cement, Hardie siding resists moisture, pests, and harsh weather conditions common across Long Island.</p>
              <ul className="check-list">
                <li>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                  Exceptional durability compared to traditional siding
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                  Resistant to moisture, pests, and rot
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                  Long-lasting factory-applied color
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                  Low maintenance compared to wood siding
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                  High-end appearance that improves curb appeal
                </li>
              </ul>
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="install-section">
        <div className="container">
          <div className="install-inner">
      
            
            <div className="install-copy">
              <h2 className="section-heading">Hardie Siding Is Only As Good As The Installation</h2>
              <p className="section-text">Fiber cement siding requires proper installation techniques to perform as intended. Poor installation can lead to moisture problems, premature wear, and voided manufacturer warranties. Our team follows strict installation protocols to ensure your investment is protected.</p>
              <ul className="install-checklist">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                  Proper moisture barriers
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                  Correct flashing and trim installation
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                  Manufacturer-approved installation methods
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#4473CA" aria-hidden="true"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                  Long-term siding performance
                </li>
              </ul>
              <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
            </div>
      
            
            <div className="install-img">
              <img src="/img/james-hardie/david-ferraro.png" alt="" width="1083" height="1422" loading="lazy" decoding="async" />
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="process-section">
        <div className="container">
          <h2 className="section-heading">Our Hardie Siding Installation Process</h2>
          <div className="process-steps">
      
            <div className="process-step">
              <div className="step-icon-wrap">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="#FF814B"/>
                  <path d="M45 23.3333H35C34.0795 23.3333 33.3333 24.0794 33.3333 24.9999V28.3333C33.3333 29.2537 34.0795 29.9999 35 29.9999H45C45.9205 29.9999 46.6667 29.2537 46.6667 28.3333V24.9999C46.6667 24.0794 45.9205 23.3333 45 23.3333Z" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M46.6667 26.6667H50C50.884 26.6667 51.7319 27.0179 52.357 27.6431C52.9821 28.2682 53.3333 29.116 53.3333 30.0001V53.3334C53.3333 54.2175 52.9821 55.0653 52.357 55.6904C51.7319 56.3156 50.884 56.6667 50 56.6667H30C29.1159 56.6667 28.2681 56.3156 27.643 55.6904C27.0178 55.0653 26.6667 54.2175 26.6667 53.3334V30.0001C26.6667 29.116 27.0178 28.2682 27.643 27.6431C28.2681 27.0179 29.1159 26.6667 30 26.6667H33.3333" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M35 43.3333L38.3333 46.6667L45 40" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="step-number">Step 1</p>
              <p className="step-title">Free Consultation</p>
              <p className="step-desc">We inspect your home and help you choose the best Hardie siding style and color.</p>
            </div>
      
            <div className="step-arrow">
              <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
            </div>
      
            <div className="process-step">
              <div className="step-icon-wrap">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="#FF814B"/>
                  <path d="M45 23.3333H30C28.1591 23.3333 26.6667 24.8257 26.6667 26.6666V53.3333C26.6667 55.1742 28.1591 56.6666 30 56.6666H50C51.8409 56.6666 53.3333 55.1742 53.3333 53.3333V31.6666L45 23.3333Z" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M43.3333 23.3333V29.9999C43.3333 31.8409 44.8257 33.3333 46.6667 33.3333H53.3333" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36.6666 35H33.3333" stroke="black" strokeWidth="3.33333" strokeLinecap="round"/>
                  <path d="M46.6666 41.6667H33.3333" stroke="black" strokeWidth="3.33333" strokeLinecap="round"/>
                  <path d="M46.6666 48.3333H33.3333" stroke="black" strokeWidth="3.33333" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="step-number">Step 2</p>
              <p className="step-title">Clear Project Estimate</p>
              <p className="step-desc">You receive a detailed estimate explaining materials, cost, and project timeline.</p>
            </div>
      
            <div className="step-arrow">
              <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
            </div>
      
            <div className="process-step">
              <div className="step-icon-wrap">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="#FF814B"/>
                  <path d="M45.0001 40L31.0451 53.955C30.382 54.618 29.4827 54.9905 28.5451 54.9905C27.6074 54.9905 26.7081 54.618 26.0451 53.955C25.382 53.292 25.0095 52.3927 25.0095 51.455C25.0095 50.5173 25.382 49.618 26.0451 48.955L40.0001 35" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M50 44.9999L56.6667 38.3333" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M55.8333 39.1667L52.6433 35.9767C52.0182 35.3517 51.6669 34.504 51.6667 33.62V31.6667L47.9 27.9C46.0409 26.042 43.525 24.9906 40.8967 24.9733L35 24.9333L36.5333 26.3C37.6224 27.2657 38.4945 28.4512 39.092 29.7784C39.6896 31.1057 39.999 32.5445 40 34V36.6667L43.3333 40H45.2867C46.1706 40.0002 47.0184 40.3515 47.6433 40.9767L50.8333 44.1667" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="step-number">Step 3</p>
              <p className="step-title">Professional Installation</p>
              <p className="step-desc">Our team removes old siding, prepares the exterior, and installs your new fiber cement siding system.</p>
            </div>
      
            <div className="step-arrow">
              <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
            </div>
      
            <div className="process-step">
              <div className="step-icon-wrap">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="#FF814B"/>
                  <path d="M56.335 36.6666C57.0962 40.4021 56.5537 44.2857 54.7981 47.6696C53.0425 51.0536 50.1799 53.7334 46.6876 55.2622C43.1953 56.791 39.2844 57.0763 35.6072 56.0706C31.93 55.0649 28.7087 52.829 26.4805 49.7357C24.2523 46.6424 23.1519 42.8787 23.3628 39.0723C23.5737 35.2659 25.0832 31.6468 27.6395 28.8186C30.1957 25.9904 33.6443 24.124 37.4102 23.5307C41.176 22.9374 45.0313 23.6531 48.3334 25.5583" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M35 38.3334L40 43.3334L56.6667 26.6667" stroke="black" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="step-number">Step 4</p>
              <p className="step-title">Final Walkthrough</p>
              <p className="step-desc">We review the completed project with you to ensure everything meets expectations.</p>
            </div>
      
          </div>
        </div>
      </section>
      
      
      <section className="gallery-section" id="projects">
        <div className="container">
          <h2 className="section-heading">Real Hardie Siding Transformations</h2>
          <p className="gallery-sub">Seeing the results helps homeowners imagine what their own homes could look like.</p>
          <div className="ba-grid">
            <img src="/img/james-hardie/Container.png" alt="" className="ba-img" width="562" height="609" loading="lazy" decoding="async" />
            <img src="/img/james-hardie/Container-1.png" alt="" className="ba-img" width="562" height="616" loading="lazy" decoding="async" />
          </div>
          <div className="gallery-cta">
            <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
          </div>
        </div>
      </section>
      
      
      <section className="testimonials-section">
        <div className="container">
        <div className="testimonials-split">
      
          <div className="testimonials-left">
            <h2 className="section-heading">Hear What Others Are Saying About Our Work</h2>
          </div>
      
          <div className="testimonials-right">
      
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" aria-hidden="true"><path fill="#4473CA" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg>
              </div>
              <p className="testimonial-quote">&#8220;Our time and work with Good Guys have been one of the benefits of having gone through Hurricane Sandy. They really made the process painless. They were better than we could have hoped for!&#8221;</p>
              <p className="testimonial-attr">&#8212; Susan K., Lido Beach, NY</p>
            </div>
      
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" aria-hidden="true"><path fill="#4473CA" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg>
              </div>
              <p className="testimonial-quote">&#8220;Good Guys Contracting prepared me for the scope of the job in advance. They did the job exactly as they stated they and the job were completed flawlessly. Their team approach made the job go very smoothly.&#8221;</p>
              <p className="testimonial-attr">&#8212; Hank B., Westhampton NY</p>
            </div>
      
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" aria-hidden="true"><path fill="#4473CA" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg>
              </div>
              <p className="testimonial-quote">&#8220;The staff at Good Guys Contracting was extremely professional and the craftsmanship was so great that people keep stopping by to mention how beautiful my house looks.&#8221;</p>
              <p className="testimonial-attr">&#8212; Danielle M., Long Beach NY</p>
            </div>
      
          </div>
      
        </div>
        </div>
      </section>
      
      
      <section className="faq-section">
        <div className="container">
          <div className="faq-inner">
      
            <div className="faq-left">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <button className="faq-expand-btn" onClick={expandAllFaqs}>Expand All +</button>
            </div>
      
            <ul className="faq-list">
              <li className="faq-item">
                <button className="faq-question" onClick={toggleFaqClick}>
                  How long does James Hardie siding last?
                  <span className="faq-chevron">
                    <svg className="icon-open" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>
                    <svg className="icon-closed" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                  </span>
                </button>
                <div className="faq-answer">James Hardie fiber cement siding can last 30&#8211;50 years with proper installation and maintenance.</div>
              </li>
              <li className="faq-item">
                <button className="faq-question" onClick={toggleFaqClick}>
                  Is Hardie siding better than vinyl?
                  <span className="faq-chevron">
                    <svg className="icon-open" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>
                    <svg className="icon-closed" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                  </span>
                </button>
                <div className="faq-answer">Fiber cement siding is typically more durable, more weather resistant, and provides a higher-end appearance compared to vinyl siding.</div>
              </li>
              <li className="faq-item">
                <button className="faq-question" onClick={toggleFaqClick}>
                  How long does siding installation take?
                  <span className="faq-chevron">
                    <svg className="icon-open" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>
                    <svg className="icon-closed" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                  </span>
                </button>
                <div className="faq-answer">Most siding installations take one to two weeks depending on the size and complexity of the home.</div>
              </li>
              <li className="faq-item">
                <button className="faq-question" onClick={toggleFaqClick}>
                  Does Hardie siding increase home value?
                  <span className="faq-chevron">
                    <svg className="icon-open" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>
                    <svg className="icon-closed" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                  </span>
                </button>
                <div className="faq-answer">Yes. High-quality siding can significantly improve curb appeal and increase resale value.</div>
              </li>
              <li className="faq-item">
                <button className="faq-question" onClick={toggleFaqClick}>
                  Do you sell siding materials directly?
                  <span className="faq-chevron">
                    <svg className="icon-open" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>
                    <svg className="icon-closed" width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                  </span>
                </button>
                <div className="faq-answer">Good Guys Contracting is a licensed siding installation contractor. We do not sell siding materials or supplies. All services are professional installation for Long Island homeowners.</div>
              </li>
            </ul>
      
          </div>
        </div>
      </section>
      
      
      <section className="final-cta">
        <div className="container">
          <h2 className="section-heading">Ready to upgrade your home with James Hardie siding?</h2>
          <p className="final-cta-sub">Get a professional consultation and a detailed estimate for your project.</p>
          <div className="final-cta-btns">
            <a href="#estimate-form" className="btn btn-blue">Get My Free Siding Estimate</a>
            <a href="tel:+16318406299" className="btn btn-outline-white">Schedule Consultation</a>
          </div>
        </div>
      </section>
      
      
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
      
            
            <div>
              <a href="https://start.goodguyscontracting.com/">
                <img src="/img/james-hardie/GG_logow-1-2.png" alt="" className="footer-logo" width="456" height="460" loading="lazy" />
              </a>
              <p className="footer-brand-name">Good Guys Contracting</p>
              <p className="footer-tagline">Professional James Hardie siding installation on Long Island</p>
            </div>
      
            
            <div className="footer-contact">
              <p className="footer-contact-heading">Contact Information</p>
              <ul className="footer-contact-list">
                <li>Phone: <a href="tel:+16318406299">(631) 840-6299</a></li>
                <li>Email: <a href="mailto:info@goodguyscontracting.com">info@goodguyscontracting.com</a></li>
                <li>Service Area: <a href="https://maps.app.goo.gl/86W5VSu7bJ72CxCK9" target="_blank" rel="noopener">Long Island, NY</a></li>
              </ul>
            </div>
      
          </div>
      
          <div className="footer-bottom">
            <span>&#169; 2026 Good Guys Contracting. All rights reserved.</span>
            <div className="footer-legal-links">
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
