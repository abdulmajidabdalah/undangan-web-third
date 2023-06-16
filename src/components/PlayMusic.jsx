import React, { useState } from "react";
import music from "../assets/music/Ed Sheeran - The Joker And The Queen.mp3";
import useSound from "use-sound";
import {BiRightArrowAlt} from 'react-icons/bi'

const PlayMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(music);
  const [setShow] = useState(true)

  const handlePlay = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      setShow(false)
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed z-10 lg:top-4 bottom-20 flex justify-end lg:right-4 right-1">
      {
        isPlaying ? (
          null
          )
          :
          <div className="bg-gray-500 rounded-md lg:py-1 lg:h-8 py-0 lg:px-5 px-1 lg:text-white text-white lg:text-sm text-[12px] flex justify-end items-center">
            <p>play the song </p>
            <BiRightArrowAlt className="mt-1 ml-1"/>
          </div>
      }
      {!isPlaying ? (
        <i
          className="icofont-ui-play icofont-2x text-[#9E795E]"
          onClick={handlePlay}
        ></i>
      ) : (
        <i
          className="icofont-ui-pause icofont-2x text-[#9E795E]"
          onClick={handlePlay}
        ></i>
      )}
    </div>
  );
};

export default PlayMusic;
