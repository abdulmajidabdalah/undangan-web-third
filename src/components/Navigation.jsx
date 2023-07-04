import React from "react";
import home from "../assets/home.png";
import couple from "../assets/couple.png";
import event from "../assets/event.png";
import gallery from "../assets/gallery.png";
import whises from "../assets/whises.png";
import { Link } from "react-scroll";

const style = {
  img: "h-[50px] w-[50px] object-cover hover:scale-110 duration-300",
  text: "-mt-2 text-sm"
};

const Navigation = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg shadow-black grid grid-cols-5 rounded-lg border-solid border-gray-500 fixed bottom-2 z-40 mx-1 lg:px-5 px-5">
          <div className="text-center lg:-mt-1 text-slate-700 font-secondary text-[18px]">
            <Link to="home" offset={0} duration={500}>
              <img src={home} alt="" className={style.img} />
            </Link>
            <p className={style.text} >Home</p>
          </div>
          <div className="text-center lg:-mt-1 text-slate-700 font-secondary text-[18px]">
            <Link to="couple" offset={0} duration={500}>
              <img src={couple} alt="" className={style.img} />
            </Link>
            <p className={style.text}>Couple</p>
          </div>
          <div className="text-center lg:-mt-1 text-slate-700 font-secondary text-[18px]">
            <Link to="event" offset={0} duration={500}>
              <img src={event} alt="" className={style.img} />
            </Link>
            <p className={style.text}>Event</p>
          </div>
          <div className="text-center lg:-mt-1 text-slate-700 font-secondary text-[18px]">
            <Link to="gallery" offset={0} duration={500}>
              <img src={gallery} alt="" className={style.img} />
            </Link>
            <p className={style.text}>Gallery</p>
          </div>
          <div className="text-center lg:-mt-1 text-slate-700 font-secondary text-[18px]">
            <Link to="whises" offset={50} duration={500}>
              <img src={whises} alt="" className={style.img} />
            </Link>
            <p className={style.text}>Whises</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
