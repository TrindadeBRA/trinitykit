import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GetStaticProps } from "next";
import { MenuDataType, getMenuData } from "../api/getMenuData";
import { NextSeo } from "next-seo";
import { SettingsDataType } from "../api/getSettingsData";
import { getIndexBlogData } from "../api/getIndexBlogData";
import IndexBlog from "@/components/IndexBlog";

type OurTeamProps = {
  menuData: MenuDataType[];
  settings: SettingsDataType;
  indexBlogData: any;
}

export default function OurTeamPage({ menuData, settings, indexBlogData }: OurTeamProps) {
  
  return (
    <>
      <NextSeo
        title={`${settings?.title} - Blog`}
        description="Blog description of the page"
      />
      <Header menuData={menuData} settings={settings} />
      <IndexBlog indexBlogData={indexBlogData} />
      <Footer menuData={menuData} settings={settings} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = await getMenuData();
  const indexBlogData = await getIndexBlogData();
  return {
    props: {
      menuData,
      indexBlogData,
    },
  };
};