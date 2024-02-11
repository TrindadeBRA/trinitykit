import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
const websiteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL
const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

// TO DO - Integrar o Yoast SEO 
// TO DO - Entender o uso do websiteUrl


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={websiteTitle}
        description={`${websiteTitle} - FrontEnd`}
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: websiteUrl,
          siteName: websiteTitle,
          images: [{
            url: '/ogimage.webp',
            width: 850,
            height: 650,
            alt: websiteTitle,
          }],
        }}
      />
      <Component {...pageProps} />
      {/* <Analytics /> */}
      {/* <GoogleAnalytics gaId={gaId}/> */}
    </>
  )
}
