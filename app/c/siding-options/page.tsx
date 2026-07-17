import type { Metadata } from 'next'
import SidingOptionsClient from '@/components/pages/SidingOptionsClient'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.goodguyscontracting.com/og/siding-options.webp", width: 1200, height: 630, alt: "Comparing siding options for Long Island homes with Good Guys Contracting" }] },
  twitter: { card: "summary_large_image", images: ["https://more.goodguyscontracting.com/og/siding-options.webp"] },
  title: 'Siding Replacement on Long Island – Good Guys Contracting',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <SidingOptionsClient />
}
