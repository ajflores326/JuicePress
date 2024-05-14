import { useNavigate, Link } from "react-router-dom";
import "./styles/LogIn.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <h2>Let's See What's Juicy!</h2>
        <form id='formbox'>
       
       <input
         id="exampleEmail"
         name="email"
         placeholder="Email"
         type="email"
       />
     
     {' '}
     
       <input
         id="examplePassword"
         name="password"
         placeholder="Password"
         type="password"
       />
     
     {' '}
     <button type="sumbit">
       Log In
     </button>
     <p>Don't have an account?</p>
     <button type="sumbit">Sign Up</button>
     {/* <Link to="/" className="signup">Sign Up</Link> */}
   </form>
       </div>
    )
}