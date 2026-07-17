import type { Metadata } from 'next'
import CookiePolicyClient from '@/components/pages/CookiePolicyClient'

export const metadata: Metadata = {
  title: 'Cookie Policy - Good Guys Contracting',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <CookiePolicyClient />
}
