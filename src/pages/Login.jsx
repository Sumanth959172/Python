import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [showRoles, setShowRoles] = useState(false);
    const navigate = useNavigate();

    const goToHRLogin = () => {
        navigate('/login/hr');  // Existing working part
    };

    const goToCandidateLogin = () => {
        navigate('/login/candidate');  // Existing Candidate Navigation
    };

    const goToHiringManagerLogin = () => {   // ✅ New handler added
        navigate('/login/hiring-manager');
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
                            <button onClick={goToHiringManagerLogin}>Hiring Manager Login</button>  {/* ✅ Added */}
                            <button onClick={goToCandidateLogin}>Candidate Login</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
