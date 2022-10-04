import React from 'react';
import './Pokeview.scss';
import Type from './components/Type';
import { usePokemon } from '../hooks/usePokemon';

const Pokeview = () => {

    const { pokemon } = usePokemon();

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