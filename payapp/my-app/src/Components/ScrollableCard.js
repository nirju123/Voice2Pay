import React from 'react';
import '../App.css'; // Import CSS file for styling
import blueTick from '../assets/download.png'; // Import blue tick image
import bird from '../assets/bird2.png'; // Import blue tick image
import bheem from  '../assets/bheem.jpeg'; 
import motu from  '../assets/motu.jpeg'; 
import patlu from  '../assets/patlu.jpeg'; 
import tom from   '../assets/tom.png'; 
import jerry from   '../assets/jerry.png'; 


const ScrollableCard = ({ data }) => {
  return (
    <div className="card">
      <div className="tweet-container">
      {data.map((item,index) => (
        <div key={index} className="tweet-box" style={{display:"block"}} onClick={() => handleItemClick(item)}>
          <div style={{display:"flex"}}>
          <img src={motu} alt="Profile" className="profile-pic" />
          <div className="user-info" >
            <div className="username" >{item.username}{<img src={blueTick} alt="Blue Tick" className="verified" />}</div>
            <div className="username">{item.phone}@upi</div>
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
  );
};

export default ScrollableCard;
