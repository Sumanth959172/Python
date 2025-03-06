import React from 'react';
import { useLocation } from 'react-router-dom';

function TestInstructions() {
    const location = useLocation();
    const candidate = location.state?.candidate;

    if (!candidate) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    const startTest = () => {
        // Directly open your Google Form in a new tab
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSdDCl1ljKaGlPJO3IDyC7OcPPFjqMwVdxEcbJ8lhe4J3kgkhA/viewform?usp=sharing', '_blank');
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

                <button onClick={startTest} style={startButtonStyle}>Start Test</button>
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

export default TestInstructions;
