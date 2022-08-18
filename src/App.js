import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import PokeList from './PokeList/PokeList';

function App() {
  return (
    <div className="App bg" >
      <Navbar></Navbar>
      <PokeList />
    </div>
  );
}

export default App;
