 import React, { useState, useEffect } from 'react';
 import gifImage from '../assets/X.gif';
 import { handleSubmit } from './Function';
 import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const squares = Array.from({ length: 400 }, (_, index) => index);
  ///if logging in/////////////////
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  })
  /////if new user/////////////////
  const [formData1, setFormData1] = useState({
    username:'',
    phone: '',
    account_number:'',
    password:'',
    confirm_password: '',
  })
    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isNewUser, setIsNewUser] = useState(false); // State to track if it's a new user
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    if (name !== undefined && name !== '' && isNewUser) {
      setFormData1((prevFormData) => ({
        ...prevFormData,
        [name]: newValue
      }));
    }
    else if (name !== undefined && name !== '' && !isNewUser) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: newValue
      }));
    }
    
  };

  const Submit = async (e) => {
    e.preventDefault();
    if (isNewUser && formData1.password !== formData1.confirm_password) {
      alert('Password and Confirm Password do not match');
      return; // Exit the function
  }
    const link =isNewUser? 'http://127.0.0.1:5000/newUser':'http://127.0.0.1:5000/login';
    const formVal= isNewUser?formData1:formData;
    handleSubmit(e,link,
      formVal,
      () => {
          console.log('// Success callback');
          navigate('/home'); // Assuming navigate is available here
      },
      (error) => {
          // Error callback
          alert('Error: ' + error.message);
      }
  );
  };
 

  const handleToggleUser = () => {
    setIsNewUser(!isNewUser); // Toggle between new user and existing user
  };

  return (
    <div style={{ minHeight: '100vh',color: scrolled ? 'black' : 'white' , backgroundColor: scrolled ? 'white' : 'black', transition: 'background-color 1s' }}>

      {scrolled ? 
      ( <div style={{ paddingTop:55, display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
      <div className="app-container">
        <div className="grid-container">
          {squares.map(square => (
            <div key={square} className="grid-square"></div>
          ))}
        </div>
   
        <div className={isNewUser ? "floating-login-form1" : "floating-login-form"}>
      <form onSubmit={Submit} >
        <h2>{isNewUser ? 'Register' : 'Login'}</h2>
        {isNewUser && <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={handleInputChange} required />
        </div>}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="phone" name="phone" onChange={handleInputChange} required />
        </div>
        {isNewUser && <div className="form-group">
          <label htmlFor="account_number">Bank Account Number</label>
          <input type="number" id="account_number" name="account_number" onChange={handleInputChange} required />
        </div>}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleInputChange} required />
        </div>
        {isNewUser && <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm_password" onChange={handleInputChange} required />
        </div>}
        <button type="submit">{isNewUser ? 'Register' : 'Login'}</button>
        <p className="toggle-user" onClick={handleToggleUser}>{isNewUser ? 'Already a user? Login here' : 'New user? Register here'}</p>
      </form>
    </div>
    </div>
      </div>
      <div style={{ flex: 1, backgroundColor: 'lightgreen' }}>Right Content</div>
    </div>) : 
      ( <div style={{display:"flex",height:"100vh"}}> 
           <div style={{ flex: 1, }}>
           <div style={{textAlign:"center",marginTop:50}}>
           <div class="container">
              <div class="light"></div>
              <div class="content">
                <h1>Hello, This is Xpay</h1><br/>
                <h5>A new generation Speech To Payment Website</h5>
              </div>
            </div>
            </div>
            <div style={{textAlign:"center",marginTop:20}} ><p>
               This is a Web app that uses a <strong style={{color:"orange"}}>Machine Learning model 
               (Random Forest Classifier)</strong> which is capable of understanding payment 
               instructions in various Indic languages (currently only in Hindi) and uses 
               <strong style={{color:"orange"}}>React Hook for Speech Recognition</strong>,<strong style={{color:"orange"}}>Flask Backend & MongoDB Atlas server</strong> and thus can make and receive payment
                on voice command in Hindi language.</p>
            </div>
      
            <div style={{textAlign:"center",marginTop:100}} >
              <p style={{marginTop:20}}> <strong>Details of Admin</strong></p>
              <p style={{marginTop:20}}> <strong>Name</strong>:</p>
              <p>Niraj Kumar</p>
              <p style={{marginTop:20}}> <strong>Institute</strong>:</p>
              <p>Indian Institute of Technology,<strong> (B.H.U) </strong>,Varanasi</p>
              <p style={{marginTop:20}}> <strong>Branch</strong>:</p>
              <p>Mechanical Engineering</p>
          </div>
          <p style={{marginTop:100}}> <strong>For more details scroll down and read in about section.</strong></p>
          
           </div>
           
           <div style={{ flex: 1}}>
              <div style={styles.youtubeShortsWindow}>
                <img src={gifImage} alt="YouTube Shorts" style={styles.gif} />
              </div>
           </div>
        </div>)
      }
 
  </div> 
    
  );
}
//
const styles = {
  youtubeShortsWindow: {
    width: '30%', // Adjust the width as needed
    height: '40%', // Adjust the height as needed
    borderRadius: '12px', // Adjust the border radius for smooth corners
    overflow: 'hidden', // Ensure the GIF stays within the window bounds
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Add a shadow effect
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Background color of the window
    marginLeft:"50%" ,
    marginTop:"25%"
  },
  gif: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px', // Match the border radius of the window
  }
};





export default Login;

{/* <h1 style={{ textAlign: 'center', paddingTop: '50vh', color: scrolled ? 'black' : 'white' }}> */}
{/* <div class="content">
<h1>Hello, This is Xpay</h1><br/>
<h5>A new generation Speech To Payment Website</h5>
</div> */}