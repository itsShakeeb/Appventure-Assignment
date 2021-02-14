import React from "react";
import Grid from "@material-ui/core/Grid";
import PreviewRibbon from "../PreviewRibbon/PreviewRibbon";
import Header from "../Header/Header";
import Navigationbar from "../NavigationBar/Navigationbar";
import MainBanner from "../MainBanner/MainBanner";
import SubBanner from "../SubBanner/SubBanner";
import InfoCard from "../InfoCard/InfoCard";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <PreviewRibbon />
      <Header />
      <Navigationbar />
      <MainBanner />
      <SubBanner />
      <InfoCard />
      <Footer />
    </div>
  );
};

export default Home;
