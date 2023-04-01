import React from "react";
import { Link } from "react-router-dom";

const ButtonOpen = () => {
  return (
    <div>
      <button className="font-button-cover bg-[#9E795E] px-5 py-3 rounded-md mt-3">
        <Link to="/">
          <i className="icofont-envelope-open icofont-md mr-1"></i>
          Buka undangan
        </Link>
      </button>
    </div>
  );
};

export default ButtonOpen;
