import React, { useState, useEffect } from 'react';
import blueTick from '../assets/download.png'; // Import blue tick image
import bird from '../assets/bird2.png'; // Import blue tick image
import motu from  '../assets/motu.jpeg'; 
import { Link, useNavigate } from 'react-router-dom';
import { handleSubmit1 , isLoggedIn } from './Function';

function Pay() {
    isLoggedIn();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cred: '',
        amount:'',
        password: '',
      })
      
    const userData = [
      { username: 'User1', cred: '123-456-7890' },
      { username: 'User2', cred: '987-654-3210' },
      { username: 'User3', cred: '456-789-0123' },
      { username: 'User1', cred: '123-456-7890' },
      { username: 'User2', cred: '987-654-3210' },
      { username: 'User3', cred: '456-789-0123' },
      { username: 'User1', cred: '123-456-7890' },
      { username: 'User2', cred: '987-654-3210' },
      { username: 'User3', cred: '456-789-0123' },
      { username: 'User1', cred: '123-456-7890' },
      { username: 'User2', cred: '987-654-3210' },
      { username: 'User3', cred: '456-789-0123' },
      { username: 'User1', cred: '123-456-7890' },
      { username: 'User2', cred: '987-654-3210' },
      { username: 'User3', cred: '456-789-0123' },
      { username: 'User1', cred: '123-456-7890' },
      { username: 'User2', cred: '987-654-3210' },
      { username: 'User3', cred: '456-789-0123' },
      // Add more user data as needed
    ];
  
  
    const handleItemClick = (item) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            cred: item.cred
        }));
    };
    
    const squares = Array.from({ length: 400 }, (_, index) => index);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        if (name !== undefined && name !== '') {
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue
          }));
        }
      };
  const Submit = async (e) => {
    e.preventDefault();
    const link = 'http://127.0.0.1:5000/pay';
    handleSubmit1(e,link,
      formData,
      () => {
          navigate('/home'); // Assuming navigate is available here
      },
      (error) => {
          alert('Error: ' + error.message);
      }
  );
  };


  return (
    <>
    <div class="light"style={{width:"100%",top:"6%",position:"sticky"}}></div>
    <div className="grid-container" >
      {squares.map(square => (<div key={square} className="grid-square1"></div> ))}
     </div>
      <div style={{display:"flex"}}>
      <div className="floating-login-form" >
      <form onSubmit={Submit}>
        <h2>Send Money</h2>
        <div className="form-group">
          <label htmlFor="detail">UPI ID/Phone No.</label>
          <input type="text" id="cred" name='cred' value={formData.cred}  onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleInputChange} required />
        </div>
        <button type="submit">Send</button>
     </form>
    </div>
    <div className="floating-login-form" style={{marginLeft:"50%"}}>
    <div className="card">
      <div className="tweet-container">
      {userData.map((item,index) => (
        <div key={index} className="tweet-box" style={{display:"block"}} onClick={() => handleItemClick(item)}>
          <div style={{display:"flex"}}>
          <img src={motu} alt="Profile" className="profile-pic" />
          <div className="user-info" >
            <div className="username" >{item.username}{<img src={blueTick} alt="Blue Tick" className="verified" />}</div>
            <div className="username">{item.cred}@upi</div>
         </div>
          </div>
        <div className="tweet-content">
            <p className="tweet-text">my name is {item.username} </p>
            <div className="tweet-icons">
            <img className='twitter-bird' src={bird} alt="Blue Bird" />
            </div>
        </div>
        </div>
      ))}
    </div>
    </div>
    </div>
      </div>
    </>
  )
}

export default Pay



