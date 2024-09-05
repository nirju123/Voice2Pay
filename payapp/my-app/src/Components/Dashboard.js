import React, { useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {  useNavigate } from 'react-router-dom';
import qr from  '../assets/qr.png'; 
import contact from  '../assets/contact.png'; 
import phone from   '../assets/ticket.png'; 
import bank1 from   '../assets/bank.png'; 
import upi from '../assets/upi.png'; // Import blue tick image
import bills from '../assets/bills1.png'; // Import blue tick image
import recharge from  '../assets/recharge.png'; 
import stocks from  '../assets/stocks.png';

const Button = ({ onClick, image, buttonText }) => (
  <div style={{ textAlign: 'center' ,margin:"7%"}}>
    <button onClick={onClick} style={{ background: `url(${image}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' ,width: '50px', height: '50px', borderRadius:"50%" }}></button>
    <div>{buttonText}</div>
  </div>
);


function Dashboard() {
  const navigate = useNavigate();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const squares = Array.from({ length: 400 }, (_, index) => index);
  function Fun1() {
    setIsListening(true)
    SpeechRecognition.startListening({ continuous: true, language: "hi" });
  
  }
  function Fun2() {
    SpeechRecognition.stopListening();
    setIsListening(false)
    send();
  }
  const send = async (event) => {
    const response = await fetch('http://127.0.0.1:5000/talk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transcript)
    })
      .then(response => {
        if (response.status===200) {
          setTimeout(() => {
          }, 2000);  
          return response.json();
        } else {
          throw new Error( 'Unable To Connect to Server');
        }
      })
      .then(data => {
        console.log('Response from backend:', data);
        if(data === 1){  navigate('/pay');}
        else if(data === 2){  navigate('/get');}
        resetTranscript();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error: ' + error.message);
        resetTranscript();
      });
  };
   
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (
    <div >
    <div class="light"style={{width:"100%",top:"6%",position:"sticky"}}></div>
    <div className="grid-container" >
      {squares.map(square => (<div key={square} className="grid-square1"></div> ))}
     </div>
  
      <div className="container2" style={{top:"25%"}}>
        <div style={{display:"flex"}}>
        <Button image={qr} onClick={() => console.log('Button 1 clicked')} buttonText="Scan QR"/>
        <Button image={contact} onClick={() => navigate('/pay')} buttonText="Pay Phone number"/>
        <Button image={upi} onClick={() => navigate('/pay')} buttonText="Pay UPI ID "/>
        <Button image={bank1} onClick={() => navigate('/get')} buttonText="Get Payment"/>
        </div>
        <div style={{display:"flex"}}>
        <Button image={phone} onClick={() => console.log('Button 3 clicked')} buttonText="Book Tickets" />
        <Button image={bills} onClick={() => console.log('Button 2 clicked')} buttonText="Pay Bills"/>
        <Button image={recharge} onClick={() => console.log('Button 3 clicked')} buttonText="Recharges" />
        <Button image={stocks} onClick={() => console.log('Button 3 clicked')} buttonText="Balance"/>
        </div>
      </div>
      <div className="container2" style={{top:"65%"}}>
  <div style={{ minHeight: "240px",padding:"25px" }}>{transcript}</div>
  <div className="btn_Style" style={{ display: "flex", justifyContent: "center", gap: "1rem"}}>
    <button onClick={Fun1} style={{width:"40%", background: isListening ? '#CCCCCC' : '#000000', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px'}}>Start Listening</button>
    <button onClick={Fun2} style={{width:"40%", background: '#000000', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px'}}>Stop Listening</button> 
  </div>
</div>
  </div>
  )
}

export default Dashboard