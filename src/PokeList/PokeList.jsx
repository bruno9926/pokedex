import React, { useContext } from "react";
import Pokeitem from "../Pokeitem/Pokeitem";
import useFetchPokemon from "./useFetchPokemon";
import { PokemonContext } from "../context/PokemonContext";
// styles
import "./PokeList.scss";

const PokeList = () => {
  const { state: { isFetching, pokemonMap } } = useContext(PokemonContext);
  const pokemonList = Object.values(pokemonMap);

  const {
    lastPokemonRef
  } = useFetchPokemon();

  return (
      <div className="pokeitem-container">
        {pokemonList?.length &&
          pokemonList.map((pokemon, index) => {
            if (index + 1 === pokemonList.length) {
              return <Pokeitem
                ref={lastPokemonRef}
                key={index}
                name={pokemon.name}
                no={pokemon.no}
                img={pokemon.img}
                types={pokemon.types}
              />
            } else {
              return <Pokeitem
                key={index}
                name={pokemon.name}
                no={pokemon.no}
                img={pokemon.img}
                types={pokemon.types}
              />
            }
          })}
        {
          isFetching &&
          <Spinner small/>
        }
      </div>
  );
};

export default PokeList;
