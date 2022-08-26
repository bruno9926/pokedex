import React from 'react';
import './App.css';
import AppProvider from './context/PokemonContext';
import Navbar from './Navbar/Navbar';
import { PokedexLayout } from './PokedexLayout/PokedexLayout';
// pages
import Home from './pages/Home/Home';
import { Pokeview } from './Pokeview/Pokeview';

function App() {
  return (
    <AppProvider>
      <PokedexLayout>
        <div className="App bg" >
          <Navbar></Navbar>
          <Home />
          <Pokeview></Pokeview>
        </div>
      </PokedexLayout>
    </AppProvider>
    
  );
}

export default App;
