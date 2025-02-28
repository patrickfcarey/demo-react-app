import React from 'react';

function Modal({ isOpen, onClose, newUserName, setNewUserName, onAddUser }) {
  if (!isOpen) return null; // Don’t render if not open

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    onAddUser();
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="Enter user name"
                style={inputStyle}
            />
            <div style={buttonContainerStyle}>
                <button type="submit" style={buttonStyle}>Add</button>
                <button type="button" onClick={onClose} style={buttonStyle}>Cancel</button>
            </div>
        </form>
      </div>
    </div>
  );
}

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  width: '300px',
  textAlign: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '10px',
  boxSizing: 'border-box',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
};

const buttonStyle = {
  padding: '8px 16px',
};

export default Modal;