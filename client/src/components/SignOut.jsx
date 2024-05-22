import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignOut() {
    // Get the history object
    // const history = useHistory(); 
    const navigate = useNavigate();

    // // Define the handleClick function to navigate to a new route
    // const handleSignOut = () => {
    //     // history.push('/login'); // Navigates to login page after signing out
    //     localStorage.removeItem('jwt-token')
    //     navigate('/login')
    // };

   
    return (
        // <button onClick={handleSignOut}>
        //     Sign Out
        // </button>
        <div>
        <button onClick={() => { 
        localStorage.removeItem("jwt-token")
        navigate('/')
        className='block bg-green-300 rounded-full m-8 px-8 py-3 hover:bg-green-400'
        }}> Sign Out </button>
        </div>
    );
};

export default SignOut;

// https://tinyurl.com/26yqr9vk
