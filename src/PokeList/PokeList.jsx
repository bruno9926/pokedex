import React from 'react'
import Pokeitem from '../Pokeitem/Pokeitem'
import useFetchPokemon from './useFetchPokemon';
// styles
import './PokeList.scss'

const PokeList = () => {

    const { pokemon } = useFetchPokemon();

    return (
        <div className="pokeitem-container">
            {
                pokemon.map((pokemon, index) => (
                    <Pokeitem
                        key={index}
                        name={pokemon.name}
                        no={pokemon.no}
                        img={pokemon.img}
                        types={pokemon.types}
                    />
                ))
            }
        </div>
    )
}

export default PokeList