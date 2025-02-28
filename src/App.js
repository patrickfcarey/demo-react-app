import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import routing components
import About from './About'; // Import the new page
import Contact from './Contact'; //Import contact
import Home from './Home'; //Import home
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]);

  console.log("users in App:", users); // Should log an array

  const addUser = () => {
    const newUser = { id: users.length + 1, name: "New User" };
    setUsers([...users, newUser]);
  };


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
        <Route path="/"   element={<Home users={users} addUser={addUser} count={count} setCount={setCount} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;