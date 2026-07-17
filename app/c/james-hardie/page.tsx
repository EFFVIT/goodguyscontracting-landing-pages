import type { Metadata } from 'next'
import JamesHardieClient from '@/components/pages/JamesHardieClient'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.goodguyscontracting.com/og/james-hardie.webp", width: 1200, height: 630, alt: "Long Island home with premium fiber cement siding by Good Guys Contracting" }] },
  twitter: { card: "summary_large_image", images: ["https://more.goodguyscontracting.com/og/james-hardie.webp"] },
  title: 'Protect and Transform Your Long Island – Good Guys Contracting',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <JamesHardieClient />
}
