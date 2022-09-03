import React, { useContext } from "react";
import "./Home.scss";
import PokeList from "../../PokeList/PokeList";
import Welcome from "../../Welcome/Welcome";
import Spinner from "../../Spinner/Spinner";
import useFetchPokemon from "../../PokeList/useFetchPokemon";
import { PokemonContext } from "../../context/PokemonContext";
import { Pokeview } from "../../Pokeview/Pokeview";

const Home = () => {
  const {
    state: { isFetching, pokemonList },
  } = useContext(PokemonContext);
  useFetchPokemon();
  return (
    <div className="home-page">
      {isFetching && !pokemonList.length ? (
        <Spinner />
      ) : (
        pokemonList?.length && (
          <>
            <Pokeview />
            {/* <Welcome /> */}
            <PokeList />
          </>
        )
      )}
    </div>
  );
};

export default Home;
