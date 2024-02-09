import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import { GetStaticProps } from "next";
import { getHeaderData } from "./api/getHeaderData";
import { getHomeData } from "./api/getHomeData";

export default function Home({headerData, homeData}:any) {
  return (
    <>
      <Header {...headerData} />
      <HeroSection {...homeData} />
      <Footer {...headerData}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const headerData = await getHeaderData();
  const homeData = await getHomeData();
  return {
    props: {
      headerData,
      homeData,
    },
  };
};