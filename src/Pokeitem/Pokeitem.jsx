import React, { useContext } from "react";
import './Pokeitem.scss';
import PropTypes from 'prop-types'
import InfoPoke from './components/InfoPokemon/InfoPokemon'
import { PokemonContext } from "../context/PokemonContext";
// type images
import typeImgs from './typeImages.json'

const Pokeitem = React.forwardRef((props, ref) => {
    const { no, name, types, img } = props;

    const { updateState } = useContext(PokemonContext);

    const selectPokemon = () => {
        updateState({
            selectedPokemonIndex: no
        })
    }

    return (
        <label ref={ref} onClick={selectPokemon}>
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
});

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