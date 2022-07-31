import React from "react";
import './Pokeitem.css';
import InfoPoke from './components/infoPoke'
import img1 from "./MiniPokemon.png";
import img2 from "./type.png";


const Pokeitem = () => {
    <div className="container-pokeitem">
        <img src={img1}/>
        <InfoPoke no="666" name="Tu mamá"></InfoPoke>
        <img src={img2}/>
    </div>
};

export default Pokeitem;