import { useNavigate } from "react-router-dom";
// import "./styles/LogIn.css";
import React, { useState } from "react";
import JPLogo from '../images/JPLogo.png';
import GreenJuice from '../images/GreenJuice.jpg'



export default function LogIn() {
  const [employeeID, setEmployeeID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submitSignIn(event) {
    event.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}user/login`, {
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
    } else {
      navigate('/signup')
      alert("ID and/or password not found! Please sign up for an account.")
    }
  }
  return (
    <form className="h-screen flex flex-col items-center justify-center border rounded-none space-y-6" onSubmit={submitSignIn}>
    <h1 className="text-4xl font-semibold underline">Log In</h1>
    <input className="input input-bordered input-primary w-full max-w-xs" placeholder="Employee ID" type="number" onChange={(e) => setEmployeeID(e.target.value)}></input>
    <input className="input input-bordered input-secondary w-full max-w-xs" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
    <button className="btn bg-accent text-black hover:bg-secondary" type = "Submit">Log In</button>
    <p>Don't have an account?</p>
    <a href = "/signup" className="btn bg-accent text-black hover:bg-secondary"> Sign Up</a>
    <p>Have a Juice Press Email?</p>
    <a href = "/adminLogin" className="btn bg-accent text-black hover:bg-secondary">Click Here</a>
    <img src={JPLogo} alt="Juice Press Logo" width="10%" height="10%"></img>
    </form>
  )
}

