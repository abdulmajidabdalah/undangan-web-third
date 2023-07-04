import React, {useEffect} from "react";
import img1 from "../assets/gallery/couple2.jpeg";
import img2 from "../assets/gallery/couple3.jpeg";
import img3 from "../assets/gallery/couple4.jpeg";
import img4 from "../assets/gallery/couple5.jpeg";
import img5 from "../assets/gallery/couple6.jpeg";
import img8 from "../assets/gallery/couple7.jpeg";
import {initLightboxJS} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

import { SlideshowLightbox } from "lightbox.js-react";
import {Fade} from 'react-awesome-reveal'

const Gallery = () => {
  useEffect(() => {
    initLightboxJS("B687FA0A3438D2C6", "Insert plan type here");
  }, []);
  return (
    <>
      <div className="bg-bg-main bg-center bg-no-repeat bg-cover lg:mx-[174px] py-2" id="gallery">
        <div className="bg-secondary border-2 border-white py-2 mb-3 mx-4 rounded-3xl flex justify-center items-center">
        <Fade delay={1e3} cascade damping={1e-1} triggerOnce={true}
         className="font-mempelai text-center text-white">
          Our Gallery
        </Fade>
        </div>
        <div className="bg-white/30 backdrop-brightness-50 py-5 px-2 mx-3 rounded-xl">
        <SlideshowLightbox className="container grid lg:grid-cols-3 grid-cols-2 gap-2 mx-auto" theme="lightbox">
          <img
            className="w-full rounded"
            src={img1}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img2}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img3}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img4}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img5}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img8}
            alt="img"
          />
        </SlideshowLightbox>
        </div>
      </div>
    </>
  );
};

export default Gallery;
