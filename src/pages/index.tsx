import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { getHomeData } from "./api/getHomeData";
import { getMenuData } from "./api/getMenuData";
const websiteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE

//TO DO - Desenvolver ci/cd para o tema do wordpress e a pasta /out + opcao de rebuildar a aploicacao via api
//TO DO - Criar documentação das APIS do CMS



export default function Home({ menuData, homeData }: any) {
  return (
    <>
      <NextSeo
        title={`${websiteTitle} - ${homeData?.title}`}
        description="Home page description of the page"
      />
      <Header {...menuData} />
      <HeroSection {...homeData} />
      <Footer {...menuData} />
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