import React from "react";
import './InfoPokemon.scss';


const InfoPokemon = ({no, name}) => {
    return (
        <div className="info-content">
            <p className="info-poke">No. {no}</p>
            <p className="info-poke name-poke">{name}</p>
        </div>
    );
};

export default InfoPokemon;