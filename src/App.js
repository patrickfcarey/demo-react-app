import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import routing components
import About from './About'; // Import the new page
import Contact from './Contact'; //Import contact
import Home from './Home'; //Import home
import './App.css';
import NavBar from './NavBar' //Import Navbar

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [newUserName, setNewUserName] = useState("");    // Input value

  const addUser = () => {
    if (newUserName.trim()) { // Only add if name isn’t empty
      const newUser = { id: users.length + 1, name: newUserName.trim() };
      setUsers([...users, newUser]);
      setNewUserName(""); // Reset input
      setIsModalOpen(false); // Close modal
    }
  };



    return (
    <div>
      {/* Navigation */}
      <nav>
        <NavBar />
      </nav>
      {/* Define Routes */}
      <Routes>
        <Route path="/"   element={
              <Home
              users={users}
              count={count}
              setCount={setCount}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              newUserName={newUserName}
              setNewUserName={setNewUserName}
              addUser={addUser}
              />
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;