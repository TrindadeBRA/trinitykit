
    import Footer from "@/components/Footer";
    import Header from "@/components/Header";
    import { GetStaticPaths, GetStaticProps } from "next";
    import { NextSeo } from "next-seo";
    import { getAllPostSlugs, getPostBySlug } from "../api/getBlogData";
    import { getMenuData } from "../api/getMenuData";

    // TODO - Criar page blog index

    export default function BlogPost({ menuData, post, settings }: any) {
        return (
            <>
                <NextSeo
                    title={`${settings?.title} - Blog`}
                    description="Blog description of the page"
                />
                <Header menuData={menuData} settings={settings} />
                <h1>{post.title.rendered}</h1>
                <Footer menuData={menuData} settings={settings} />
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