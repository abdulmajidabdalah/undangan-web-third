import React from "react";
import { styleHeading } from "./KisahCinta";
import { headingStyleNone } from "./ReservasiKehadiran";

const WeddingEvent = () => {
  return (
    <>
      <div className={styleHeading} id="event">
        <p>Our Wedding Event</p>
      </div>
      <div className="bg-bg-main lg:mx-[174px] bg-center bg-cover bg-no-repeat py-[30px]">
        <div className="bg-white/30 backdrop-brightness-50 lg:mx-[80px] mx-6 px-2 flex justify-center rounded-lg">
          <div className="font-secondary text-center py-10">
            <h1 className="font-mempelai">Akad Nikah</h1>
            <div className="lg:text-[26px] text-[18px] py-1 text-white" data-aos="zoom-in">
              <p>Minggu, 20 April 2023</p>
              <p>Pukul 09.00 WIB</p>
              <p>Kp. Los Angeles RT/RW 03/01</p>
              <p>Desa NewYork</p>
              <p>Kec. Washington Kab. Sukabumi</p>
            </div>
            <div className="font-secondary text-center pb-10 lg:py-10">
              <h1 className="font-mempelai">Resepsi</h1>
              <div className="lg:text-[26px] text-[18px] py-1 text-white" data-aos="zoom-in" data-aos-delay="500">
                <p>Minggu, 29 April 2023</p>
                <p>Pukul 11.00 WIB s/d Selesai</p>
                <p>Kp. Los Angeles RT/RW 03/01</p>
                <p>Desa NewYork</p>
                <p>Kec. Washington Kab. Sukabumi</p>
              </div>
            </div>
            <button className="bg-primary px-6 py-2 rounded-md font-secondary text-white">
              <i className="icofont-location-pin"></i>
              Klik Map
            </button>
          </div>
        </div>
        <p className="font-secondary text-center text-[50px] leading-[50px] text-primary py-[50px]">
          LIVE STREAMING
        </p>
        <div className="text-center">
          <i className="icofont-instagram icofont-5x text-primary"></i>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-primary px-6 py-2 rounded-md font-secondary text-white">
            <i className="icofont-instagram pr-2"></i>
            @mine07
          </button>
        </div>
      </div>
      <div className={headingStyleNone}></div>
    </>
  );
};

export default WeddingEvent;
