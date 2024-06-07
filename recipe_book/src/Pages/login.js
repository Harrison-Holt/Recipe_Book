import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Example login logic
        if (username === 'admin' && password === 'password') {
            // Redirect to the homepage if login is successful
            navigate('/homepage');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <section className='login_container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username: </label>
                <input
                    type='text'
                    id='username'
                    value={username}
                    onChange={handleUsernameChange}
                    required
                /><br/><br/>
                <label htmlFor='password'>Password: </label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={handlePasswordChange}
                    required
                /><br/><br/>
                <button type='submit'>Login</button>
            </form>
        </section>
    );
}

export default Login;
