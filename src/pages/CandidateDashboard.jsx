import React from 'react';
import { useLocation } from 'react-router-dom';

function CandidateDashboard() {
    const location = useLocation();
    const candidate = location.state?.candidate;

    if (!candidate) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Welcome, {candidate.name}!</h2>
                <p>This is your personalized candidate dashboard.</p>
            </div>
        </div>
    );
}

export default CandidateDashboard;
