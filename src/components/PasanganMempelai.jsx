import React from "react";
import wanita from "../assets/wanita.jpeg";
import pria from "../assets/pria.jpeg";
import { Fade, Slide} from "react-awesome-reveal";

const PasanganMempelai = () => {
  return (
    <>
      <div
        className="lg:mx-[174px] bg-bg-main bg-center bg-cover bg-fixed py-10"
        id="couple"
      >
        <div className="mx-5 pb-5 bg-secondary rounded-lg border-x-2 border-white">
          <div className="flex justify-center items-center">
          <Fade
                delay={1e3}
                cascade
                damping={1e-1}
                triggerOnce={true}
            className="font-pasangan text-center pt-8 lg:pt-[60px] lg:text-6xl text-4xl text-white"
          >
            Pasangan Mempelai
          </Fade>
          </div>
            <p className="text-center font-secondary lg:text-[26px] text-[22px] leading-relaxed lg:mx-[247px] mx-4 mt-4 lg:mt-[55px] text-white">
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang
              Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
            </p>
        </div>
        <Slide duration={2000} delay={700} triggerOnce={true}>
        <div className="flex justify-center items-center mt-6 bg-secondary py-5 mx-5 rounded-xl border-x-4 border-white">
            <div>
              <img
                src={wanita}
                alt="wanita"
                className="lg:h-[250px] lg:w-[250px] w-[200px] h-[200px] mx-auto object-cover rounded-[50%] border border-white"
              />
              <h1 className="font-mempelai text-center lg:my-2 my-1 text-white capitalize">
              ida rahmawati
              </h1>
              <div className="font-secondary text-center lg:text-[26px] text-[22px] leading-relaxed text-white capitalize">
                <p>Putri dari :</p>
                <p>Bapak sulaeman</p>
                <p>&</p>
                <p>Ibu aidah</p>
              </div>
            </div>
        </div>
          </Slide>
          <Slide duration={2000} delay={1000} triggerOnce={true}>
        <div className="flex justify-center items-center mt-4 lg:mt-8 pb-10 bg-secondary py-5 mx-5 rounded-xl border-x-4 border-white">
            <div>
              <img
                src={pria}
                alt="pria"
                className="lg:h-[250px] lg:w-[250px] w-[200px] h-[200px] mx-auto object-cover rounded-[50%] border border-white"
              />
              <h1 className="font-mempelai text-center my-1 lg:my-2 text-white">
                Nola Azhar Sukma
              </h1>
              <div className="font-secondary text-center text-[22px] lg:text-[26px] leading-relaxed text-white">
                <p>Putra dari :</p>
                <p>Bapak Suwarno</p>
                <p>&</p>
                <p>Ibu Ela Karmila, S. Pd </p>
              </div>
            </div>
        </div>
          </Slide>
      </div>
    </>
  );
};

export default PasanganMempelai;
