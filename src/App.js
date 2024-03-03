// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header.js';

import CategoryList from './components/CategoryList';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />


        <Header />
        <Header />
        
        <CategoryList />
        
      </div>
    </Router>
  );
}

export default App;
