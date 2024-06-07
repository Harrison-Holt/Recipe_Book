import React, { useState } from 'react'; 

import './register.css'; 

function register() {

    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [email, setEmail] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault(); 

    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value); 
    }; 

    const handlePasswordChange = (event) => {
        setPassword(event.target.value); 
    }; 

    const  handleEmailChange = (event) => {
        setEmail(event.target.value); 
    }; 
    return (
        <body>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Enter an Username: </label>
                <input type='text' id='username' value={username} onChange={handleUsernameChange} required/><br/><br/>
                <label htmlFor='password'>Enter a password: </label>
                <input type='password' id='password' value={password} onChange={handlePasswordChange} required/><br/><br/>
                <label htmlFor='email'>Enter an Email: </label>
                <input type='text' id='email' value={email} onChange={handleEmailChange} required/><br/><br/>
                <button type='submit'>Register</button>
            </form>
        </body>
    ); 
}

export default register; 