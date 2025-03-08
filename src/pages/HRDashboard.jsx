import React from 'react';
import { useNavigate } from 'react-router-dom';

function HRDashboard() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <div className="dashboard-container">
                <h2>Welcome HR</h2>
                <p>Manage candidates and streamline the hiring process.</p>

                <div className="button-container">
                    <button onClick={() => navigate('/hr/candidates')} className="role-btn">View Candidates</button>
                    <button onClick={() => navigate('/hr/track-status')} className="role-btn">Track Status</button>  {/* ✅ New Button */}
                </div>
            </div>
        </div>
    );
}

export default HRDashboard;
