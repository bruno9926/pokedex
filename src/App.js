import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
// pages
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App bg" >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
