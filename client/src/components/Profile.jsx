
import React from 'react';
import { useState, useEffect } from 'react';
import user from '../../../server/models/user';
import admin from '../../../server/models/admin';
import { useNavigate } from "react-router-dom";
import juice from '../images/GreenJuice.jpg';
import profile from '../images/Profile.png';
import JPLogo from '../images/JPLogo.png';
import SignOut from './SignOut';

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

            {/* profile header title */}
            <div className='flex justify-center text-4xl mt-7'>
                <h1 className='block font-bold'>Profile</h1>
            </div>

            {/* navigation bar */}
            <div className="content relative">
        <nav className='flex flex-col nav1 font-semibold bg-accent py-80 space-y-12' style={{ position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)' }}>

        <div className='flex-row'>
          <img src={JPLogo} style={{ position: 'fixed', left: 9, top: '23%',  transform: 'translateY(-50%)' }} alt="Juice Press Logo" width="90%" height="90%"></img>
        </div>

            <button onClick={()=> navigateBack()} className='block btn rounded-full bg-primary hover:bg-secondary px-20 outline outline-offset-1 outline-black'>Home</button>
            <button className='block btn rounded-full bg-primary hover:bg-secondary outline outline-offset-1 outline-black'>Slack</button>
            <SignOut></SignOut>
          </nav>
        </div>

            {/* profile pic box with general info */}
            <div className='flex flex-row justify-center'>

                <div className='flex flex-col border-1 rounded-lg shadow-lg shadow-gray-400 h-full px-6'>
                    <div className="avatar">
                        <div className="w-32 rounded-full ml-36 mt-5">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        
                        <div className='flex justify-center py-7'>
                        <label className='font-semibold text-2xl'>Name:</label>
                        <h1 className='text-2xl'>{admin.firstName} {admin.lastName}</h1>
                        </div>
                        
                        <div className='flex justify-center'>
                        <label className='font-semibold text-2xl'>Position:</label>
                        <h1 className='block text-2xl'>Store Manager</h1>
                        </div>
                        
                        <div className='flex justify-center p-7'>
                        <label className='font-semibold text-2xl'>Location:</label>
                        <h1 className='block text-2xl'>New York, New York City</h1>
                        </div>
                        
                        </div>
                </div>

                {/* <button className='flex justify-left p-5 m-10 py-4 btn rounded-full bg-primary hover:bg-secondary' onClick={() => navigateBack()}> BACK </button> */}
                {/* <img className = "flex justify-left m-10" src = {juice} /> */}
                {/* <h1 className = "flex justify-left p-20"> PICTURE PLACEHOLDER </h1> */}
                {/* {token ?
                    <h1 className="flex justify-center p-5 font-bold text-2xl text-violet-600 tracking-wider">"{admin.firstName} {admin.lastName}, Welcome to your profile!"</h1>
                    : <h1 className="flex justify-center p-5 font-bold text-2xl text-violet-600 tracking-wider">"{user.firstName} {user.lastName},  Welcome to your profile!!"</h1>} */}
                {/* <img className="flex justify-left m-10" src={juice} />
            {token ?
                <h1 className="flex justify-left p-5 font-bold text-2xl text-violet-600 tracking-wider">Employee ID: {admin.employeeID} </h1>
                : <h1 className="flex justify-left p-5 font-bold text-2xl text-violet-600 tracking-wider">Employee ID: {user.employeeID} </h1>}
            {token ?
                <h1 className="flex justify-left p-5 font-bold text-2xl text-violet-600 tracking-wider">Email: {admin.email} </h1>
                : ""}
            <h1 className="flex justify-left p-5 font-bold text-2xl text-primary tracking-wider"> Position: </h1>
            <h1 className="flex justify-left p-5 font-bold text-2xl text-secondary tracking-wider"> Store Number: </h1> */}

                {/* add a password field  */}
                {/* profile update form box */}
                <div>
                    <form className='flex flex-col order-1 rounded-lg shadow-lg shadow-gray-400 m-5 pt-7 h-full'>
                        <label className='font-semibold'>First name:</label>
                        <input className='block border-2 rounded-lg border-gray-400' placeholder={admin.firstName} type="text" />
                        <label className='font-semibold'>Last name:</label>
                        <input className='block border-2 rounded-lg border-gray-400' placeholder={admin.lastName} type="text" />
                        <label className='font-semibold'>Empolyee ID:</label>
                        <input className='block border-2 rounded-lg border-gray-400' placeholder={admin.employeeID}></input>
                        <label className='font-semibold'>Email:</label>
                        <input className='block border-2 rounded-lg border-gray-400' placeholder={admin.email}></input>
                        <label className='font-semibold'>Update Password:</label>
                        <input className='block border-2 rounded-lg border-gray-400'></input>
                        <label className='font-semibold'>Position:</label>
                        <input className='block border-2 rounded-lg border-gray-400'></input>
                        <label className='font-semibold'>Store Location:</label>
                        <input className='block border-2 rounded-lg border-gray-400'></input>
                        <button className='btn rounded-full bg-accent hover:bg-primary mt-4'>Submit</button>
                    </form>


                </div>

            </div>

        </div>


    )
}