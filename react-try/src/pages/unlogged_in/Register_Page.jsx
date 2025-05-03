import React, { useState } from 'react';

export default function Register_Page(){

    const [username, set_username] = useState('');
    

    const handle_submit = (e) =>{
        e.preventDefault();

    }

    return (
        <>
            <h1>Register Page</h1>
            <form>
                <label>Username</label>
                <br/>
                <input type = "text" name = "username"/>
                <br/>
                <label>Email</label>
                <br/>
                <input type = "email" name = "email"/>
                <br/>
                <label>Password</label>
                <br/>
                <input type = "password" name = "password"/>
                <br/>
                <button>Submit</button>
            </form>
        </>

    );
}