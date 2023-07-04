import React from "react";
import IMG from "../assets/couple.jpeg";
import "../assets/icofont/icofont.min.css";
import ButtonOpen from "./ButtonOpen";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const Cover = ({ clickButton }) => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading nama={id}/>
      ) : (
        <div className="bg-hero-pattern lg:h-screen bg-center bg-cover lg:w-full no-scrollbar fixed top-0 z-40">
          <div className="flex justify-center items-center h-screen py-10">
            <header>
              <img
                src={IMG}
                alt="IMG"
                className="lg:h-[300px] lg:w-[300px] h-[250px] w-[250px] rounded-[50%] object-cover m-auto border-2 border-white"
              />
              <div className="text-center lg:px-0 px-4">
                <p className="font-mempelai text-white text-3xl capitalize my-2">
                  nola & ida
                </p>
                <p className="font-secondary text-white">
                  Kepada Bpk/Ibu/Saudara/i
                </p>
                <Fade cascade duration={1500} damping={1e-1} triggerOnce={true} className="text-white text-2xl tracking-wider capitalize">
                  {id}
                </Fade>
                <p className="font-secondary text-white">
                  Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir
                  di acara pernikahan kami.
                </p>
                <ButtonOpen clickButton={clickButton} />
              </div>
            </header>
          </div>
        </div>
      )}
    </>
  );
};

export default Cover;
