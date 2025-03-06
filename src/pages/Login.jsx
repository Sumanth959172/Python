import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [showRoles, setShowRoles] = useState(false);
    const navigate = useNavigate();

    const goToHRLogin = () => {
        navigate('/login/hr');  // Existing working part
    };

    const goToCandidateLogin = () => {  // ✅ New handler
        navigate('/login/candidate');
    };

    return (
        <div className="page-container">
            <div className="login-container">
                <h2>Login</h2>

                {!showRoles ? (
                    <>
                        <p>Please choose your role to continue:</p>
                        <button onClick={() => setShowRoles(true)}>Login</button>
                    </>
                ) : (
                    <>
                        <p>Select your login type:</p>
                        <div className="role-buttons">
                            <button onClick={goToHRLogin}>HR Login</button>
                            <button>Hiring Manager Login</button>
                            <button onClick={goToCandidateLogin}>Candidate Login</button>  {/* 🔥 New navigation added */}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
