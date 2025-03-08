import React from 'react';
import { useNavigate } from 'react-router-dom';

function SendEmailOptions() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Select Email Type</h2>
                <p>Choose the type of email you want to send to candidates.</p>
                
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                    <button className="role-btn" onClick={() => navigate('/hr/send-offer-email')}>
                        Send Offer Letter
                    </button>
                    <button className="role-btn" onClick={() => navigate('/hr/send-rejection-email')}>
                        Send Rejection Mail
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SendEmailOptions;
