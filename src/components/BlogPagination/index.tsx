import Image from 'next/image'
import Link from 'next/link'
import { IndexBlogDataType } from "@/pages/api/getIndexBlogData"



export default function BlogPagination({ currentPage, totalPages }: any) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  
  return (
    <div className="bg-white dark:bg-black pb-16">
      <div className="container flex gap-2 justify-center">
        {!isFirstPage && (
          <Link href={`/blog/page/${currentPage - 1}`} className="rounded-full bg-accent py-2 px-6 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
            <span>Anterior</span>
          </Link>
        )}

        {!isLastPage && (
          <Link href={`/blog/page/${currentPage + 1}`} className="rounded-full bg-accent py-2 px-6 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
            <span>Próximo</span>
          </Link>
        )}
      </div>
    </div>
  );

}
