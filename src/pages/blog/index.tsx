import BlogArchive from "@/components/BlogArchive";
import Footer from "@/components/Footer";
import MiniHero from "@/components/MiniHero";
import NewHeader from "@/components/NewHeader";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { IndexBlogDataType, getIndexBlogData } from "../api/getIndexBlogData";
import { MenuDataType, getMenuData } from "../api/getMenuData";
import { SettingsDataType } from "../api/getSettingsData";

type OurTeamProps = {
  menuData: MenuDataType[];
  settings: SettingsDataType;
  indexBlogData: IndexBlogDataType;
}

export default function OurTeamPage({ menuData, settings, indexBlogData }: OurTeamProps) {
  return (
    <>
      <NextSeo
        title={`${settings?.title} - Blog`}
        description="Blog description of the page"
      />
      <NewHeader menuData={menuData} settings={settings}/>
      <MiniHero title={`${settings?.title} - Blog`} />
      <BlogArchive indexBlogData={indexBlogData}/>
      {/* <LatestPosts /> */}
      {/* <IndexBlog indexBlogData={indexBlogData} /> */}
      <Footer menuData={menuData} settings={settings} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = await getMenuData();
  
  // Defina os parâmetros de paginação conforme necessário
  const page = 1; // Página atual
  const perPage = 4; // Número de posts por página
  
  // Passe os parâmetros para getIndexBlogData
  const indexBlogData = await getIndexBlogData(page, perPage);

  return {
    props: {
      menuData,
      indexBlogData,
    },
  };
};
