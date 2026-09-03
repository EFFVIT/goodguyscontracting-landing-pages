import type { Metadata } from 'next'
import HardieEstimateV2Client from '@/components/pages/HardieEstimateV2Client'

export const metadata: Metadata = {
  // Offer moved into the title. Pacific Exteriors — the highest-volume
  // advertiser in the 2026-08-14 teardown at 97 archived creatives — puts its
  // dollar offer in the title tag ("$750 Off Re-Side") so it earns the click
  // before the page even loads. Good Guys' equivalent lever is the financing
  // that was already running on /m/long-island and missing from search.
  title: 'James Hardie Siding on Long Island — Free Estimate, 0% for 12 Months | Good Guys Contracting',
  description:
    'Licensed James Hardie fiber cement siding installation for Long Island, Queens and Brooklyn. Rated 4.8 from 122 Google reviews. Detailed estimate within 24 hours, financing available on approved credit. We install — we are not a siding supplier.',
  robots: 'noindex, nofollow',
  openGraph: {
    images: [{
      url: 'https://more.goodguyscontracting.com/og/hardie-estimate.webp',
      width: 1200, height: 630,
      alt: 'James Hardie fiber cement siding installed on a Long Island home by Good Guys Contracting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://more.goodguyscontracting.com/og/hardie-estimate.webp'],
  },
}

export default function Page() {
  return <HardieEstimateV2Client />
}
