import React, { useState } from 'react';

function UserDetailsForm() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const items = [
    { id: 1, username: 'User1', phoneNumber: '123-456-7890' },
    { id: 2, username: 'User2', phoneNumber: '987-654-3210' },
    { id: 3, username: 'User3', phoneNumber: '555-555-5555' },
    { id: 1, username: 'User1', phoneNumber: '123-456-7890' },
    { id: 2, username: 'User2', phoneNumber: '987-654-3210' },
    { id: 3, username: 'User3', phoneNumber: '555-555-5555' },
    { id: 1, username: 'User1', phoneNumber: '123-456-7890' },
    { id: 2, username: 'User2', phoneNumber: '987-654-3210' },
    { id: 3, username: 'User3', phoneNumber: '555-555-5555' },
    // Add more items as needed
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setUsername(item.username);
    setPhoneNumber(item.phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Username:', username);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flex: 1, marginRight: '20px', overflowY: 'auto' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              cursor: 'pointer',
              marginBottom: '10px',
              padding: '10px',
              border: selectedItem === item ? '1px solid blue' : '1px solid transparent',
              borderRadius: '5px',
              backgroundColor: selectedItem === item ? '#f0f0f0' : 'transparent',
            }}
            onClick={() => handleItemClick(item)}
          >
            <div>Username: {item.username}</div>
            <div>Phone Number: {item.phoneNumber}</div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
          <h2>User Details Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsForm;
