import React, { useContext } from "react";
import "./Home.scss";
import PokeList from "../../PokeList/PokeList";
import Welcome from "../../Welcome/Welcome";
import Spinner from "../../Spinner/Spinner";
import { PokemonContext } from "../../context/PokemonContext";

const Home = () => {
  const {
    state: { isFetching, pokemonMap },
  } = useContext(PokemonContext);
  const pokemonList = Object.values(pokemonMap);
  return (
    <div className="home-page">
      {isFetching && pokemonList.length === 0 ? <div className="cont-spinner"><Spinner /></div> : 
      <div>
          <Welcome />
          <PokeList /> 
        </div> }
    </div>
  );
};

export default Home;
