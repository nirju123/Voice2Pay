import React, { useState, useEffect } from 'react';
import QRCode from "react-qr-code";

function Get() {
    const [isNewUser, setIsNewUser] = useState(false); // State to track if it's a new user
    const squares = Array.from({ length: 400 }, (_, index) => index);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };
  return (
    <>
    <div class="light"style={{width:"100%",top:"6%",position:"sticky"}}></div>
    <div className="grid-container" >
      {squares.map(square => (<div key={square} className="grid-square1"></div> ))}
     </div>
      <div className="container2" style={{top:"50%",padding:"25px"}}>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
            <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value="paste your url"
            viewBox={`0 0 256 256`}
            />
        </div>
        <div style={{display:'flex',justifyContent:'center' ,marginTop:'25px' }}><h4>UPI ID:9661043440@upi</h4></div>
        <div style={{display:'flex',justifyContent:'center' ,marginTop:'25px' }}><h4>Bank Account Number:9661</h4></div>
        <div style={{display:'flex',justifyContent:'center' ,marginTop:'25px' }}><h4>IFSC Number:999</h4></div>
        <div style={{display:'flex',justifyContent:'center' ,marginTop:'25px' }}><h4>Phone Number:9661043440</h4></div>
  
    </div>
    </>
  )
}

export default Get