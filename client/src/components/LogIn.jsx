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
          <h1 className="text-4xl font-semibold underline text-green-400">Log In</h1>
          <input className="rounded" placeholder="Empolyee ID" type="number"></input>
          <input className="rounded" placeholder="Password" type="password"></input>
          <button className="block bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Log In</button>
          <p>Don't have an account?</p>
          <button className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Sign Up</button>
          <img src={JPLogo} alt="Juice Press Logo" width="30%" height="30%"></img>
        </form>

    </div>
  )
}