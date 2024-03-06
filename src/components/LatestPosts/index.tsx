import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import { SettingsDataType } from '@/pages/api/getSettingsData'
import { MenuDataType } from '@/pages/api/getMenuData'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  menuData: MenuDataType[];
  settings: SettingsDataType;
}

export default function LatestPosts() {
  return (
    <section className="relative pt-12 pb-24 dark:bg-jacarta-900">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" width={100} height={100} />
      </picture>
      <div className="container">
        <h2 className="mb-12 text-center font-display text-3xl text-jacarta-700 dark:text-white">Últimos conteúdos!</h2>
        <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <article key={index}>
              <div className="overflow-hidden rounded-2.5xl transition-shadow shadow-md hover:shadow-lg">
                <figure className="group overflow-hidden">
                  <a href="single-post.html">
                    <Image
                      width={100} height={100}
                      src="img/blog/post_2.jpg"
                      alt="post 2"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    />
                  </a>
                </figure>

                {/* <!-- Body --> */}
                <div
                  className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700"
                >
                  {/* <!-- Meta --> */}
                  <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                    <a href="#" className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                    >Deothemes</a
                    >
                    <span className="text-jacarta-600 dark:text-jacarta-400">in</span>
                    <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                      <a href="#">NFTS</a>
                      <a href="#">DIGITAL ART</a>
                    </span>
                  </div>

                  <h2
                    className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                  >
                    <a href="single-post.html"> Mint your own Tezos collections </a>
                  </h2>
                  <p className="mb-8 text-jacarta-500 dark:text-jacarta-200">
                    Since we launched Tezos at the end of 2021, many awesome creators...
                  </p>

                  {/* <!-- Date / Time --> */}
                  <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                    <span><time dateTime="2022-02-05">5 Feb</time></span>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
