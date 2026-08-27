import DniSwap from '@/components/DniSwap'
import Script from 'next/script'
import Fab from '@/components/fab/Fab'
import './globals.css'

export const metadata = {
  // metadataBase is load-bearing, not boilerplate. Next.js resolves every RELATIVE
  // metadata URL against it, and with it unset the build falls back to
  // http://localhost:3000 — so the deployed legal pages and 404 served
  // <meta property="og:image" content="http://localhost:3000/img/james-hardie/GG_logow-1-1.png">
  // to the public internet. The /c and /m routes set absolute URLs themselves and
  // were never affected. Verified in the build output 2026-08-27: 11/11 prerendered
  // pages absolute, zero localhost. It fails silently — the page renders perfectly
  // and the defect lives only in a meta tag no human looks at (H-45).
  metadataBase: new URL('https://more.goodguyscontracting.com'),
  openGraph: {
    images: [{ url: '/img/james-hardie/GG_logow-1-1.png', width: 600, height: 200, alt: 'Good Guys Contracting' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZMMGWS');`,
          }}
        />
        <Script
          id="ghl-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6683c891dd58566324bbf8d8"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Fab client="goodguys" />
        <DniSwap />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZMMGWS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
