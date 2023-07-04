import { useState } from "react";
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
import Cover from "./Cover";

import music from "../assets/music/Cintanya aku.mp3";
import useSound from "use-sound";

const Main = () => {
  const [show, setShow] = useState(true);
  const clickButton = () => {
    setShow(false);
    handlePlay();
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(music);

  const handlePlay = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  return (
    <>
      {show ? (
        <Cover clickButton={clickButton} />
      ) : (
        <>
          <Header />
          <PlayMusic handlePlay={handlePlay} isPlaying={isPlaying}/>
          <Navigation />
          <PasanganMempelai />
          <KisahCinta />
          <WeddingEvent />
          <Gallery />
          <WeddingGift />
          <ReservasiKehadiran />
          <UcapkanSesuatu />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
