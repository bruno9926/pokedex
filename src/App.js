import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { PokedexLayout } from './PokedexLayout/PokedexLayout';
// pages
import Home from './pages/Home/Home';

function App() {
  return (
    <PokedexLayout>
      <div className="App bg" >
        <Navbar></Navbar>
        <Home />
      </div>
    </PokedexLayout>
  );
}

export default App;
