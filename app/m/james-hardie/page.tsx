import type { Metadata } from 'next'
import JamesHardieClient from '@/components/pages/JamesHardieClient'

export const metadata: Metadata = {
  title: 'Protect and Transform Your Long Island – Meta – Good Guys Contracting',
  description: 'Upgrade your Long Island home with premium James Hardie fiber cement siding designed to last decades, installed by trusted local siding professionals. Get your free estimate.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.goodguyscontracting.com/og/m-james-hardie.webp', width: 1200, height: 630, alt: 'Long Island home with premium fiber cement siding by Good Guys Contracting' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.goodguyscontracting.com/og/m-james-hardie.webp'] },
}

// Paid-social (Meta) recreation of start.goodguyscontracting.com/james-hardie-meta/.
// Same page body as /c/james-hardie; the meta funnel uses its own GHL form
// (EhfC2NkpgtcaWQxDvUE6) and keeps the browser Meta pixel (non-medical client).
export default function Page() {
  return <JamesHardieClient formId="EhfC2NkpgtcaWQxDvUE6" pixel />
}
