import BlogPostContent from "./Content";
import BlogPostHero from "./Hero";

export default function BlogPostPage({post}: any) {
  // console.log(post)
  return (
    <div className="relative">
      <BlogPostHero post={post}/>
      <BlogPostContent post={post}/>
    </div>

  )
}