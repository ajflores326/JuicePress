
import React from 'react';
import { useState, useEffect } from 'react';
import user from '../../../server/models/user';
import admin from '../../../server/models/admin';
import { useNavigate } from "react-router-dom";
import juice from '../images/GreenJuice.jpg'

export default function Profile() {
    const [token, setToken] = useState(localStorage.getItem("jwt-tokenAdmin"));
    const [user, setUser] = useState("")
    const [admin, setAdmin] = useState("")
    const navigate = useNavigate()

    function navigateBack() {
        navigate('/home')
    }

    async function getUsername() {

        //using fetch to obtain user last name and first name from database
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/user/username`, {
          method: "GET",
          headers: {
            "authorization": localStorage.getItem("jwt-token")
            
          },
    
        });
    
        //getting user object
        if (response.status === 200) {
          const body = await response.json();
          setUser(body)
    
        } else {
          console.log("error");
        }
      }
    
      //once user is logged in first and last name of user will be displayed on home pg
      useEffect(() => {
        getUsername()
      }, [])
    
      async function getAdminUsername() {
    
        //using fetch to obtain user last name and first name from database
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/adminUsername`, {
          method: "GET",
          headers: {
            "authorization": localStorage.getItem("jwt-tokenAdmin")
            
          },
    
        });
    
        //getting user object
        if (response.status === 200) {
          const body = await response.json();
          setAdmin(body)
    
        } else {
          console.log("error");
        }
      }
    
      //once user is logged in first and last name of user will be displayed on home pg
      useEffect(() => {
        getAdminUsername()
      }, [])
    
    return (
        <div>
        <button className='flex justify-left p-5 m-10 py-4 btn rounded-full bg-primary hover:bg-secondary' onClick = {() => navigateBack()}> BACK </button>
        {/* <img className = "flex justify-left m-10" src = {juice} /> */}
        {/* <h1 className = "flex justify-left p-20"> PICTURE PLACEHOLDER </h1> */}
     {token ?
        <h1 className="flex justify-center p-5 font-bold text-2xl text-violet-600 tracking-wider">"{admin.firstName} {admin.lastName}, Welcome to your profile!"</h1>
        :<h1 className="flex justify-center p-5 font-bold text-2xl text-violet-600 tracking-wider">"{user.firstName} {user.lastName},  Welcome to your profile!!"</h1>}
        <img className = "flex justify-left m-10" src = {juice} />
    {token ? 
        <h1 className = "flex justify-left p-5 font-bold text-2xl text-violet-600 tracking-wider">Employee ID: {admin.employeeID} </h1>
        : <h1 className="flex justify-left p-5 font-bold text-2xl text-violet-600 tracking-wider">Employee ID: {user.employeeID} </h1> }
           {token ? 
        <h1 className = "flex justify-left p-5 font-bold text-2xl text-violet-600 tracking-wider">Email: {admin.email} </h1>
        : ""}
        <h1 className = "flex justify-left p-5 font-bold text-2xl text-primary tracking-wider"> Position: </h1>
        <h1 className = "flex justify-left p-5 font-bold text-2xl text-secondary tracking-wider"> Store Number: </h1>
       
        </div>
        
        
    )
}