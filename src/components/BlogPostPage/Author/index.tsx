import Image from "next/image";


export default function BlogPostAuthor({ post }: any) {
  return (
    <div className="bg-light-base dark:bg-jacarta-800 py-32">
      <div className="mx-auto max-w-[85%] lg:max-w-[48.125rem]">
        <div
          className="flex flex-col md:flex-row rounded-2.5xl border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700 items-center shadow-2xl"
        >
          <Image
            src={post?.author?.avatar}
            width={150}
            height={150}
            alt="author"
            className="my-auto h-[8rem] w-[8rem] shrink-0 self-center mb-12 sm:m-0 rounded-lg md:mr-8 md:h-[9rem] md:w-[9rem]"
          />
          <div>
            <span className="text-center sm:text-left mb-3 mt-2 block font-display text-base text-jacarta-700 dark:text-white">{post?.author?.name}</span>
            <p className="text-center sm:text-left mb-4 text-jacarta-500 dark:text-jacarta-300">{post?.author?.bio}</p>

          </div>
        </div>

      </div>
    </div>
  )
}
