import React from "react";
import './Pokeitem.scss';
import PropTypes from 'prop-types'
import InfoPoke from './components/InfoPokemon/InfoPokemon'
// type images
import typeImgs from './typeImages.json'


const Pokeitem = ({ no, name, types, img }) => {

    return (
        <label>
            <input type="radio" name="pokeitem" className="pokeitem" />
            <div className="container-pokeitem">
                <div>
                    <img src={img} className="img-poke" alt="Pokemon" />
                    <InfoPoke no={no} name={name}></InfoPoke>
                </div>
                <div className="type-container">
                    {
                        types.map((type, i) => (
                            <img
                                title={type}
                                key={'type-' + i}
                                src={typeImgs[type]}
                                className="img-type"
                                alt="Pokemon Type"
                            />
                        ))
                    }
                </div>
            </div>
        </label>
    );
};

Pokeitem.defaultProps = {
    no: 0,
    name: 'Pokemon',
    img: '/assets/img/MiniPokemon.png',
    types: []
};

Pokeitem.propTypes = {
    no: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    img: PropTypes.string.isRequired
};

export default Pokeitem;