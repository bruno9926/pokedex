import { useEffect, useState, useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext';

const useFetchPokemon = () => {

    const {state: {isFetching, pokemonList}, updateState} = useContext(PokemonContext);

    const fetchPokemon = async (limit = 5, offset = 0) => {
        try {
            updateState({isFetching: true});
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const body = await response.json();
            const pokePromises = body.results.map((result) => fetch(result.url));

            const allResults = await Promise.all(pokePromises);
            const resultsData = await Promise.all(allResults.map(result => result.json()))
            let pokemonList = resultsData.map(result => ({
                name: result.name,
                no: result.id,
                img: result.sprites.front_default,
                types: result.types.map(type => type.type.name)
            }));

            updateState({pokemonList})
        } catch (error) {
            updateState({isFetching: false});
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemon(100);
    }, []);

    useEffect(() => {
        if (pokemonList.length >= 0 && isFetching) {
            updateState({isFetching: false});
        }
    }, [pokemonList]);

    return {fetchPokemon}
}

export default useFetchPokemon