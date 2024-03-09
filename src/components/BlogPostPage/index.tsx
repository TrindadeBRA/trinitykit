import AdBanner from "../AdBanner";
import BlogPostAuthor from "./Author";
import BlogPostContent from "./Content";
import BlogPostHero from "./Hero";

export default function BlogPostPage({post}: any) {
  // console.log(post)
  return (
    <div className="relative">
      <BlogPostHero post={post}/>
      <BlogPostContent post={post}/>
        <div className="my-14 mx-auto container">
            <AdBanner
              data-ad-slot="3989446316"
              data-ad-format="auto"
            />
        </div>
      <BlogPostAuthor post={post}/>
    </div>

  )
}