
    import Footer from "@/components/Footer";
    import Header from "@/components/Header";
    import { GetStaticPaths, GetStaticProps } from "next";
    import { NextSeo } from "next-seo";
    import { getAllPostSlugs, getPostBySlug } from "../api/getBlogData";
    import { getMenuData } from "../api/getMenuData";
    const websiteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE;

    export default function BlogPost({ menuData, post }: any) {
        return (
            <>
                <NextSeo
                    title={`${websiteTitle} - Blog`}
                    description="Blog description of the page"
                />
                <Header {...menuData} />
                <h1>{post.title.rendered}</h1>
                <Footer {...menuData} />
            </>
        );
    }


    export const getStaticPaths: GetStaticPaths = async () => {
        const slugs = await getAllPostSlugs(); // Função para obter todos os slugs dos posts
        const paths = slugs.map((slug: string) => ({ params: { slug } }));
        return { paths, fallback: false };
    };

    export const getStaticProps: GetStaticProps = async ({ params }: any) => {
        const menuData = await getMenuData();
        const post = await getPostBySlug(params.slug as string); // Função para obter os dados do post com base no slug
        return {
            props: {
                menuData,
                post,
            },
        };
    };
    ;