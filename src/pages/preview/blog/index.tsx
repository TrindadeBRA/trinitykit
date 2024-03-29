import BlogPostPage from "@/components/BlogPostPage";
import Footer from "@/components/Footer";
import NewHeader from "@/components/NewHeader";
import { NextSeo } from "next-seo";
import { getMenuData } from "../../api/getMenuData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BlogRelatedPost from "@/components/BlogRelatedPost";
import BlogBookComponent from "@/components/BlogBookComponent";
import AdBanner from "@/components/AdBanner";
import { getPostBySlug } from "@/pages/api/getBlogData";

export default function BlogPost() {

    // TODO deixar esses dados mockados dinamicos

    const settings: any = {
        title: 'Preview - Resumo do Livro',
        description: 'Preview - Desbravando mundos literários!',
        whatsapp_url: '#',
        frontend_app_url: 'https://hml.thetrinityweb.com.br',
        google_analytics_id: 'G-TKJ7VVE840',
        favicon_url: 'https://cms.thetrinityweb.com.br/wp-content/uploads/2024/03/cropped-favicon-1.webp',
        og_image_url: 'https://cms.thetrinityweb.com.br/wp-content/uploads/2024/03/og-image.webp'
    }
    const menuData: any = [
        {
            id: 1,
            title: 'Preview Mode',
            slug: '',
            url: '/'
        },
        {
            id: 2,
            title: 'Produção',
            slug: '',
            url: 'https://hml.thetrinityweb.com.br'
        },
    ]

    const [post, setPost]: any = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const { slug } :any = router.query;
            
            if (slug) {
                try {
                    const response = await fetch(`https://cms.thetrinityweb.com.br/wp-json/trinitykit/v1/post/${slug}`, {
                        method: 'GET',
                    });

                    const data = await response.json();
                    if (response.ok) {
                        setPost(data[0]);
                    } else {
                        alert("Erro.")
                    }
                } catch (error) {
                    console.error('Error submitting form:', error);
                }
            }
        };

        fetchData();
    }, [router.query]);

    if (!post) {
        return (
            <div className="flex items-center justify-center h-screen bg-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Carregando...</h1>
                </div>
            </div>
        );
    }

    return (
        <>
            <NextSeo
                title={`Preview - ${post?.yoast_title}`}
                description={post?.yoast_description}
                openGraph={{
                    type: 'article',
                    locale: 'pt_BR',
                    images: [{
                        url: post?.post_thumbnail_url ? post?.post_thumbnail_url : "/ogimage.webp",
                    }],
                }}
            />
            <NewHeader menuData={menuData} settings={settings} />
            <BlogPostPage post={post} />
            <BlogBookComponent post={post} />
            <BlogRelatedPost post={post} />
            <Footer menuData={menuData} settings={settings} />
        </>
    );
}
