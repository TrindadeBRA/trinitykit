
import BlogPostPage from "@/components/BlogPostPage";
import Footer from "@/components/Footer";
import NewHeader from "@/components/NewHeader";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { getAllPostSlugs, getPostBySlug } from "../api/getBlogData";
import { getMenuData } from "../api/getMenuData";
import BlogRelatedPost from "@/components/BlogRelatedPost";
import BlogBookComponent from "@/components/BlogBookComponent";
import AdBanner from "@/components/AdBanner";

export default function BlogPost({ menuData, post, settings }: any) {
    // console.log(post)
    return (
        <>
            <NextSeo
                title={post?.yoast_title}
                description={post?.yoast_description}
                openGraph={{
                    type: 'article',
                    locale: 'pt_BR',
                    images: [{
                      url: post?.post_thumbnail_url ? post?.post_thumbnail_url : "/ogimage.webp",
                    }],
                  }}
            />
            <NewHeader menuData={menuData} settings={settings}/>
            <BlogPostPage post={post}/>

            <div className="container py-10 flex justify-center bg-light-base dark:bg-jacarta-800">
                <AdBanner
                    data-ad-slot="3989446316"
                    data-ad-format="auto"
                />
            </div>

            <BlogBookComponent post={post}/>
            <BlogRelatedPost post={post} />

            <div className="container py-10 flex justify-center bg-light-base dark:bg-jacarta-900">
                <AdBanner
                    data-ad-slot="5198973245"
                    data-ad-format="auto"
                />
            </div>
            
            <Footer menuData={menuData} settings={settings} />
        </>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getAllPostSlugs();

    const paths = slugs.map((slug: string) => ({ params: { slug } }));
    
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const menuData = await getMenuData();
    const post = await getPostBySlug(params.slug as string); 
    return {
        props: {
            menuData,
            post,
        },
    };
};
;