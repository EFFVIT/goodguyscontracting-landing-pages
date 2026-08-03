import type { Metadata } from 'next'
import HardieEstimateClient from '@/components/pages/HardieEstimateClient'

export const metadata: Metadata = {
  title: 'James Hardie Siding on Long Island — Free Estimate | Good Guys Contracting',
  description:
    'Licensed James Hardie fiber cement siding installation for Long Island, Queens and Brooklyn. Detailed estimate within 24 hours. We install — we are not a siding supplier.',
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
  return <HardieEstimateClient />
}
