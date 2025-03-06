import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TestInstructions() {
    const location = useLocation();
    const navigate = useNavigate();
    const candidate = location.state?.candidate;

    const [testStarted, setTestStarted] = useState(false);

    if (!candidate) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    const startTest = () => {
        // Open Google Form in new tab
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSdDCl1ljKaGlPJO3IDyC7OcPPFjqMwVdxEcbJ8lhe4J3kgkhA/viewform?usp=sharing', '_blank');
        setTestStarted(true);
    };

    const goToFeedback = () => {
        navigate('/candidate/feedback', { state: { candidate } });
    };

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Test Instructions</h2>
                <p>Welcome, <strong>{candidate.name}</strong>!</p>
                <p>Please read the following instructions carefully before starting the test:</p>

                <ul style={instructionsStyle}>
                    <li>The test contains technical questions related to your role.</li>
                    <li>There is no time limit, but you are expected to complete the test in one sitting.</li>
                    <li>Make sure your internet connection is stable.</li>
                    <li>Once submitted, you cannot modify your answers.</li>
                </ul>

                {!testStarted ? (
                    <button onClick={startTest} style={startButtonStyle}>Start Test</button>
                ) : (
                    <button onClick={goToFeedback} style={feedbackButtonStyle}>Proceed to Feedback</button>
                )}
            </div>
        </div>
    );
}

const instructionsStyle = {
    textAlign: 'left',
    marginTop: '15px',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '15px',
    borderRadius: '10px',
    backdropFilter: 'blur(10px)',
    lineHeight: '1.5',
};

const startButtonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    background: 'linear-gradient(to right, #ff512f, #dd2476)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

const feedbackButtonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    background: 'linear-gradient(to right, #24C6DC, #514A9D)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default TestInstructions;
