import Image from 'next/image'
import Link from 'next/link'



export default function BlogRelatedPost({ post }: any) {
  // console.log(post?.related_posts)
  return (
    <div className="border-t border-jacarta-100 dark:border-jacarta-500 bg-gradient-to-b from-white to-light-base dark:from-jacarta-600 dark:to-jacarta-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-jacarta-700 dark:text-white">Você também pode gostar!</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {Object.values(post?.related_posts).map((post: any, index) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full cursor-pointer">
                <Link
                  href={`/blog/${post?.slug}`}
                >
                  <Image
                    width={650}
                    height={300}
                    src={post.post_thumbnail_url}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </Link>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time className="text-jacarta-500 dark:text-jacarta-200">
                    {post.date}
                  </time>
                  <Link
                    href={`/blog/${post?.slug}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-sm text-gray-600 hover:bg-gray-100 text-jacarta-700 dark:text-white"
                  >
                    {post?.categories[0]?.name}
                  </Link>
                </div>
                <div className="group relative">
                  <Link
                    href={`/blog/${post?.slug}`}
                  >
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-1">
                      <div className='text-jacarta-700 dark:text-white'>
                        <span className="absolute inset-0" />
                        {post.title}
                      </div>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-jacarta-500 dark:text-jacarta-300">{post.content}</p>
                  </Link>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image width={100} height={100} src={post.author.avatar_url} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-jacarta-700 dark:text-white">
                        <span className="absolute inset-0" />
                        {post.author.name}
                    </p>
                    <p className="text-jacarta-500 dark:text-jacarta-300 text-sm">{"ResumoDoLivro.com"}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </div>
  )

}








