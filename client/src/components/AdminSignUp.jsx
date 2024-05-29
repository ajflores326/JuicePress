import React from "react";
import JPLogo from "../images/JPLogo.png";

export default function AdminSignUp() {
    return (
        <div>
            <form className='h-screen flex flex-col items-center justify-center border rounded-none'>
                <h1 className="text-4xl font-semibold underline text-green-400">Admin Sign Up</h1>
                <input className="rounded py-2 px-4 border border-black" placeholder="First Name"></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Last Name"></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Employee ID" type="number"></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Email" type="email"></input>
                <input className="rounded py-2 px-4 border border-black" placeholder="Password" type="password"></input>
                <a href="/adminLogin" className="block bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border-2 border-green-300 hover:border-transparent rounded">Sign Up</a>
                <p>Already have an account?</p>
                <a href="/adminLogin" className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border-2 border-green-300 hover:border-transparent rounded">Log In</a>
                <img src={JPLogo} alt="Juice Press Logo" width="10%" height="10%"></img>
            </form>
        </div>
    )
}