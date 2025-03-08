import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

function SendOfferEmail() {
    const [candidates, setCandidates] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState('');

    useEffect(() => {
        fetchCandidates();
    }, []);

    const fetchCandidates = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/candidates/status');
            const selectedCandidates = response.data.filter(c => c.decision === 'Selected');
            setCandidates(selectedCandidates);
        } catch (err) {
            console.error('Error fetching candidates:', err);
            alert('Failed to fetch candidates');
        }
    };

    const sendOfferLetter = async () => {
        if (!selectedCandidate) {
            alert('Please select a candidate.');
            return;
        }

        const candidate = candidates.find(c => c._id === selectedCandidate);
        const templateParams = {
            to_email: candidate.email,
            to_name: candidate.name,
        };

        emailjs.send(
            'service_zcyjes9',
            'template_183s2lu',
            templateParams,
            'MCsX6tYQoBgXBBVi-'
        )
        .then(() => {
            alert(`Offer letter sent to ${candidate.name} (${candidate.email})`);
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send email');
        });
    };

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Send Offer Letter</h2>
                
                <select value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)} className="role-btn">
                    <option value="">Select Candidate</option>
                    {candidates.map(candidate => (
                        <option key={candidate._id} value={candidate._id}>
                            {candidate.name} ({candidate.email})
                        </option>
                    ))}
                </select>

                <button className="role-btn" style={{ marginTop: '15px' }} onClick={sendOfferLetter}>
                    Send Offer Letter
                </button>
            </div>
        </div>
    );
}

export default SendOfferEmail;
