import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Pokeitem from './Pokeitem/Pokeitem'


function App() {
  return (
    <div className="App bg" >
      <Navbar></Navbar>
      <div className="pokeitem-container">
      <Pokeitem></Pokeitem>
      <Pokeitem></Pokeitem>
      <Pokeitem></Pokeitem>
      <Pokeitem></Pokeitem>
      <Pokeitem></Pokeitem>
      </div>
    </div>
  );
}

export default App;
