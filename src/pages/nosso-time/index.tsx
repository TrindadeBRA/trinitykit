import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurTeam from "@/components/OurTeam";
import { GetStaticProps } from "next";
import { getMenuData } from "../api/getMenuData";
import { getOurTeamData } from "../api/getOurTeamData";
import { NextSeo } from "next-seo";
const websiteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE

export default function OurTeamPage({ menuData, ourTeamData }: any) {

  return (
    <>
      <NextSeo
        title={`${websiteTitle} - ${ourTeamData?.title}`}
        description="Our team description of the page"
      />
      <Header {...menuData} />
      <OurTeam {...ourTeamData} />
      <Footer {...menuData} />
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