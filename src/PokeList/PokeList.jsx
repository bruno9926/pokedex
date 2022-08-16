import React from 'react'
import Pokeitem from '../Pokeitem/Pokeitem'
import Spinner from '../Spinner/Spinner';
import useFetchPokemon from './useFetchPokemon';
// styles
import './PokeList.scss'

const PokeList = () => {

    const { pokemon, loading } = useFetchPokemon();

    return (
        <div>
        {loading && <Spinner/>}
        <div className="pokeitem-container">
            
            {pokemon?.length &&
                pokemon.map((pokemon, index) => (
                    <Pokeitem
                        key={index}
                        name={pokemon.name}
                        no={pokemon.no}
                        img={pokemon.img}
                    />
                ))
            }
        </div>
        </div>
    )
}

export default PokeList