import React from 'react';
import { useNavigate } from 'react-router-dom';

function HRDashboard() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Welcome HR</h2>
                <p>Manage candidates and streamline the hiring process.</p>
                
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    <button className="role-btn" onClick={() => navigate('/hr/candidates')}>
                        View Candidates
                    </button>
                    <button className="role-btn" onClick={() => navigate('/hr/track-status')}>
                        Track Status
                    </button>
                    <button className="role-btn" onClick={() => navigate('/hr/send-email-options')}>
                        Send Email
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HRDashboard;
