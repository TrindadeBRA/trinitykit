import '@/styles/globals.css'
import { NextPageContext } from 'next';
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { SettingsDataType, getSettingsData } from './api/getSettingsData';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import Head from 'next/head';

export default function App({ Component, pageProps, settings }: AppProps & { settings: SettingsDataType }) {
  return (
    <>
      <DefaultSeo
        title={settings?.title}
        description={settings?.description}
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: settings?.frontend_app_url,
          siteName: settings?.title,
          images: [{
            url: settings?.og_image_url,
            width: 600,
            height: 315,
            alt: settings?.title,
          }],
        }}
      />
      <Head>
        <link rel="icon" href={settings?.favicon_url} />
        {/* Adicione outras meta tags de ícones aqui, se necessário */}
      </Head>
      <Component {...pageProps} settings={settings}/>
      {/* <Analytics /> */}
      <GoogleAnalytics gaId={settings?.google_analytics_id}/>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9804371639852685" crossOrigin="anonymous"></Script>
    </>
  )
}

App.getInitialProps = async (ctx: NextPageContext) => {
  const settingsData = await getSettingsData();
  return {
    settings: settingsData,
  };
};
