import React, { useContext } from 'react';
import './Home.scss';
import PokeList from '../../PokeList/PokeList';
import Welcome from '../../Welcome/Welcome';
import { Pokeview } from '../../Pokeview/Pokeview';
import { PokemonContext } from '../../context/PokemonContext';

const Home = () => {

  const { state: {
    selectedPokemonIndex
  } } = useContext(PokemonContext);

  return (
    <div className='home-page'>
      {
        selectedPokemonIndex ?
          <Pokeview /> : <Welcome />
      }
      <PokeList />
    </div>
  )
}

export default Home