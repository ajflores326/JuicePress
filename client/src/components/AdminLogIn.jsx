import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import JPLogo from "../images/JPLogo.png";

export default function AdminLogIn() {
    const [employeeID, setEmployeeID] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submitLogIn(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/user/adminLogin", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                employeeID,
                email,
                password
            })
        });

        if (response.status === 200) {
            const body = await response.json();
            localStorage.setItem("jwt-token", body.token);
            navigate('/home');
        } else {
            navigate('/adminSignup');
            alert("ID, email and/or password not found! Please sign up for an account.")
        }
    }

    return (
        <div>
            <form className="h-screen flex flex-col items-center justify-center border rounded-none" onSubmit={submitLogIn}>
                <h1 className="text-4xl font-semibold underline text-green-400">Admin Log In</h1>
                <input className="rounded py-2 px-4 border border-black" placeholder="Employee ID" type="number" onChange={(e) => setEmployeeID(e.target.value)}></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border-2 border-green-300 hover:border-transparent rounded" type="Submit">Log In</button>
                <p>Don't have an account?</p>
                <a href="/adminSignup" className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border-2 border-green-300 hover:border-transparent rounded"> Sign Up</a>
                <img src={JPLogo} alt="Juice Press Logo" width="10%" height="10%"></img>
            </form>
        </div>
    )
}