import React from "react";

const ButtonOpen = ({ handleClick }) => {
  return (
    <div>
      <button
        className="font-button-cover bg-[#9E795E] px-5 py-3 rounded-md mt-3"
        onClick={handleClick}
      >
        <i className="icofont-envelope-open icofont-md mr-1"></i>
        Buka undangan
      </button>
    </div>
  );
};

export default ButtonOpen;
