import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import { SettingsDataType } from '@/pages/api/getSettingsData'
import { MenuDataType } from '@/pages/api/getMenuData'
import Link from 'next/link'
import Image from 'next/image'

export default function WhoWeAre() {
  return (
    <section className="relative py-20 bg-light-base dark:bg-jacarta-800 lg:py-32">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image width={1920} height={900} src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
      </picture>
      <div className="container">
        <div className="lg:flex lg:items-center lg:justify-between gap-6">
          {/* <!-- Image --> */}
          <div className="relative lg:w-8/12">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Desbravando Mundos Literários!</h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Somos uma equipe apaixonada por livros e conhecimento, comprometida em compartilhar ideias e conhecimentos presentes nas páginas de inúmeros livros. Nosso objetivo é fornecer resumos concisos, porém informativos, que capturam a essência das obras literárias, permitindo que nossos leitores economizem tempo sem sacrificar a oportunidade de aprender e se inspirar.</p>

            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Aqui no Resumo do Livro, trabalhamos arduamente para criar resumos atraentes e envolventes, que destacam os principais pontos de cada obra, suas lições mais valiosas e os insights que podem transformar a forma como percebemos o mundo. Nosso conteúdo é pensado para estudantes, amantes da leitura e para aqueles que buscam se aprofundar em temas específicos de maneira rápida e eficiente.</p>

            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Sabemos de como a vida pode ser agitada, e nem sempre temos todo o tempo para dedicar à leitura completa de todos os livros que desejamos. É aí que entramos! Queremos proporcionar uma experiência prazerosa e valiosa aos nossos leitores, permitindo que vocês explorem uma ampla gama de livros e ideias, economizando tempo e ainda se beneficiando do poder transformador da leitura.</p>
            
          </div>

          {/* <!-- Info --> */}
          <div className="py-10 lg:w-4/12 border-2 p-8 border-jacarta-100 dark:border-jacarta-600">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Desvende mundos literários em minutos! </h2>
            <p className="mb-8 text-jacarta-500 dark:text-jacarta-300">Explore o universo de conhecimento condensado do Resumo do Livro! Desvende histórias, ideias e lições dos melhores livros, sem sacrificar sua rotina agitada. Embarque em uma jornada intelectual única – clique abaixo para encontrar novos horizontes literários em poucos minutos. Amplie seus horizontes agora!</p>
            <Link href="/blog" className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">Visualizar Resumos</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
