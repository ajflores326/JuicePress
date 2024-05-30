
import React from 'react';

export default function Profile() {
    return (
        <div>
            {/* a possible photo icon  */}
            <input placeholder='First Name'>First Name:</input>
            <input placeholder='Last Name'>Last Name:</input>
            <input placeholder='Empolyee ID'> Empolyee ID:</input>
            {/* email field is only for admin account */}
            <input placeholder='Email'>Email:</input>
            <input placeholder='Position'>Position:</input>
            <input placeholder='Store Number'>Store Number:</input>
            <input placeholder='Date of Birth'>Date of Birth:</input>
        </div>
    )
}