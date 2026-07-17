import type { Metadata } from 'next'
import SidingReplacementClient from '@/components/pages/SidingReplacementClient'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.goodguyscontracting.com/og/siding-replacement.webp", width: 1200, height: 630, alt: "New siding installed on a Long Island home by Good Guys Contracting" }] },
  twitter: { card: "summary_large_image", images: ["https://more.goodguyscontracting.com/og/siding-replacement.webp"] },
  title: 'How Much Does Siding Replacement Cost on Long Island? – Good Guys Contracting',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <SidingReplacementClient />
}
