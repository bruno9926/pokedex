import React, {useContext} from "react";
import "./Home.scss";
import PokeList from "../../PokeList/PokeList";
import Welcome from "../../Welcome/Welcome";
import Spinner from "../../Spinner/Spinner";
import useFetchPokemon from "../../PokeList/useFetchPokemon";
import { PokemonContext } from "../../context/PokemonContext";

const Home = () => {
  const {state: { isFetching, pokemonList }} = useContext(PokemonContext);
  useFetchPokemon();
  return (
    <div className="home-page">
      {isFetching && <Spinner />}
      {pokemonList?.length && (
        <>
          <Welcome />
          <PokeList />
        </>
      )}
    </div>
  );
};

export default Home;