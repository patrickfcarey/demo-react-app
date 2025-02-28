import React, { useState } from 'react';



function Home({users, addUser, count, setCount}){
    console.log("Home users:", users); // Expect: [{ id: 1, name: "Alice" }, ...]


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

export default Home;