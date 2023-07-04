import React from "react";
import IMG from "../assets/couple.jpeg";
import cuci from "../assets/cuci.png";
import masker from "../assets/masker.png";
import jarak from "../assets/jarak.png";
import { Zoom } from "react-awesome-reveal";

const Footer = () => {
  return (
    <>
      <div className="lg:mx-[174px] bg-hero-pattern bg-center bg-no-repeat bg-cover pt-10 pb-5">
        <footer>
          <img
            src={IMG}
            alt="IMG"
            className="lg:h-[300px] lg:w-[300px] h-[250px] w-[250px] rounded-[50%] object-cover m-auto border-2 border-white"
          />
          <Zoom duration={2000} triggerOnce={true}>
          <div className="text-center bg-secondary lg:mx-32 mx-2 py-10 mt-3 rounded-tl-2xl rounded-br-2xl">
            <p className="font-mempelai text-3xl lg:text-5xl py-3 text-white">Nola & Ida</p>
            <p className="font-secondary text-[25px] text-white my-4 lg:my-8">
              Atas kehadiran dan doa restunya, kami ucapkan terimakasih.
            </p>
          </div>
          </Zoom>
          <Zoom duration={2000} delay={1000} triggerOnce={true}>
          <div className="bg-secondary lg:mx-10 mx-2 pt-3 mt-20 rounded-tr-3xl rounded-bl-3xl">
            <p className="font-secondary text-[30px] text-white text-center">
              PROTOKOL KESEHATAN
            </p>
          <div className="flex justify-center items-center my-12 lg:gap-0 lg:mx-0 gap-2 mx-2">
            <div className="lg:px-16">
              <img
                src={cuci}
                alt=""
                className="lg:h-[150px] lg:w-[150px] w-[100px] h-[100px] lg:hover:scale-125 duration-300"
              />
              <p className="text-center font-secondary text-white my-3 lg:my-6">
                Cuci Tangan
              </p>
            </div>
            <div className="lg:px-16 lg:ml-0 ml-4">
              <img
                src={masker}
                alt=""
                className="lg:h-[150px] lg:w-[150px] w-[100px] h-[100px] lg:hover:scale-125 duration-300"
              />
              <p className="text-center font-secondary text-white my-3 lg:my-6">
                Gunakan Masker
              </p>
            </div>
            <div className="lg:px-16">
              <img
                src={jarak}
                alt=""
                className="lg:h-[150px] lg:w-[150px] w-[100px] h-[100px] lg:hover:scale-125 duration-300"
              />
              <p className="text-center font-secondary text-white my-3 lg:my-6">
                Jaga Jarak
              </p>
            </div>
          </div>
          </div>
          </Zoom>
        </footer>
      </div>
      <div className="bg-black h-[40vh] font-footer text-center pt-8">
        <p>Copyright Abdul-Majid-Abdalah © 2023</p>
        <p>Abadikan Moment Spesial</p>
        <p className="mb-8">- All Rights Reserved -</p>
        <a
          href="https://www.instagram.com/abdulmajidabdalah_/"
          target="_blank"
          rel="noreferrer"
          className="bg-secondary text-white px-4 py-2 rounded-lg duration-200"
        >
          <i className="icofont-instagram mr-2"></i>
          @abdulmajidabdalah_
        </a>
      </div>
    </>
  );
};

export default Footer;
