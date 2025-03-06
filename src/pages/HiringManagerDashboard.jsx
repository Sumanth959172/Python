import React from 'react';
import { useLocation } from 'react-router-dom';

function HiringManagerDashboard() {
    const location = useLocation();
    const manager = location.state?.manager;

    if (!manager) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    return (
        <div className="page-container">
            <h2>Welcome, {manager.name}!</h2>
            <p>This will be your Hiring Manager Dashboard.</p>
        </div>
    );
}

export default HiringManagerDashboard;
