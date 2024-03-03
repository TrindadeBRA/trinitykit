import Image from "next/image";


export default function BlogPostContent({ post }: any) {
  return (
    <div className="container mx-auto my-8 p-4 text-[#fff]" dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
    </div>
  )
}
