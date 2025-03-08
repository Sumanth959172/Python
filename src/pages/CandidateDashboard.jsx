import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CandidateDashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const candidate = location.state?.candidate;

    if (!candidate) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    const handleTakeTest = () => {
        navigate('/candidate/instructions', { state: { candidate } });
    };

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Welcome, {candidate.name}!</h2>
                <p>This is your personalized candidate dashboard.</p>
                <button onClick={handleTakeTest} style={buttonStyle}>Take Test</button>
            </div>
        </div>
    );
}

const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    background: 'linear-gradient(to right, #ff512f, #dd2476)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px'
};

export default CandidateDashboard;
