import { useNavigate, Link } from "react-router-dom";
import "./styles/LogIn.css";
import React, { useState } from "react";
import JPLogo from '../images/JPLogo.png';


export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function sumbitSignIn(event) {
    event.preventDefault();
    const sumbit = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const body = await response.json();
    if (response.status === 200) {
      localStorage.setItem("jwt-token", body.token);
      setToken(body.token);
      navigate('/home')
    } else {
      console.log(body.message)
    }
  }
  return (
    <div>

      {/* displays the log in form  */}
      <form>
        <h1>Log In</h1>
        <input className="inputSize" placeholder='Email' type="email"></input>
        <input className="inputSize" placeholder='Password' type="password"></input>
        <button>Log In</button>
        <p>Don't have an account?</p>
        <button>Sign Up</button>
        <img src={JPLogo} alt="Juice Press Logo" width="30%" height="30%"></img>
      </form>

    </div>
  )
}