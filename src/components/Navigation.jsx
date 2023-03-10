import React from "react";
import home from "../assets/home.png";
import couple from "../assets/couple.png";
import event from "../assets/event.png";
import gallery from "../assets/gallery.png";
import whises from "../assets/whises.png";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg shadow-black grid grid-cols-5 gap-8 px-8 rounded-lg border-solid border-gray-500 fixed bottom-4 z-40 mx-4">
          <div className="text-center lg:-mt-1 text-primary font-secondary text-[18px]">
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              <img
                src={home}
                alt=""
                className="h-[70px] w-[70px] hover:scale-110 duration-300 lg:ml-0 ml-1"
              />
            </Link>
            <p className="-mt-3 ml-1">Home</p>
          </div>
          <div className="text-center lg:-mt-1 text-primary font-secondary text-[18px]">
            <Link
              to="couple"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <img
                src={couple}
                alt=""
                className="h-[70px] w-[70px] hover:scale-110 duration-300 ml-2 lg:ml-0"
              />
            </Link>
            <p className="-mt-3 ml-1">Couple</p>
          </div>
          <div className="text-center lg:-mt-1 text-primary font-secondary text-[18px]">
            <Link to="event" spy={true} smooth={true} offset={0} duration={500}>
              <img
                src={event}
                alt=""
                className="h-[70px] w-[70px] hover:scale-110 duration-300 ml-2 lg:ml-0"
              />
            </Link>
            <p className="-mt-3 ml-1">Event</p>
          </div>
          <div className="text-center lg:-mt-1 text-primary font-secondary text-[18px]">
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <img
                src={gallery}
                alt=""
                className="h-[70px] w-[70px] hover:scale-110 duration-300 lg:ml-0 ml-2"
              />
            </Link>
            <p className="-mt-3 ml-1">Gallery</p>
          </div>
          <div className="text-center lg:-mt-1 text-primary font-secondary text-[18px]">
            <Link
              to="whises"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <img
                src={whises}
                alt=""
                className="h-[70px] w-[70px] hover:scale-110 duration-300 ml-2 lg:ml-0"
              />
            </Link>
            <p className="-mt-3 ml-1">Whises</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
