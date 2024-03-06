import Image from 'next/image'
import Link from 'next/link'
import { IndexBlogDataType } from "@/pages/api/getIndexBlogData"


export default function BlogArchive({ indexBlogData }: { indexBlogData: IndexBlogDataType }) {
  // console.log(">>>", indexBlogData)
  return (
    <section className="relative py-16 md:py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image
          width={370}
          height={250} src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
      </picture>
      <div className="container">
        {/* <!-- Featured Post --> */}
        {Object.values(indexBlogData?.recent_posts).slice(0, 1).map((post: any) => (
          <article key={post.id} className="mb-[1.875rem] md:mb-16">
            <div className="flex flex-col overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg md:flex-row">
              <figure className="group overflow-hidden md:w-1/2">
                <Link href={"/blog/" + post?.slug}>
                  <Image
                    width={520}
                    height={460}
                    src={post?.thumbnail_url ? post?.thumbnail_url : "/img/blog/post_1.jpg"}
                    alt="post 1"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                  />
                </Link>
              </figure>

              {/* <!-- Body --> */}
              <div
                className="rounded-b-[1.25rem] border border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700 md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]"
              >
                {/* <!-- Meta --> */}
                <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                  <Link href={"/blog/" + post?.slug} className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200">{post?.author_name}</Link>
                  <span className="text-jacarta-500 dark:text-jacarta-300">em</span>
                  <span className="inline-flex flex-wrap items-center space-x-1 text-accent"><a href="#">{post?.category}</a></span>
                </div>

                <h2
                  className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent sm:text-3xl"
                >
                  <Link href={"/blog/" + post?.slug} className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200">{post?.title}</Link>
                </h2>
                <Link href={"/blog/" + post?.slug}><p className="mb-8 text-jacarta-700 dark:text-jacarta-200">{post?.content}</p></Link>

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

        <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
          {/* <!-- Posts --> */}
          {Object.values(indexBlogData?.recent_posts).slice(1).map((post: any) => (
            <article key={post.id}>
              <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
                <figure className="group overflow-hidden">
                  <Link href={"/blog/" + post?.slug}>
                    <Image
                      width={500}
                      height={500}
                      src={post?.thumbnail_url ? post?.thumbnail_url : "/img/blog/post_2.jpg"}
                      alt="post 2"
                      className="h-80 w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    />
                  </Link>
                </figure>

                {/* <!-- Body --> */}
                <div
                  className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700"
                >
                  {/* <!-- Meta --> */}
                  <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                    <Link href={"/blog/" + post?.slug} className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200">{post?.author_name}</Link>
                    <span className="text-jacarta-500 dark:text-jacarta-300">em</span>
                    <span className="inline-flex flex-wrap items-center space-x-1 text-accent"><a href="#">{post?.category}</a></span>
                  </div>

                  <h2
                    className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                  >
                    <Link href={"/blog/" + post?.slug}>{post?.title}</Link>
                  </h2>
                  <Link href={"/blog/" + post?.slug}>
                    <p className="mb-8 text-jacarta-700 dark:text-jacarta-200">{post?.content}</p>
                  </Link>

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

        {/* <!-- Load More --> */}
        {/* <div className="mt-10 text-center">
          <a href="#" className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">Carregar mais</a>
        </div> */}
      </div>
    </section>
  )
}
