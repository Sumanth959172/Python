import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SubmitTest() {
    const location = useLocation();
    const navigate = useNavigate();
    const candidate = location.state?.candidate;

    if (!candidate) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    const handleSubmitTest = async () => {
        try {
            await axios.put(`http://localhost:5000/api/candidates/${candidate._id}/submit-test`);

            alert('Your test submission has been recorded!');
            navigate('/candidate/thank-you');  // ✅ Redirect to Thank You page
        } catch (err) {
            console.error('Error submitting test:', err);
            alert('Failed to submit test. Please try again.');
        }
    };

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Confirm Test Submission</h2>
                <p>Click the button below to confirm that you have submitted your test.</p>
                <button onClick={handleSubmitTest} style={submitButtonStyle}>Submit Test</button>
            </div>
        </div>
    );
}

const submitButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    background: 'linear-gradient(to right, #ff512f, #dd2476)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default SubmitTest;
