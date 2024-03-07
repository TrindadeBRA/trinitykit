import Image from 'next/image'
import Link from 'next/link'
import { IndexBlogDataType } from "@/pages/api/getIndexBlogData"



export default function BlogPagination({ currentPage, totalPages }: any) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  
  return (
    <div>
      {!isFirstPage && (
        <Link href={`/blog/page/${currentPage - 1}`}>
          <span>Anterior</span>
        </Link>
      )}

      {!isLastPage && (
        <Link href={`/blog/page/${currentPage + 1}`}>
          <span>Próximo</span>
        </Link>
      )}
    </div>
  );

}
