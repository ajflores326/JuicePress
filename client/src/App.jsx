// import React, { useState } from 'react'
// import './App.css'

import "./components/styles/LogIn.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import JPLogo from './images/JPLogo.png';

function App() {
 

  return (
   
      <div>

        
       <form id='formbox'>
       <h2>Let's See What's Juicy!</h2>
      <input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
    
    {' '}
    
      <input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
    
    {' '}
    <button type="sumbit">
      Log In
    </button>
    <p>Don't have an account?</p>
    <button>Sign Up</button>
    <img src={JPLogo} alt="Juice Press Logo" width="45%" height="45%"></img>
    {/* <Link to="/" className="signup">Sign Up</Link> */}
  </form>
 
      </div>
  )
}

export default App
