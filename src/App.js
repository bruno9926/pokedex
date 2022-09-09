import React from 'react';
import './App.css';
import AppProvider from './context/PokemonContext';
import Navbar from './Navbar/Navbar';
import { PokedexLayout } from './PokedexLayout/PokedexLayout';
// pages
import Home from './pages/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Router>
        <PokedexLayout>
          <div className="App bg" >
            <Navbar></Navbar>
            <Home />
          </div>
        </PokedexLayout>
      </Router>
    </AppProvider>
    
  );
}

export default App;
