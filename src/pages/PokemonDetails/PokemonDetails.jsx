import React, {useContext, useEffect} from 'react';
import { Pokeview } from '../../Pokeview/Pokeview';
import { PokemonContext } from '../../context/PokemonContext';

const PokemonDetails = () => {

    const { state: {
        selectedPokemonIndex: index,
        pokemonMap
    } } = useContext(PokemonContext);

    useEffect(() => {
      console.log(index);
    }, [pokemonMap]);
    

    return (
        <Pokeview />
    )
}

export default PokemonDetails