import { GridLoader } from "react-spinners";
const Loading = ({nama}) => {
  return (
    <div>
      <div className="bg-slate-300 fixed top-0 h-screen flex justify-center items-center z-50 w-full">
        <div>
            <div className="flex justify-center items-center">
          <GridLoader color="#3AA6B9" size={29} />
            </div>
          <p className="text-center text-secondary tracking-widest text-2xl font-sans font-semibold">Welcome</p>
          <p className="text-center text-secondary tracking-widest text-2xl">{nama}</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
