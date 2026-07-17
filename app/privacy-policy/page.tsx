import type { Metadata } from 'next'
import PrivacyPolicyClient from '@/components/pages/PrivacyPolicyClient'

export const metadata: Metadata = {
  title: 'Privacy Policy - Good Guys Contracting',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <PrivacyPolicyClient />
}
