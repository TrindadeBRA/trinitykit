import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR" className='scroll-smooth dark'>
      <Head />
      <body className="bg-light-base dark:bg-jacarta-900">
        <Main />
        <NextScript />
        {/* <script src="/js/app.bundle.js" defer></script> */}
      </body>
    </Html>
  )
}
