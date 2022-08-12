import React from "react";
import './Pokeitem.scss';
import PropTypes from 'prop-types'
import InfoPoke from './components/InfoPokemon/InfoPokemon'


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

Pokeitem.defaultProps = {
  no: 0,
  name: 'Pokemon',
  type: '/assets/img/type.png',
  img: '/assets/img/MiniPokemon.png'

};

Pokeitem.propTypes = {
  no: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired
};

export default Pokeitem;