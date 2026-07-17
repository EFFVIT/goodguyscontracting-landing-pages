import type { Metadata } from 'next'
import SidingOptionsClient from '@/components/pages/SidingOptionsClient'

export const metadata: Metadata = {
  title: 'Siding Replacement on Long Island – Good Guys Contracting',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <SidingOptionsClient />
}
