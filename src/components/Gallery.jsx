import React, {useEffect} from "react";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import {initLightboxJS} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

import { SlideshowLightbox } from "lightbox.js-react";
import {Fade} from 'react-awesome-reveal'

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import "./gallery.css";

// // import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper";

const Gallery = () => {
  useEffect(() => {
    initLightboxJS("B687FA0A3438D2C6", "Insert plan type here");
  }, []);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="bg-bg-main bg-center bg-no-repeat bg-cover lg:mx-[174px] py-2" id="gallery">
        <div className="bg-white/30 backdrop-brightness-50 py-2 mb-3 mx-4 rounded-3xl flex justify-center items-center">
        <Fade delay={1e3} cascade damping={1e-1} triggerOnce={true}
         className="font-mempelai text-center text-white">
          Our Gallery
        </Fade>
        </div>
        <div className="bg-white/30 backdrop-brightness-50 py-5 px-2 mx-3 rounded-xl">
        <SlideshowLightbox className="container grid lg:grid-cols-4 grid-cols-2 gap-2 mx-auto" theme="lightbox">
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
            src={img6}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img7}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img8}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img9}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img10}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img11}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img12}
            alt="img"
          />
        </SlideshowLightbox>
        </div>
        {/* <div className=" px-4">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="px-4 pb-8">
          <iframe
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/1-GLrbJzG3A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div> */}
      </div>
    </>
  );
};

export default Gallery;
