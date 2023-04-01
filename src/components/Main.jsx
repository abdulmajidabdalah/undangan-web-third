import React from "react";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import KisahCinta from "./KisahCinta";
import Navigation from "./Navigation";
import PasanganMempelai from "./PasanganMempelai";
import ReservasiKehadiran from "./ReservasiKehadiran";
import UcapkanSesuatu from "./UcapkanSesuatu";
import WeddingEvent from "./WeddingEvent";
import WeddingGift from "./WeddingGift";
// import Cover from "./Cover";
import PlayMusic from "./PlayMusic";

const Main = () => {
  return (
    <>
      {/* <Cover /> */}
      <Header />
      <PasanganMempelai />
      <KisahCinta />
      <WeddingEvent />
      <Gallery />
      <WeddingGift />
      <ReservasiKehadiran />
      <UcapkanSesuatu />
      <Footer />
      <Navigation />
      <PlayMusic />
    </>
  );
};

export default Main;
