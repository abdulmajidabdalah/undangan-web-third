const PlayMusic = ({handlePlay, isPlaying}) => {

  return (
    <div className="fixed z-10 lg:top-4 bottom-20 lg:right-4 right-1">
      {!isPlaying ? (
        <div className='bg-white lg:bg-slate-300 rounded-full p-2 flex justify-center items-center'>
          <i
            className="icofont-ui-play icofont-2x text-secondary"
            onClick={handlePlay}
          ></i>
        </div>
      ) : (
        <div className='bg-white lg:bg-slate-300 rounded-full p-2 flex justify-center items-center'>
          <i
            className="icofont-ui-pause icofont-2x text-secondary"
            onClick={handlePlay}
          ></i>
        </div>
      )}
    </div>
  );
};

export default PlayMusic;
