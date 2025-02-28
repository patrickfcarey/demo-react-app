import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]);

  const addUser = () => {
    const newUser = { id: users.length + 1, name: "New User" };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(0)}>Reset</button><nl></nl>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <br></br>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <br></br>
      <button onClick={addUser}>Add User</button>

    </div>
  );
}

export default App;