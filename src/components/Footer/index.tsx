import { MenuDataType } from '@/pages/api/getMenuData';
import { SettingsDataType } from '@/pages/api/getSettingsData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdBanner from '../AdBanner';
import { Adsense } from "@ctrl/react-adsense";

interface FooterProps {
  menuData: MenuDataType[];
  settings: SettingsDataType;
}

export default function Footer({ menuData, settings }: FooterProps) {
  // console.log(menuData)
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="page-footer border-t border-jacarta-100 dark:border-jacarta-600 bg-light-base dark:bg-jacarta-900">
        <div className="container">

          <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">

            <div className="col-span-full sm:col-span-3 md:col-span-3">
              {/* <!-- Logo --> */}
              <Link href="/" className="mb-6 inline-block">
                <Image width={180} height={85} src="/img/logo-black.webp" className="dark:hidden" alt={settings?.title} />
                <Image width={180} height={85} src="/img/logo-white.webp" className="hidden dark:block" alt={settings?.title} />
              </Link>
              {/* <p className="mb-12 text-jacarta-500 dark:text-jacarta-300">
                Create, sell and collect truly rare digital artworks. Powered by blockchain technology.
              </p> */}
              {/* <!-- Socials --> */}
              <div className="flex space-x-5">
                <Link href="https://www.facebook.com/resumodolivro0" target='_blank' className="group" aria-label='Facebook'>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook"
                    className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    ></path>
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/resumodolivro_/" target='_blank' className="group" aria-label='Instagram'>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </Link>
                <Link href="https://www.tiktok.com/@resumo.do.livro?lang=pt-BR" target='_blank' className="group" aria-label='Tiktok'>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="tiktok"
                    className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="col-span-full sm:col-span-3 md:col-span-2 ">
              <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">Links úteis</h3>
              <ul className="flex flex-col space-y-1 text-jacarta-500 dark:text-jacarta-300">
                {Object.values(menuData).map((item: MenuDataType) => (
                  <li key={item?.slug}><Link href={`/${item?.slug}`} className="hover:text-accent dark:hover:text-white">{item?.title}</Link></li>
                ))}

              </ul>
            </div>

            <div className="col-span-full sm:col-span-7 text-jacarta-700 dark:text-white">
              [ADS 670x149]
              <Adsense
                client={`${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
                slot="9990805939"
                style={{ 
                  display: "block",
                  width: 670,
                  height: 149
                }}
                layout="in-article"
                format="fluid"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0 border-t border-dashed border-jacarta-200 dark:border-jacarta-600">
            <span className="text-sm text-jacarta-500 dark:text-jacarta-400"
            >{currentYear} {settings?.title}, Todos direitos reservados.</span>
            <ul className="flex flex-wrap space-x-4 text-sm text-jacarta-500 dark:text-jacarta-400">
              <li><Link href="/politica-de-privacidade" className="hover:text-accent dark:hover:text-white">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
