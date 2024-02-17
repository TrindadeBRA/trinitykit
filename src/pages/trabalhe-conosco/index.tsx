import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkWithUsForm from "@/components/WorkWithUsForm";
import { GetStaticProps } from "next";
import { MenuDataType, getMenuData } from "../api/getMenuData";
import { NextSeo } from "next-seo";
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
      <Header menuData={menuData} settings={settings} />
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
