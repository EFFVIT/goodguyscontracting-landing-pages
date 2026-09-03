import type { Metadata } from 'next'
import JamesHardieClient from '@/components/pages/JamesHardieClient'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.goodguyscontracting.com/og/james-hardie.webp", width: 1200, height: 630, alt: "Long Island home with premium fiber cement siding by Good Guys Contracting" }] },
  twitter: { card: "summary_large_image", images: ["https://more.goodguyscontracting.com/og/james-hardie.webp"] },
  // 2026-09-03: the title was missing its noun — "Your Long Island" with nothing
  // after it. The same truncated string was fixed in the Demand Gen ad copy on
  // 08-31 and survived here, which is where this campaign's traffic actually lands.
  title: 'Protect and Transform Your Long Island Home – Good Guys Contracting',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <JamesHardieClient />
}
