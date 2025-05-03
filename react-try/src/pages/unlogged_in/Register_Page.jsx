import React, { useState } from 'react';

export default function Register_Page(){

    const [username, set_username] = useState('');
    const [email, set_email] = useState('');
    const [password, set_password] = useState('');
    const [password_reveal, set_password_reveal] = useState(false);

    const handle_submit = (e) =>{
        e.preventDefault();

        //Input handling goes here--------
        console.log("Registered.");
        console.log(`Username is ${username}`);
        console.log(`Email is ${email}`);
        console.log(`Password is ${password}`);
    }

    return (
        <>
            <h1>Register Page</h1>
            <form onSubmit={handle_submit}>
                <label>Username</label>
                <br/>
                <input 
                    type = "text" 
                    name = "username"
                    value = {username}
                    onChange = {(e) => set_username(e.target.value)}
                />
                <br/>
                <label>Email</label>
                <br/>
                <input 
                    type = "email" 
                    name = "email"
                    value = {email}
                    onChange = {(e) => set_email(e.target.value)}
                />
                <br/>
                <label>Password</label>
                <br/>
                <input 
                    type = {password_reveal ? "text" : "password"}
                    name = "password"
                    value={password}
                    onChange = {(e) => set_password(e.target.value)}
                />
                
                <button 
                    type = "button"
                    onClick = {() => set_password_reveal(!password_reveal)}
                >
                    {password_reveal ? "Hide" : "Reveal"}
                </button>
                <br/>
                <button type = "submit">Submit</button>
            </form>
        </>

    );
}