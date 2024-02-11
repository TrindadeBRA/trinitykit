import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { getHomeData } from "./api/getHomeData";
import { getMenuData } from "./api/getMenuData";

//TO DO - Desenvolver ci/cd para o tema do wordpress e a pasta /out + opcao de rebuildar a aploicacao via api
//TO DO - Criar documentação das APIS do CMS

export default function Home({ menuData, homeData, settings }: any) {
  return (
    <>
      <NextSeo
        title={`${settings?.title} - ${homeData?.title}`}
        description="Home page description of the page"
      />
      <Header menuData={menuData} settings={settings} />
      <HeroSection {...homeData} />
      <Footer menuData={menuData} settings={settings} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = await getMenuData();
  const homeData = await getHomeData();

  return {
    props: {
      menuData,
      homeData,
    },
  };
};