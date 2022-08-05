import React from "react";
import './Pokeitem.scss';
import InfoPoke from './components/InfoPokemon'
import imgPokemon from "./MiniPokemon.png";
import imgType from "./type.png";


const Pokeitem = () => {
    
  return(
    <label>
      <input type="radio" name="pokeitem" className="pokeitem" />
        <div className="container-pokeitem">
            <img src={imgPokemon} className="img-poke" alt="Pokemon"/>
            <InfoPoke no="666" name="Tu mamá"></InfoPoke>
            <img src={imgType} className="img-type" alt="Pokemon Type"/>
        </div>
    </label>
    );
};

export default Pokeitem;