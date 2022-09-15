import { useContext, useState, useEffect } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export const usePokemon = () => {

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

    return {pokemon};
}
