import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Pokeitem from './Pokeitem/Pokeitem'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pokeitem></Pokeitem>
      <Pokeitem></Pokeitem>
      <Pokeitem></Pokeitem>
      <Pokeitem></Pokeitem>
      <Pokeitem></Pokeitem>
    </div>
  );
}

export default App;
