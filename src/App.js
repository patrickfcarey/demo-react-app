import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import routing components
import About from './About'; // Import the new page
import Contact from './Contact'; //Import contact
import Home from './Home'; //Import home
import './App.css';


function App() {
  

  return (
    <div>
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;