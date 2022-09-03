import React from "react";
import './Spinner.scss'

const Spinner = ({small}) => {

  return (
    <div className="spinner">
      <img className={`pokeball${small? " -small" : ""}`}
        src="./assets/img/Poke_Ball_icon.png"
        alt="pokeball-spinner" />
    </div>
  );
};

export default Spinner;