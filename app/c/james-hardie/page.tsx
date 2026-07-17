import type { Metadata } from 'next'
import JamesHardieClient from '@/components/pages/JamesHardieClient'

export const metadata: Metadata = {
  title: 'Protect and Transform Your Long Island – Good Guys Contracting',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <JamesHardieClient />
}
