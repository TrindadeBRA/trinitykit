import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GetStaticProps } from "next";
import { MenuDataType, getMenuData } from "../api/getMenuData";
import { NextSeo } from "next-seo";
import { SettingsDataType } from "../api/getSettingsData";
import { IndexBlogDataType, getIndexBlogData } from "../api/getIndexBlogData";
import IndexBlog from "@/components/IndexBlog";
import NewHeader from "@/components/NewHeader";
import MiniHero from "@/components/MiniHero";
import LatestPosts from "@/components/LatestPosts";
import BlogArchive from "@/components/BlogArchive";

type OurTeamProps = {
  menuData: MenuDataType[];
  settings: SettingsDataType;
  indexBlogData: IndexBlogDataType;
}

export default function OurTeamPage({ menuData, settings, indexBlogData }: OurTeamProps) {
  return (
    <>
      <NextSeo
        title={`${settings?.title} - Blog`}
        description="Blog description of the page"
      />
      <NewHeader menuData={menuData} settings={settings}/>
      <MiniHero title={`${settings?.title} - Blog`} />
      <BlogArchive />
      {/* <LatestPosts /> */}
      {/* <IndexBlog indexBlogData={indexBlogData} /> */}
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