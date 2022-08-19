import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
// pages
import PokeList from './PokeList/PokeList';
import Home from './pages/Home/Home';

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
