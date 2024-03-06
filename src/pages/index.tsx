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

//TO DO - Desenvolver ci/cd para o tema do wordpress e a pasta /out + opcao de rebuildar a aploicacao via api

type HomeProps = {
  menuData: MenuDataType[];
  homeData: HomeDataType;
  settings: SettingsDataType;
}

export default function Home({ menuData, homeData, settings }: HomeProps) {
  return (
    <>
      <NextSeo
        title={`${settings?.title} - ${homeData?.title}`}
        description="Home page description of the page"
      />
      <NewHeader menuData={menuData} settings={settings}/>
      {/* <HeroSection {...homeData} /> */}
      <HeroSlider/>
      <LatestPosts/>
      <WhoWeAreCTA />
      <Testimonials/>
      <Footer menuData={menuData} settings={settings} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData: MenuDataType[] = await getMenuData();
  const homeData: HomeDataType = await getHomeData();

  return {
    props: {
      menuData,
      homeData,
    },
  };
};