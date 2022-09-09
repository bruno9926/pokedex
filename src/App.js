import React from 'react';
import './App.css';
import AppProvider from './context/PokemonContext';
import { PokedexLayout } from './PokedexLayout/PokedexLayout';
// pages
import Home from './pages/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <AppProvider>
        <PokedexLayout>
          <div className="App bg" >
            <Router>
              <Routes>
                <Route path="/home" element={<Home />} />
              </Routes>
            </Router>
          </div>
        </PokedexLayout>
    </AppProvider>
    
  );
}

export default App;
