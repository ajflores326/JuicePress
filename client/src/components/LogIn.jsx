import { useNavigate, Link } from "react-router-dom";
import "./styles/LogIn.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function sumbitSignIn(event) {
        event.preventDefault();
    }
    return (
        <div>
        <h2>Let's See What's Juicy!</h2>
       <form id='formbox'>
      
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
    <button>
      Log In
    </button>
  </form>
      </div>
    )
}