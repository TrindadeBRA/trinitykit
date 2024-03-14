import Footer from "@/components/Footer";
import MiniHero from "@/components/MiniHero";
import NewHeader from "@/components/NewHeader";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { MenuDataType, getMenuData } from ".././api/getMenuData";
import { SettingsDataType } from ".././api/getSettingsData";
import { getPageData } from "../api/getPageData";

//TO DO - Desenvolver ci/cd para o tema do wordpress e a pasta /out + opcao de rebuildar a aploicacao via api

type PageProps = {
  menuData: MenuDataType[];
  pageData: any;
  settings: SettingsDataType;
}

export default function QuemSomos({ menuData, pageData, settings }: PageProps) {
  return (
    <>
      <NextSeo
        title={`${pageData?.yoast_title}`}
        description={`${pageData?.yoast_description}`}
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
  const pageData: any = await getPageData("quem-somos");

  return {
    props: {
      menuData,
      pageData,
    },
  };
};