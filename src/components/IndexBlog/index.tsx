import { IndexBlogDataType } from "@/pages/api/getIndexBlogData"

import Image from "next/image"
import Link from "next/link"

export default function IndexBlog({ indexBlogData }: { indexBlogData: IndexBlogDataType }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{indexBlogData?.custom_fields?.title}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {indexBlogData?.custom_fields?.subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Object.values(indexBlogData?.recent_posts).map((post: any) => (
            <article key={post?.id} className="flex flex-col items-start justify-between">
              <Link href={"/blog/" + post?.slug}>
                <div className="relative w-full">
                  <Image
                    src={post?.thumbnail_url ? post?.thumbnail_url : "https://placehold.co/600x400"}
                    alt={post?.title}
                    width={500}
                    height={500}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </Link>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post?.date} className="text-gray-500">
                    {post?.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={"/blog/" + post?.slug}>
                      <span className="absolute inset-0" />
                      {post?.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post?.content}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
