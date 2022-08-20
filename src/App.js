import React from 'react';
import './App.css';
import AppProvider from './context/PokemonContext';
import Navbar from './Navbar/Navbar';
// pages
import Home from './pages/Home/Home';

function App() {
  return (
    <AppProvider>
    <div className="App bg" >
      <Navbar />
      <Home />
    </div>
    </AppProvider>
  );
}

export default App;
