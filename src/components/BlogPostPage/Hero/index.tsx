import Image from "next/image";
import { HomeIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

export default function BlogPostHero({ post }: any) {
  // console.log(">>>", post)

  const truncatedTitle = post?.title && post?.title.length > 40 ? post?.title.slice(0, 40) + "..." : post?.title;

  const pages = [
    { name: "Blog", href: "/blog", current: false },
    { name: post?.title && post?.title.length > 30 ? post?.title.slice(0, 30) + "..." : post?.title, href: `blog/${post?.slug}`, current: true },
  ];

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24 after:absolute after:inset-0 after:bg-jacarta-900/60 mt-[113px]"
        style={{
          backgroundImage: `url('/img/page-title/pageheader.webp')`
        }}      >
        <div className="container relative z-10">
          <h1 className="text-center font-display text-4xl font-medium text-white">{post?.title}</h1>
        </div>
        <div className="container z-10 justify-center flex mt-4">
          <nav className="flex z-10" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4 text-white">
              <li>
                <Link href={"/"} className="cursor-pointer ">

                  <div>
                    <span className="text-gray-400 hover:text-gray-500">
                      <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <span className="sr-only">Home</span>
                    </span>
                  </div>
                </Link>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <Link
                      href={page.href}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      aria-current={page.current ? 'page' : undefined}
                    >
                      {page.name}
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </>
  )
}
