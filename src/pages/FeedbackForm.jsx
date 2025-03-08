import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function FeedbackForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const candidate = location.state?.candidate;

    const [feedback, setFeedback] = useState('');

    if (!candidate) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    const submitFeedback = async () => {
        try {
            await axios.post('http://localhost:5000/api/feedback', {
                candidateName: candidate.name,
                candidateEmail: candidate.email,
                feedback
            });

            alert('Thank you for your feedback!');
            navigate('/candidate/submit-test', { state: { candidate } });  // ✅ Pass candidate state
        } catch (error) {
            console.error('Failed to submit feedback', error);
            alert('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Test Feedback</h2>
                <p>Thank you for completing the test, <strong>{candidate.name}</strong>!</p>
                <p>We would love to hear your feedback about the test experience.</p>
                <textarea
                    placeholder="Share your feedback here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    style={textareaStyle}
                />
                <button onClick={submitFeedback} style={submitButtonStyle}>Submit Feedback</button>
            </div>
        </div>
    );
}

const textareaStyle = {
    width: '100%',
    height: '100px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    outline: 'none',
    resize: 'none',
};

const submitButtonStyle = {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '1rem',
    background: 'linear-gradient(to right, #ff512f, #dd2476)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default FeedbackForm;
