import { useEffect, useContext, useRef, useCallback, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext';

const useFetchPokemon = () => {

    const {state: {isFetching, pokemonMap}, updateState} = useContext(PokemonContext);
    const [hasMore, setHasMore] = useState(true);

    // for infinite scroll
    const observer = useRef();
    const lastPokemonRef = useCallback((node) => {
        if (isFetching) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                let currentSize = Object.keys(pokemonMap).length;
                fetchPokemon(10, currentSize);
            } 
        }, {threshold: 1})
        if (node) {
            observer.current.observe(node);
        }
    }, [isFetching, hasMore])

    const fetchPokemon = async (limit = 5, offset = 0) => {
        try {
            updateState({isFetching: true});
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const body = await response.json();
            setHasMore(!!body.next);
            
            const pokePromises = body.results.map((result) => fetch(result.url));

            const allResults = await Promise.all(pokePromises);
            const resultsData = await Promise.all(allResults.map(result => result.json()))

            let indexedResults = {};
            resultsData.forEach(result => {
                indexedResults[result.id] = {
                    name: result.name,
                    no: result.id,
                    img: result.sprites.front_default,
                    types: result.types.map(type => type.type.name)
                }
            });

            updateState({
                pokemonMap: {...pokemonMap, ...indexedResults}
            })
        } catch (error) {
            updateState({isFetching: false});
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemon(10);
    }, []);

    useEffect(() => {
        if (Object.keys(pokemonMap).length >= 0 && isFetching) {
            updateState({isFetching: false});
        }
    }, [pokemonMap]);

    return {
        fetchPokemon,
        lastPokemonRef
    }
}

export default useFetchPokemon