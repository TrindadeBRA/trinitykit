import Footer from "@/components/Footer";
import MiniHero from "@/components/MiniHero";
import NewHeader from "@/components/NewHeader";
import WorkWithUsForm from "@/components/WorkWithUsForm";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { MenuDataType, getMenuData } from "../api/getMenuData";
import { SettingsDataType } from "../api/getSettingsData";

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
        title={`${settings?.title} - Trabalhe Conosco`}
        description="Formulário de Trabalhe Conosco"
      />
      <NewHeader menuData={menuData} settings={settings}/>
      <MiniHero title={"Trabalhe Conosco"} slug={"trabalhe-conosco"}/>
      <WorkWithUsForm />
      <Footer menuData={menuData} settings={settings} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = await getMenuData();
  // Aqui você pode carregar as configurações da página, se necessário
  const settings = {}; // Supondo que você tenha uma função semelhante a getMenuData para carregar as configurações
  return {
    props: {
      menuData,
      settings,
    },
  };
};
