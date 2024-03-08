import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkWithUsForm from "@/components/WorkWithUsForm";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { SettingsDataType } from "./api/getSettingsData";
import MiniHero from "@/components/MiniHero";
import NewHeader from "@/components/NewHeader";
import { MenuDataType, getMenuData } from "./api/getMenuData";
import Body404 from "@/components/Body404";

type TrabalheConoscoProps = {
  menuData: MenuDataType[];
  settings: SettingsDataType;
};

export default function TrabalheConoscoPage({
  menuData,
  settings,
}: TrabalheConoscoProps) {
  return (
    <>
      <NextSeo
        title={`Página 404`}
        description="404 - Página não encontrada!"
      />
      <NewHeader menuData={menuData} settings={settings}/>
      <MiniHero title={"Página 404"} slug={"/404"} />
      <Body404 />
      <Footer menuData={menuData} settings={settings} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = await getMenuData();
  const settings = {};
  return {
    props: {
      menuData,
      settings,
    },
  };
};
