import React from 'react';
import './Home.scss';
import PokeList from '../../PokeList/PokeList';
import Welcome from '../../Welcome/Welcome';

const Home = () => {
  return (
    <div className='home-page'>
        {/* <Welcome /> */}
        <PokeList />
    </div>
  )
}

export default Home