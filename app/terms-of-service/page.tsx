import type { Metadata } from 'next'
import TermsOfServiceClient from '@/components/pages/TermsOfServiceClient'

export const metadata: Metadata = {
  title: 'Terms of Service - Good Guys Contracting',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <TermsOfServiceClient />
}
