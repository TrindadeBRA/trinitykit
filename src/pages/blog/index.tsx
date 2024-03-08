import BlogArchive from "@/components/BlogArchive";
import Footer from "@/components/Footer";
import MiniHero from "@/components/MiniHero";
import NewHeader from "@/components/NewHeader";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { IndexBlogDataType, getIndexBlogData } from "../api/getIndexBlogData";
import { MenuDataType, getMenuData } from "../api/getMenuData";
import { SettingsDataType } from "../api/getSettingsData";
import BlogPagination from "@/components/BlogPagination";
import { getAllBlogData } from "../api/getAllBlogData";
import { useRouter } from "next/router";

type BlogPageProps = {
  menuData: MenuDataType[];
  settings: SettingsDataType;
  indexBlogData: IndexBlogDataType;
  totalPagesPagination: any;
}

export default function BlogPage({ menuData, settings, indexBlogData, totalPagesPagination }: BlogPageProps) {
  // console.log(indexBlogData)
  const currentPage = Number(1);
  return (
    <>
      <NextSeo
        title={`${settings?.title} - Blog`}
        description="Blog description of the page"
      />
      <NewHeader menuData={menuData} settings={settings} />
      <MiniHero title={"Blog"} slug={"blog"} />
      <BlogArchive indexBlogData={indexBlogData} />
      <BlogPagination currentPage={currentPage} totalPages={totalPagesPagination} />
      <Footer menuData={menuData} settings={settings} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = await getMenuData();

  // Defina os parâmetros de paginação conforme necessário
  const page = 1; // Página atual
  const perPage = 13; // Número de posts por página

  // Passe os parâmetros para getIndexBlogData
  const indexBlogData = await getIndexBlogData(page, perPage);

  // Valor total de paginacoes

  const totalPagesPagination = await getAllBlogData(perPage);


  return {
    props: {
      menuData,
      indexBlogData,
      totalPagesPagination,
    },
  };
};

