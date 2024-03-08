import BlogArchive from "@/components/BlogArchive";
import Footer from "@/components/Footer";
import MiniHero from "@/components/MiniHero";
import NewHeader from "@/components/NewHeader";
import { GetStaticProps, GetStaticPaths } from 'next';
import { NextSeo } from "next-seo";
import { IndexBlogDataType, getIndexBlogData } from "../../../api/getIndexBlogData";
import { MenuDataType, getMenuData } from "../../../api/getMenuData";
import { SettingsDataType } from "../../../api/getSettingsData";
import { useRouter } from 'next/router';
import BlogPagination from "@/components/BlogPagination";
import { getAllBlogData } from "@/pages/api/getAllBlogData";


type BlogPageProps = {
  menuData: MenuDataType[];
  settings: SettingsDataType;
  indexBlogData: IndexBlogDataType;
  totalPagesPagination: any;
}

export default function BlogPage({ menuData, settings, indexBlogData, totalPagesPagination }: BlogPageProps) {
  const router = useRouter();
  const { page } = router.query;

  const currentPage = Number(page);
  
  return (
    
    <>
      <NextSeo
        title={`${settings?.title} - Blog -  Página: ${page}`}
        description="Blog description of the page"
      />
      <NewHeader menuData={menuData} settings={settings}/>
      <MiniHero title={"Blog"} slug={`blog/page/${page}`} />
      <BlogArchive indexBlogData={indexBlogData}/>
      <BlogPagination currentPage={currentPage} totalPages={totalPagesPagination}/>
      <Footer menuData={menuData} settings={settings} />
    </>
  )
}

const perPage = 13; // Número de posts por página

export const getStaticPaths: GetStaticPaths = async () => {
  // Aqui você deve buscar o número total de páginas disponíveis
  // ou calcular isso com base no número total de posts.
  // Para este exemplo, vamos definir um número arbitrário.
  const totalPages = await getAllBlogData(perPage);
  // Crie um array de caminhos para as páginas de blog
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false, // Ou true se você estiver usando fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const menuData = await getMenuData();

  // Extrair o número da página dos parâmetros da rota
  const page = params?.page ? parseInt(params.page as string) : 1; // Página atual

  // Passe os parâmetros para getIndexBlogData
  const indexBlogData = await getIndexBlogData(page, perPage);

  // Valor total de paginacoes
  const totalPagesPagination = await getAllBlogData(perPage);

  // Log do número da página
  // console.log("Número da página:", page);

  return {
    props: {
      menuData,
      indexBlogData,
      totalPagesPagination,
    },
  };
};