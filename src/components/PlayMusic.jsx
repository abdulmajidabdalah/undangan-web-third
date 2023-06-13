import React, { useState } from "react";
import music from "../assets/music/Ed Sheeran - The Joker And The Queen.mp3";
import useSound from "use-sound";

const PlayMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(music);

  const handlePlay = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="fixed z-40 lg:bottom-4 bottom-32 flex justify-end w-full pr-4">
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
