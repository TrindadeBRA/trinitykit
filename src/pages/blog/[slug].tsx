
import BlogPostPage from "@/components/BlogPostPage";
import Footer from "@/components/Footer";
import NewHeader from "@/components/NewHeader";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { getAllPostSlugs, getPostBySlug } from "../api/getBlogData";
import { getMenuData } from "../api/getMenuData";

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