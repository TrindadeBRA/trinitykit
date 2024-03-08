import Image from "next/image";


export default function BlogPostAuthor({ post }: any) {
  return (
    <div className="bg-light-base dark:bg-jacarta-800 py-32">
      <div className="mx-auto max-w-[48.125rem]">
        <div
          className="flex rounded-2.5xl border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700 items-center shadow-2xl"
        >
          <Image
            src={post?.author?.avatar}
            width={150}
            height={150}
            alt="author"
            className="my-auto mr-4 h-16 w-16 shrink-0 self-start rounded-lg md:mr-8 md:h-[9rem] md:w-[9rem]"
          />
          <div>
            <span className="mb-3 mt-2 block font-display text-base text-jacarta-700 dark:text-white">{post?.author?.name}</span>
            <p className="mb-4 text-jacarta-500 dark:text-jacarta-300">{post?.author?.bio}</p>

          </div>
        </div>

      </div>
    </div>
  )
}
