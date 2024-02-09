import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
const websiteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL
const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

//[TO DO] Integrar - Yoast SEO 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={websiteTitle}
        description="Fácil integração entre WordPress e Next.js."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: websiteUrl,
          siteName: websiteTitle,
        }}
      />
      <Component {...pageProps} />
      {/* <Analytics /> */}
      {/* <GoogleAnalytics gaId={gaId}/> */}
    </>
  )
}
