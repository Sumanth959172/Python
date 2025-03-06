import React from 'react';
import { useNavigate } from 'react-router-dom';

function HRDashboard() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Welcome HR</h2>
                <p>Manage candidates and streamline the hiring process.</p>
                <button onClick={() => navigate('/candidates')}>View Candidates</button>
            </div>
        </div>
    );
}

export default HRDashboard;
