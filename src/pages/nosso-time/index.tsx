import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurTeam from "@/components/OurTeam";
import { GetStaticProps } from "next";
import { getMenuData } from "../api/getMenuData";
import { getOurTeamData } from "../api/getOurTeamData";
import { NextSeo } from "next-seo";

export default function OurTeamPage({ menuData, ourTeamData, settings }: any) {

  return (
    <>
      <NextSeo
        title={`${settings?.title} - ${ourTeamData?.title}`}
        description="Our team description of the page"
      />
      <Header menuData={menuData} settings={settings} />
      <OurTeam {...ourTeamData} />
      <Footer menuData={menuData} settings={settings} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = await getMenuData();
  const ourTeamData = await getOurTeamData();
  return {
    props: {
      menuData,
      ourTeamData,
    },
  };
};