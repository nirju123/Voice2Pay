import React from 'react';
import '../App.css'; // Import CSS file for styling
import blueTick from '../assets/download.png'; // Import blue tick image
import bird from '../assets/bird2.png'; // Import blue tick image
import bheem from  '../assets/bheem.jpeg'; 
import motu from  '../assets/motu.jpeg'; 
import patlu from  '../assets/patlu.jpeg'; 
import tom from   '../assets/tom.png'; 
import jerry from   '../assets/jerry.png'; 


function Test() {
  const tweets = [
    {
      id: 1,
      username: 'motu',
      verified: true,
      profilePic: motu, // Example placeholder image
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      username: 'patlu',
      verified: true,
      profilePic: patlu, // Example placeholder image
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      username: 'tom',
      verified: true,
      profilePic: tom, // Example placeholder image
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 4,
        username: 'jerry',
        verified: true,
        profilePic: jerry, // Example placeholder image
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 5,
        username: 'bheem',
        verified: true,
        profilePic: bheem, // Example placeholder image
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
  ];

  return (
    <div className="tweet-container">
      {tweets.map((tweet) => (
        <div key={tweet.id} className="tweet-box">
          <img src={tweet.profilePic} alt="Profile" className="profile-pic" />
          <div className="tweet-content">
            <div className="user-info">
            <div className="username">{tweet.username}{tweet.verified && <img src={blueTick} alt="Blue Tick" className="verified" />}</div>
            <div className="username">@{tweet.username}{tweet.id}</div>
            </div>
            <p className="tweet-text">{tweet.text}</p>
            <div className="tweet-icons">
             <img className='twitter-bird' src={bird} alt="Blue Bird" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Test;
