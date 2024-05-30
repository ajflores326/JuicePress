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
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/adminLogin`, {
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
            localStorage.setItem("jwt-tokenAdmin", body.tokenAdmin);
            navigate('/home');
        } else {
            navigate('/adminSignup');
            alert("ID, email and/or password not found! Please sign up for an account.")
        }
    }

    return (
        <div>
            <form className="h-screen flex flex-col items-center justify-center border rounded-none space-y-7" onSubmit={submitLogIn}>
                <h1 className="text-4xl font-semibold underline">Admin Log In</h1>
                <input className="rounded py-2 px-4 border border-black" placeholder="Employee ID" type="number" onChange={(e) => setEmployeeID(e.target.value)}></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className="btn btn-outline" type="Submit">Log In</button>
                <p>Don't have an account?</p>
                <a href="/adminSignup" className="btn btn-outline"> Sign Up</a>
                <img src={JPLogo} alt="Juice Press Logo" width="10%" height="10%"></img>
            </form>
        </div>
    )
}