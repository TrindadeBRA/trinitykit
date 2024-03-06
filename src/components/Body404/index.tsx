import Image from 'next/image'
import Link from 'next/link'

export default function Body404() {
  return (
    <section className="relative py-16 bg-light-base dark:bg-jacarta-800 md:py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
      </picture>
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <Image src="/img/404.png" alt="" className="mb-16 inline-block" width={335} height={165}/>
          <h1 className="mb-6 font-display text-4xl text-jacarta-700 dark:text-white md:text-6xl">Página não encontrada!</h1>
          <p className="mb-12 text-lg leading-normal text-jacarta-500 dark:text-jacarta-300">
            Ops! A página que você procura não existe. Pode ter sido movido ou excluído.
          </p>
          <Link
            href="/"
            className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
          >Desbrave um novo mundo!</Link>
        </div>
      </div>
    </section>
  )
}
