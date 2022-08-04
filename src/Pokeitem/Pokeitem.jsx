import React, { useState } from "react";
import './Pokeitem.scss';
import InfoPoke from './components/InfoPoke'
import img1 from "./MiniPokemon.png";
import img2 from "./type.png";


const Pokeitem = () => {
    
  return(
    <label>
      <input type="radio" name="pokeitem" className="pokeitem" />
        <div className="container-pokeitem">
            <img src={img1} className="img-poke margin-img"/>
            <InfoPoke no="666" name="Tu mamá"></InfoPoke>
            <img src={img2} className="img-type margin-img"/>
        </div>
    </label>
    );
};

export default Pokeitem;