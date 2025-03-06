import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Thank You!</h2>
                <p>Your feedback has been submitted successfully.</p>
                <p>We will get back to you with a response soon.</p>
                <button onClick={goToHome} style={buttonStyle}>Go to Home</button>
            </div>
        </div>
    );
}

const buttonStyle = {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '1rem',
    background: 'linear-gradient(to right, #24C6DC, #514A9D)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default ThankYou;