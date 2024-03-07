import Image from "next/image";


export default function BlogPostContent({ post }: any) {
  return (
    <div className="bg-[#030712]">
      <div className="container mx-auto p-4 text-[#fff]" dangerouslySetInnerHTML={{ __html: post.content }} id="blog-content">
      </div>
    </div>
  )
}
