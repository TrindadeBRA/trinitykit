import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { HomeDataType, getHomeData } from "./api/getHomeData";
import { MenuDataType, getMenuData } from "./api/getMenuData";
import { SettingsDataType } from "./api/getSettingsData";
import NewHeader from "@/components/NewHeader";
import HeroSlider from "@/components/HeroSlider";
import LatestPosts from "@/components/LatestPosts";
import WhoWeAreCTA from "@/components/WhoWeAreCTA";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { IndexBlogDataType, getIndexBlogData } from "./api/getIndexBlogData";

//TO DO - Desenvolver ci/cd para o tema do wordpress e a pasta /out + opcao de rebuildar a aploicacao via api

type HomeProps = {
  menuData: MenuDataType[];
  homeData: HomeDataType;
  indexBlogData: IndexBlogDataType;
  settings: SettingsDataType;
}

export default function Home({ menuData, homeData, settings, indexBlogData }: HomeProps) {
  return (
    <>
      <NextSeo
        title={`${settings?.title} - ${homeData?.title}`}
        description="Home page description of the page"
      />
      <NewHeader menuData={menuData} settings={settings}/>
      {/* <HeroSection {...homeData} /> */}
      <HeroSlider/>
      <LatestPosts indexBlogData={indexBlogData}/>
      <WhoWeAreCTA />
      <Testimonials/>
      <Contact />
      <Footer menuData={menuData} settings={settings} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData: MenuDataType[] = await getMenuData();
  const homeData: HomeDataType = await getHomeData();

  // Defina os parâmetros de paginação conforme necessário
  const page = 1; // Página atual
  const perPage = 3; // Número de posts por página

  // Passe os parâmetros para getIndexBlogData
  const indexBlogData = await getIndexBlogData(page, perPage);

  return {
    props: {
      menuData,
      homeData,
      indexBlogData,
    },
  };
};