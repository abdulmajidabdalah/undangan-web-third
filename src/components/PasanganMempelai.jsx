import React from "react";
import wanita from "../assets/wanita.jpeg";
import pria from "../assets/pria.jpeg";

const PasanganMempelai = () => {
  return (
    <>
      <div
        className="lg:mx-[174px] bg-bg-mempelai bg-center bg-cover bg-no-repeat"
        id="couple"
      >
        <h1 className="font-pasangan text-center pt-8 lg:pt-[80px] lg:text-8xl text-4xl">
          Pasangan Mempelai
        </h1>
        <article className="text-center font-secondary lg:text-[26px] text-[22px] leading-relaxed lg:mx-[247px] mx-4 mt-4 lg:mt-[75px]">
          Tanpa mengurangi rasa hormat, kami bermaksud mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
        </article>
        <div className="flex justify-center items-center mt-6">
          <div>
            <img
              src={wanita}
              alt="wanita"
              className="lg:h-[250px] lg:w-[250px] w-[200px] h-[200px] mx-auto object-cover rounded-[50%]"
            />
            <h1 className="font-mempelai text-center lg:my-2 my-1">Mine</h1>
            <div className="font-secondary text-center lg:text-[26px] text-[22px] leading-relaxed">
              <p>Putri dari Bapak His Father</p>
              <p>dan Ibu His Mother</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 lg:mt-8 pb-10">
          <div>
            <img
              src={pria}
              alt="pria"
              className="lg:h-[250px] lg:w-[250px] w-[200px] h-[200px] mx-auto object-cover rounded-[50%]"
            />
            <h1 className="font-mempelai text-center my-1 lg:my-2">Me</h1>
            <div className="font-secondary text-center text-[22px] lg:text-[26px] leading-relaxed">
              <p>Putri dari Bapak His Father</p>
              <p>dan Ibu His Mother</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasanganMempelai;
