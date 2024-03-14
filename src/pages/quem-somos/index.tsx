import Footer from "@/components/Footer";
import MiniHero from "@/components/MiniHero";
import NewHeader from "@/components/NewHeader";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { HomeDataType, getHomeData } from ".././api/getHomeData";
import { MenuDataType, getMenuData } from ".././api/getMenuData";
import { SettingsDataType } from ".././api/getSettingsData";

//TO DO - Desenvolver ci/cd para o tema do wordpress e a pasta /out + opcao de rebuildar a aploicacao via api

type HomeProps = {
  menuData: MenuDataType[];
  homeData: HomeDataType;
  settings: SettingsDataType;
}

export default function QuemSomos({ menuData, homeData, settings }: HomeProps) {
  return (
    <>
      <NextSeo
        title={`${homeData?.yoast_title}`}
        description={`${homeData?.yoast_description}`}
      />
      <NewHeader menuData={menuData} settings={settings}/>
      <MiniHero title={"Quem Somos"} slug={"quem-somos"}/>
      <WhoWeAre />
      <Testimonials />
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