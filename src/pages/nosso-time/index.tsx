import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import { GetStaticProps } from "next";
import { getHeaderData } from "../api/getHeaderData";
import { getOurTeamData } from "../api/getOurteamData";

export default function OurTeamPage({headerData, ourTeamData}:any) {
  
    return (
      <>
      <Header {...headerData}/>
      <OurTeam {...ourTeamData}/>
      <Footer {...headerData}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const headerData = await getHeaderData();
  const ourTeamData = await getOurTeamData();
  return {
    props: {
      headerData,
      ourTeamData,
    },
  };
};