import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR" className='scroll-smooth dark'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <body className="bg-light-base dark:bg-jacarta-900">
        <Main />
        <NextScript />
        {/* <script src="/js/app.bundle.js" defer></script> */}
      </body>
    </Html>
  )
}
