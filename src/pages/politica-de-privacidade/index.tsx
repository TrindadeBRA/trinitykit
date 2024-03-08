import Footer from "@/components/Footer";
import MiniHero from "@/components/MiniHero";
import NewHeader from "@/components/NewHeader";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Testimonials from "@/components/Testimonials";
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

export default function PoliticaDePrivacidade({ menuData, homeData, settings }: HomeProps) {
  return (
    <>
      <NextSeo
        title={`${settings?.title} - ${homeData?.title}`}
        description="Home page description of the page"
      />
      <NewHeader menuData={menuData} settings={settings}/>
      <MiniHero title={"Política de privacidade"} slug={"/politica-de-privacidade"} />
      <PrivacyPolicy />
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