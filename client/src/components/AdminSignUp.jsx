import React from "react";
import JPLogo from "../images/JPLogo.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminSignUp({ setToken }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [employeeID, setEmployeeID] = useState("")
    const navigate = useNavigate()

    async function submitSignUp(event) {
        //stops page from reloading 
        event.preventDefault();
        //sends empolyeeID, password, and email to backend
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/user/signup`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                employeeID,
                email,
                password
            })
        });

        if (response.status === 200) {
            const body = await response.json();
            //save jwt to local storage
            localStorage.setItem("jwt-token", body.token);
            navigate("/")
            alert("New Admin User Created!")
            // setToken(body.token);
        } else {
            console.log(body.message);
        }

    }
    return (
        <div>
            <form className='h-screen flex flex-col items-center justify-center border rounded-none'>
                <h1 className="text-4xl font-semibold underline text-green-400">Admin Sign Up</h1>
                <input className="rounded py-2 px-4 border border-black" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Employee ID" type="number" onChange={(e) => setEmployeeID(e.target.value)}></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <a href="/adminLogin" className="block bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border-2 border-green-300 hover:border-transparent rounded">Sign Up</a>
                <p>Already have an account?</p>
                <a href="/adminLogin" className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border-2 border-green-300 hover:border-transparent rounded">Log In</a>
                <img src={JPLogo} alt="Juice Press Logo" width="10%" height="10%"></img>
            </form>
        </div>
    )
}