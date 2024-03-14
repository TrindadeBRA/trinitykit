import Footer from "@/components/Footer";
import MiniHero from "@/components/MiniHero";
import NewHeader from "@/components/NewHeader";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Testimonials from "@/components/Testimonials";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { HomeDataType, getPageHomeData } from ".././api/getPageHomeData";
import { MenuDataType, getMenuData } from ".././api/getMenuData";
import { SettingsDataType } from ".././api/getSettingsData";
import { getPageData } from "../api/getPageData";

type PageProps = {
  menuData: MenuDataType[];
  pageData: any;
  settings: SettingsDataType;
}

export default function PoliticaDePrivacidade({ menuData, pageData, settings }: PageProps) {
  return (
    <>
      <NextSeo
        title={`${pageData?.yoast_title}`}
        description={`${pageData?.yoast_description}`}
      />
      <NewHeader menuData={menuData} settings={settings}/>
      <MiniHero title={"Política de privacidade"} slug={"politica-de-privacidade"} />
      <PrivacyPolicy />
      <Testimonials />
      <Footer menuData={menuData} settings={settings} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData: MenuDataType[] = await getMenuData();
  const pageData: any = await getPageData("politica-de-privacidade");

  return {
    props: {
      menuData,
      pageData,
    },
  };
};