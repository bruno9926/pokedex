import React, {useContext} from "react";
import Pokeitem from "../Pokeitem/Pokeitem";
import useFetchPokemon from "./useFetchPokemon";
import { PokemonContext } from "../context/PokemonContext";
// styles
import "./PokeList.scss";

const PokeList = () => {
  const {state: {pokemonList}} = useContext(PokemonContext);
  useFetchPokemon();

  return (
    <div>
      <div className="pokeitem-container">
        {pokemonList?.length &&
          pokemonList.map((pokemon, index) => (
            <Pokeitem
              key={index}
              name={pokemon.name}
              no={pokemon.no}
              img={pokemon.img}
              types={pokemon.types}
            />
          ))}
      </div>
    </div>
  );
};

export default PokeList;
