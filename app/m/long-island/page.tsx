import type { Metadata } from 'next'
import LongIslandMetaLP from '@/components/pages/LongIslandMetaLP'

export const metadata: Metadata = {
  title: 'Long Island’s Premier Exterior Remodeling Company | Good Guys Contracting',
  description: 'Siding, roofing, remodeling and more on Long Island. Trust the experts with the reputation for quality service at a fair price. Get a quote within 24 hours.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://more.goodguyscontracting.com/og/m-long-island.webp', width: 1200, height: 630, alt: 'Long Island exterior remodeling by Good Guys Contracting' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.goodguyscontracting.com/og/m-long-island.webp'] },
}

export default function Page() {
  return <LongIslandMetaLP />
}
