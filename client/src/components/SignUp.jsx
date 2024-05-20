import React from 'react';
import './styles/SignUp.css';
import JPLogo from '../images/JPLogo.png';

export default function SignUp() {
    return (
        <div>
            
{/* displays the sign up form */}
<form>
          <h1 className="text-4xl font-semibold underline text-green-400">Sign Up</h1>
          <input className="rounded" placeholder="First Name"></input>
          <input className="rounded" placeholder="Last Name"></input>
          <input className="rounded" placeholder="Empolyee ID" type="number"></input>
          <input className="rounded" placeholder="Password" type="password"></input>
          <button className="block bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Sign Up</button>
          <p>Already have an account?</p>
          <button className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Log In</button>


          <img src={JPLogo} alt="Juice Press Logo" width="30%" height="30%"></img>
        </form>
        </div>
    )
}