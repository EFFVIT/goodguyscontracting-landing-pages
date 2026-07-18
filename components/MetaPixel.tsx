'use client'
import Script from 'next/script'

// Meta (Facebook) Pixel — kept verbatim from the source paid-social funnels
// (start.goodguyscontracting.com/james-hardie-meta + learn.goodguyscontracting.com).
// Good Guys is a NON-medical (home services) client, so there is NO HIPAA
// carve-out — the browser pixel is retained exactly as the source has it.
// Scoped to the /m/ paid-social routes only (not the global layout) so the
// non-paid /c/ pages stay pixel-free.
const PIXEL_ID = '3074610002670365'

export default function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`,
      }} />
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`} />
      </noscript>
    </>
  )
}
