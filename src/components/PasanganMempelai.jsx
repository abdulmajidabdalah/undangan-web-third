import React from "react";
import wanita from "../assets/sri.jpg";
import pria from "../assets/yosep.jpg";
import { Slide, Zoom } from "react-awesome-reveal";


const PasanganMempelai = () => {
  return (
    <>
      <div
        className="lg:mx-[174px] bg-bg-main bg-center bg-cover bg-no-repeat bg-fixed pb-5"
        id="couple"
      >
        <div className="bg-white rounded-t-[50%]">
          <Slide triggerOnce={true}
            className="font-pasangan text-center pt-8 lg:pt-[60px] lg:text-6xl text-4xl"
          >
            Pasangan Mempelai
          </Slide>
          <Zoom className="text-center font-secondary lg:text-[26px] text-[22px] leading-relaxed lg:mx-[247px] mx-4 mt-4 lg:mt-[55px]">
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
          </Zoom>
        </div>
        <div className="flex justify-center items-center mt-6 bg-white/30 backdrop-brightness-50 py-5 mx-5 rounded-xl">
          <div>
            <img
              src={wanita}
              alt="wanita"
              className="lg:h-[250px] lg:w-[250px] w-[200px] h-[200px] mx-auto object-cover rounded-[50%]"
            />
            <h1 className="font-mempelai text-center lg:my-2 my-1 text-white">
              Sri Kartini
            </h1>
            <div className="font-secondary text-center lg:text-[26px] text-[22px] leading-relaxed text-white">
              <p>Putri dari :</p>
              <p>Bapak Dede</p>
              <p>&</p>
              <p>Ibu Anah</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 lg:mt-8 pb-10 bg-white/30 backdrop-brightness-50 py-5 mx-5 rounded-xl">
          <div>
            <img
              src={pria}
              alt="pria"
              className="lg:h-[250px] lg:w-[250px] w-[200px] h-[200px] mx-auto object-cover rounded-[50%]"
            />
            <h1 className="font-mempelai text-center my-1 lg:my-2 text-white">
              Yosep Ramdani
            </h1>
            <div className="font-secondary text-center text-[22px] lg:text-[26px] leading-relaxed text-white">
              <p>Putra dari :</p>
              <p>Bapak (Alm) H. Anwar Abdussalam</p>
              <p>&</p>
              <p>Ibu Hj. Enung Nuriyah</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasanganMempelai;
