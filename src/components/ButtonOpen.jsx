import React from "react";

const ButtonOpen = ({clickButton}) => {
  return (
    <div>
      <button onClick={clickButton} className="font-button-cover bg-secondary px-5 py-3 rounded-md mt-3">
        <div>
          <i className="icofont-envelope-open icofont-md mr-1"></i>
          Buka undangan
        </div>
      </button>
    </div>
  );
};

export default ButtonOpen;
