import React from "react";
import '../Pokeitem.scss';


const InfoPoke = ({no, name}) => {
    return (
        <div className="info-content">
            <p className="info-poke">No. {no}</p>
            <p className="info-poke">{name}</p>
        </div>
    );
};

export default InfoPoke;