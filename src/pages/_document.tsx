import { Html, Head, Main, NextScript } from 'next/document'
import { Partytown } from '@builder.io/partytown/react';
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-BR" className="scroll-smooth">
      <Head>
        {/* <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        /> */}
        <Partytown debug={true} forward={['dataLayer.push']} />
      </Head>
      <body className="bg-light-base dark:bg-jacarta-900">
        <Main />
        <NextScript />
        {/* <script src="/js/app.bundle.js" defer></script> */}
      </body>
    </Html>
  )
}
