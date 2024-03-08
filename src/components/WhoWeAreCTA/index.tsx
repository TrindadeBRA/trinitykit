import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import { SettingsDataType } from '@/pages/api/getSettingsData'
import { MenuDataType } from '@/pages/api/getMenuData'
import Link from 'next/link'
import Image from 'next/image'

export default function WhoWeAreCTA() {
  return (
    <section className="relative py-20 bg-light-base dark:bg-jacarta-800 lg:py-32">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image width={1920} height={789} src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
      </picture>
      <div className="container">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* <!-- Image --> */}
          <div className="relative lg:w-1/2">
            <Image width={68} height={68}
              src="img/patterns/pattern_circle_1.png"
              className="absolute -bottom-4 -left-8 animate-fly dark:opacity-10"
              alt=""
            />
            <Image width={143} height={143}
              src="img/patterns/pattern_circle_2.png"
              className="absolute -top-14 right-0 animate-fly dark:opacity-10 md:-right-12"
              alt=""
            />
            <div className="flex items-center space-x-7">
              <figure className="relative">
                <Image width={570} height={470} src="img/case-studies/quem-somos-peter-pan.webp" className="rounded-3xl shadow-lg" alt="" />
              </figure>
            </div>
          </div>

          {/* <!-- Info --> */}
          <div className="py-10 lg:w-1/2 lg:pl-20">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Descubra quem somos </h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300"> Bem-vindo à nossa jornada literária, onde desbravamos mundos através das páginas e compartilhamos o amor pelos livros.</p>
            <Link href="/quem-somos" className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">Explore agora</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
