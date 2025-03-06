import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HiringManagerLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/hiring-managers/login', { email, password });
            alert('Login Successful');
            navigate('/hiring-manager/dashboard', { state: { manager: response.data.manager } });
        } catch (err) {
            alert('Login Failed. Please check your credentials.');
        }
    };

    return (
        <div className="page-container">
            <div className="login-container">
                <h2>Hiring Manager Login</h2>
                <input type="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default HiringManagerLogin;
