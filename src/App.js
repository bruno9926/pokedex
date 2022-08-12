import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Pokeitem from './Pokeitem/Pokeitem'


function App() {
  return (
    <div className="App bg" >
      <Navbar></Navbar>
      <div className="pokeitem-container">
      <Pokeitem img={imgPokemon} no="666" name="Lorem ipsum dolor sit amet, consectetur adipiscing elit." type={imgType}></Pokeitem>
      <Pokeitem img={imgPokemon} no="001" name="Lorem ipsum dolor sit amet, consectetur adipiscing elit." type={imgType}></Pokeitem>
      <Pokeitem img={imgPokemon} no="234" name="Lorem ipsum dolor sit amet, consectetur adipiscing elit." type={imgType}></Pokeitem>
      <Pokeitem img={imgPokemon} no="065" name="Lorem ipsum dolor sit amet, consectetur adipiscing elit." type={imgType}></Pokeitem>
      <Pokeitem img={imgPokemon} no="009" name="Lorem ipsum dolor sit amet, consectetur adipiscing elit." type={imgType}></Pokeitem>
      </div>
    </div>
  );
}

export default App;
