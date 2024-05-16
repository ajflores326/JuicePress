import React from 'react';
import './styles/SignUp.css';
import JPLogo from './images/JPLogo.png';

export default function SignUp() {
    return (
        <div>
            
{/* displays the sign up form */}
                <form>
                    <h1>Sign Up</h1>
                    <input className="inputSize" placeholder='First Name'></input>
                    <input className="inputSize" placeholder='Last Name'></input>
                    <input className="inputSize" placeholder='Email' type='email'></input>
                    <input className="inputSize" placeholder='Password' type='password'></input>
                    <button>Sign Up</button>
                    <p>Already have an account?</p>
                    <button>Log In</button>
                    <img src={JPLogo} alt="Juice Press Logo" width="30%" height="30%"></img>
                </form>
        </div>
    )
}