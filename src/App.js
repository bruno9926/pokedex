import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import PokeList from './PokeList/PokeList';
import { PokedexLayout } from './PokedexLayout/PokedexLayout';

function App() {
  return (
    <PokedexLayout>
      <div className="App bg" >
        <Navbar></Navbar>
        <PokeList />
      </div>
    </PokedexLayout>
  );
}

export default App;
