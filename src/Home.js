import React, { useState } from 'react';
import Modal from './Modal';



function Home({users, count, setCount, isModalOpen, setIsModalOpen, newUserName, setNewUserName, addUser}){
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
            <button onClick={() => setIsModalOpen(true)}>Add User</button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                newUserName={newUserName}
                setNewUserName={setNewUserName}
                onAddUser={addUser}
            />
        </div>
    );
}

export default Home;