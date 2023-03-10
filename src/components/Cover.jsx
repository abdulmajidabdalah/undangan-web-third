import React, { useState } from "react";
import IMG from "../assets/jumbotron.jpeg";
import "../assets/icofont/icofont.min.css";
import ButtonOpen from "./ButtonOpen";

const Cover = () => {
  const [hide, setHide] = useState(true);

  const handleClick = () => {
    setHide(false);
  };
  return (
    <>
      {hide ? (
        <div className="bg-hero-pattern lg:h-screen bg-center bg-cover fixed lg:w-full z-50 overflow-y-scroll no-scrollbar">
          <div className="flex justify-center items-center h-screen py-10">
            <header>
              <img
                src={IMG}
                alt="IMG"
                className="lg:h-[300px] lg:w-[300px] h-[250px] w-[250px] rounded-[50%] object-cover m-auto"
              />
              <div className="text-center lg:px-0 px-4">
                <p className="font-mempelai">Me & Mine</p>
                <p className="font-secondary">Kepada Bpk/Ibu/Saudara/i</p>
                <p className="font-third text-3xl">
                  Adbul Majid A dan Calon Istri
                </p>
                <p className="font-secondary">
                  Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir
                  di acara pernikahan kami.
                </p>
                <ButtonOpen handleClick={handleClick} />
              </div>
            </header>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cover;
