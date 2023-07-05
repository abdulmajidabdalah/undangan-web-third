import React from "react";
import { styleHeading } from "./KisahCinta";
import { headingStyleNone } from "./ReservasiKehadiran";
import { Fade, Zoom } from "react-awesome-reveal";

const WeddingEvent = () => {
  return (
    <>
      <div className={styleHeading} id="event">
        <div className="flex justify-center items-center">
        <Fade
                delay={1e3}
                cascade
                damping={1e-1}
                triggerOnce={true}>
          <p>Our Wedding Event</p>
        </Fade>
        </div>
      </div>
      <div className="bg-bg-main lg:mx-[174px] bg-center bg-cover bg-no-repeat py-[30px]">
        <div className="bg-white/30 backdrop-brightness-50 lg:mx-[80px] mx-6 px-2 flex justify-center rounded-lg border-b-8 border-white">
          <div className="font-secondary text-center py-10">
            <h1 className="font-mempelai text-primary">Akad Nikah</h1>
            <Zoom
              direction="in"
              duration={2000}
              triggerOnce={true}
              delay={1000}
              className="lg:text-[26px] text-[18px] py-1 text-white"
            >
              <p>Minggu, 23 Juli 2023</p>
              <p>Pukul 08.00 WIB</p>
              <p>Kp. Cigadog Rt/Rw 04/06</p>
              <p>Desa Bantar Kalong </p>
              <p>Kec. Warungkiara Kab. Sukabumi</p>
            </Zoom>
            <div className="font-secondary text-center pb-10 lg:py-10">
              <h1 className="font-mempelai text-primary">Resepsi</h1>
              <Zoom
                direction="in"
                duration={2000}
                delay={1500}
                triggerOnce={true}
                className="lg:text-[26px] text-[18px] py-1 text-white"
              >
                <p>22 Juli 2023 - 24 Juli 2023</p>
                <p>Pukul 09.00 WIB</p>
                <p>Kp. Cigadog Rt/Rw 04/06</p>
                <p>Desa Bantar Kalong </p>
                <p>Kec. Warungkiara Kab. Sukabumi</p>
              </Zoom>
            </div>
            <a
              href="https://maps.app.goo.gl/6RhkouGBpx2KYUrZ7"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-primary px-6 py-2 rounded-md font-secondary text-white">
                <i className="icofont-location-pin"></i>
                Klik Map
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={headingStyleNone}></div>
    </>
  );
};

export default WeddingEvent;
