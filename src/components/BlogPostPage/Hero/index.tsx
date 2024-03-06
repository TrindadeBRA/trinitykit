import Image from "next/image";


export default function BlogPostHero({ post }: any) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 after:absolute after:inset-0 after:bg-jacarta-900/60 mt-[113px]"
      style={{
        backgroundImage: `url('/img/page-title/wallet_banner.jpg')`
      }}      >
      <div className="container relative z-10">
        <h1 className="text-center font-display text-4xl font-medium text-white">{post?.title?.rendered}</h1>
      </div>
    </section>
  )
}
