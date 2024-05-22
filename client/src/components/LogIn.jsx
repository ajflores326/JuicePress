import { useNavigate, Link } from "react-router-dom";
import "./styles/LogIn.css";
import React, { useState } from "react";
import JPLogo from '../images/JPLogo.png';


export default function LogIn() {
  const [employeeID, setEmployeeID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submitSignIn(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        employeeID,
        password
      })
    });

    if (response.status === 200) {
      const body = await response.json();
      localStorage.setItem("jwt-token", body.token);
      // setToken(body.token);
      navigate('/home')
      console.log(body.message)
    } else {
      const body = await response.json();
      navigate('/home')
      console.log(body.message)
    }
  }
  return (
    <form onSubmit={submitSignIn}>
    <h1 className="text-4xl font-semibold underline text-green-400">Log In</h1>
    <input className="rounded" placeholder="Employee ID" type="number" onChange={(e) => setEmployeeID(e.target.value)}></input>
    <input className="rounded" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
    <button className="block bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded" type = "Submit">Log In</button>
    <p>Don't have an account?</p>
    <a href = "/signup" className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded"> Sign Up</a>
    <p>Have a Juice Press Email?</p>
    <a href = "" className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Click Here</a>
    <img src={JPLogo} alt="Juice Press Logo" width="30%" height="30%"></img>
    
    </form>
  )
}