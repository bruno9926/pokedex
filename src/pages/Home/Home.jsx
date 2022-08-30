import React from 'react';
import './Home.scss';
import PokeList from '../../PokeList/PokeList';
import Welcome from '../../Welcome/Welcome';
import { Pokeview } from '../../Pokeview/Pokeview';

const Home = () => {
  return (
    <div className='home-page'>
        <Pokeview/>
        {/* <Welcome /> */}
        <PokeList />
    </div>
  )
}

export default Home