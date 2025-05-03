import React, { useState } from 'react';

export default function Login_Page(){
    const [username_email, set_username_Email] = useState('');
    const [password, set_password] = useState('');
    const [password_reveal, set_password_reveal] = useState(false);

    const handle_submit = (e) => {
        e.preventDefault();

        //Input handling goes here--------
        console.log("Logged in.");
        console.log(`Username/Email is ${username_email}`);
        console.log(`Password is ${password}`);
    }


    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit = {handle_submit}>
                <label>Username or Email</label>
                <br/>
                <input 
                    type = "text" 
                    name = "username_email" 
                    value = {username_email} 
                    onChange = {(e) => set_username_Email(e.target.value)}
                />
                <br/>
                <label>Password</label>
                <br/>
                <input 
                    type = {password_reveal ? "text" : "password"}
                    name = "password"
                    value = {password}
                    onChange = {(e) => set_password(e.target.value)}
                />
                <button
                    type = "button"
                    onClick = {() => set_password_reveal(!password_reveal)}    
                >
                    {password_reveal ? "Hide" : "Reveal"}
                </button>
                <br/>
                <button>Submit</button>
            </form>
        </>
        
    );
}