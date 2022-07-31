import React from "react";
import '../Pokeitem.css';


const InfoPoke = ({no, name}) => {
    return (
        <div className="o-">
            <p>No. {no}</p>
            <p>{name}</p>
        </div>
    );
};

export default InfoPoke;