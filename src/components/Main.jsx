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
import PlayMusic from "./PlayMusic";

const Main = () => {
  return (
    <>
      <PlayMusic />
      <Navigation />
      <Header />
      <PasanganMempelai />
      <KisahCinta />
      <WeddingEvent />
      <Gallery />
      <WeddingGift />
      <ReservasiKehadiran />
      <UcapkanSesuatu />
      <Footer />
    </>
  );
};

export default Main;
