import React, {useEffect} from "react";
import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg";
// import img5 from "../assets/5.jpg";
import {initLightboxJS} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

import { SlideshowLightbox } from "lightbox.js-react";

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
        <div className="bg-white/30 backdrop-brightness-50 py-2 mb-3 mx-4 rounded-3xl">
        <h1 className="font-mempelai text-center text-white">
          Our Gallery
        </h1>
        </div>
        <div className="bg-white/30 backdrop-brightness-50 py-5 px-2 mx-3 rounded-xl">
        <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto" theme="lightbox">
          <img
            className="w-full rounded"
            src={img1}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img1}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img1}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img1}
            alt="img"
          />
          <img
            className="w-full rounded"
            src={img1}
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
