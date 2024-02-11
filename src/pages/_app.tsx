import '@/styles/globals.css'
import { NextPageContext } from 'next';
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { SettingsDataType, getSettingsData } from './api/getSettingsData';

// TODO - Importar os componente de GA
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
            url: '/ogimage.webp',
            width: 600,
            height: 315,
            alt: settings?.title,
          }],
        }}
      />
      <Component {...pageProps} settings={settings}/>
    </>
  )
}

App.getInitialProps = async (ctx: NextPageContext) => {
  const settingsData = await getSettingsData();
  return {
    settings: settingsData,
  };
};
