import React from "react";
import IMG from "../assets/img-cover.jpg";
import "../assets/icofont/icofont.min.css";
import ButtonOpen from "./ButtonOpen";
import { useParams } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Cover = () => {
  const { id } = useParams();
  return (
    <>
      <div className="bg-hero-pattern lg:h-screen bg-center bg-cover lg:w-full no-scrollbar">
        <div className="flex justify-center items-center h-screen py-10">
          <header>
            <img
              src={IMG}
              alt="IMG"
              className="lg:h-[300px] lg:w-[300px] h-[250px] w-[250px] rounded-[50%] object-cover m-auto border-2 border-white"
            />
            <div className="text-center lg:px-0 px-4">
              <p className="font-mempelai text-white text-3xl">
                Yosep Ramdani & Sri Kartini
              </p>
              <p className="font-secondary text-white">
                Kepada Bpk/Ibu/Saudara/i
              </p>
              <TypeAnimation
                sequence={[`${id}`]}
                speed={300}
                cursor={false}
                className="font-third lg:text-3xl text-xl capitalize my-3 text-white"
              />
              {/* {id} */}
              <p className="font-secondary text-white">
                Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir
                di acara pernikahan kami.
              </p>
              <ButtonOpen />
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Cover;
