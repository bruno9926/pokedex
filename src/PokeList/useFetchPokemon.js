import { useEffect, useState } from 'react'

const useFetchPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [isFetching, setIsFetching] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchPokemon = async (limit = 5, offset = 0) => {
        try {
            setLoading(true);
            setIsFetching(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const body = await response.json();
            const pokePromises = body.results.map((result) => fetch(result.url));

            const allResults = await Promise.all(pokePromises);
            const resultsData = await Promise.all(allResults.map(result => result.json()))
            console.log(resultsData);

            setPokemon(resultsData.map(result => ({
                name: result.name,
                no: result.order,
                img: result.sprites.front_default,
                types: result.types.map(type => type.type.name)
            })))
            setLoading(false);
        } catch (error) {
            setIsFetching(false);
            console.log(error)
        }
    }

    useEffect(() => {
        
        fetchPokemon(600);
        
    }, []);

    useEffect(() => {
        if (pokemon.length >= 0 && isFetching) {
            setIsFetching(false);
        }
    }, [pokemon]);

    return { pokemon, isFetching, fetchPokemon, loading }
}

export default useFetchPokemon