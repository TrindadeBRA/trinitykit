import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR" className='scroll-smooth'>
      <Head>
        <script src="/js/darkMode.bundle.js" defer></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <script src="/js/app.bundle.js" defer></script> */}
      </body>
    </Html>
  )
}
