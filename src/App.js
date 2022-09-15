import React from 'react';
import './App.css';
import AppProvider from './context/PokemonContext';
import { PokedexLayout } from './PokedexLayout/PokedexLayout';
// pages
import Home from './pages/Home/Home';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <AppProvider>
        <PokedexLayout>
          <div className="App bg" >
            <Router>
              <Routes>
                <Route path="/" element={<Navigate to='/home'/>}/>
                <Route path="*" element={<Navigate to='/home'/>}/>
                <Route path="/home" element={<Home />} />
                <Route path="/stats" element={<PokemonDetails />} />
              </Routes>
            </Router>
          </div>
        </PokedexLayout>
    </AppProvider>
    
  );
}

export default App;
