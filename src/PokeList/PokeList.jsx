import React from "react";
import Pokeitem from "../Pokeitem/Pokeitem";
import Spinner from "../Spinner/Spinner";
import useFetchPokemon from "./useFetchPokemon";
// styles
import "./PokeList.scss";

const PokeList = () => {
  const { pokemon, isFetching } = useFetchPokemon();

  return (
    <div>
      {isFetching && <Spinner />}
      <div className="pokeitem-container">
        {pokemon?.length &&
          pokemon.map((pokemon, index) => (
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
