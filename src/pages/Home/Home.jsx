import React, { useContext } from "react";
import "./Home.scss";
import PokeList from "../../PokeList/PokeList";
import Welcome from "../../Welcome/Welcome";
import Spinner from "../../Spinner/Spinner";
import { PokemonContext } from "../../context/PokemonContext";
import { Pokeview } from '../../Pokeview/Pokeview';
import Navbar from "../../Navbar/Navbar";

const Home = () => {
  const {
    state: { isFetching, pokemonMap, selectedPokemonIndex },
  } = useContext(PokemonContext);
  const pokemonList = Object.values(pokemonMap);
  return (
    <>
      <Navbar />
      <div className="home-page">
      {isFetching && pokemonList.length === 0 ? <div className="cont-spinner"><Spinner /></div> : 
      <div>
          {
            selectedPokemonIndex ?
            <Pokeview /> : <Welcome />
          }
          <PokeList /> 
        </div> }
    </div>
    </>
  );
};

export default Home;