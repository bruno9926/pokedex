import React from "react";
import './Pokeitem.scss';
import InfoPoke from './components/InfoPokemon/InfoPokemon'
import imgPokemon from "./MiniPokemon.png";
import imgType from "./type.png";


const Pokeitem = ({no, name, type, img}) => {
    
  return(
    <label>
      <input type="radio" name="pokeitem" className="pokeitem" />
        <div className="container-pokeitem">
            <img src={img} className="img-poke" alt="Pokemon"/>
            <InfoPoke no={no} name={name}></InfoPoke>
            <img src={type} className="img-type" alt="Pokemon Type"/>
        </div>
    </label>
    );
};

export default Pokeitem;