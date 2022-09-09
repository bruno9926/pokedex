import React, { useContext, useState, useEffect } from 'react';
import './Pokeview.scss';
import Type from './components/Type';
import { PokemonContext } from '../context/PokemonContext';

const Pokeview = () => {

    const { state: {
        selectedPokemonIndex: index,
        pokemonMap
    } } = useContext(PokemonContext);

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        if (!index || Object.keys(pokemonMap).length === 0) {
            return;
        }
        if (index <= Object.keys(pokemonMap).length) {
            setPokemon(pokemonMap[index]);
        }
    }, [index, pokemonMap]);

    return (
        <div className='j-pokeview-welcome'>
            {
                pokemon ?
                <div className='j-pokeview-container'>
                    <img alt='Selected Pokemon' src={pokemon.img}></img>
                    <div className='j-pokeview-type-container'>
                        {
                            pokemon.types.map((type, index) => (
                                <Type key={'type ' + index} type={type} />
                            ))
                        }
                    </div>
                </div> :
                <h1 className='no-pokemon'>
                    Pokemon not selected
                </h1>
            }
        </div>
    );
}

export { Pokeview };