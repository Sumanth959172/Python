import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CandidateLogin() {
    const [loginID, setLoginID] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // ✅ Important for redirection

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/candidates/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ loginID, password })
        });

        const result = await response.json();

        if (response.ok) {
            // ✅ Navigate to Candidate Dashboard and pass candidate data
            navigate('/candidate/dashboard', { state: { candidate: result.candidate } });
        } else {
            setError(result.message || 'Login failed');
        }
    };

    return (
        <div className="page-container">
            <div className="login-container">
                <h2>Candidate Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Login ID"
                        value={loginID}
                        onChange={(e) => setLoginID(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}

export default CandidateLogin;
