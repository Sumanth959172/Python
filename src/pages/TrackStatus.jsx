import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TrackStatus() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetchCandidates();
    }, []);

    const fetchCandidates = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/candidates/status');
            setCandidates(response.data);
        } catch (err) {
            console.error('Error fetching candidates:', err);
            alert('Failed to fetch candidate status');
        }
    };

    return (
        <div className="page-container">
            <div className="track-status-container">
                <h2 className="track-status-heading">Candidate Test Status</h2>
                <table className="track-status-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Test Link Sent</th>
                            <th>Test Submitted</th>
                            <th>Marks</th>
                            <th>Final Decision</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.length > 0 ? candidates.map(candidate => (
                            <tr key={candidate._id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.email}</td>
                                <td>
                                    <span className={`status-icon ${candidate.testLinkSent ? 'success' : 'failure'}`}>
                                        {candidate.testLinkSent ? '✔' : '✖'} 
                                    </span> 
                                    {candidate.testLinkSent ? ' Yes' : ' No'}
                                </td>
                                <td>
                                    <span className={`status-icon ${candidate.testSubmitted ? 'success' : 'failure'}`}>
                                        {candidate.testSubmitted ? '✔' : '✖'}
                                    </span> 
                                    {candidate.testSubmitted ? ' Yes' : ' No'}
                                </td>
                                <td>{candidate.marks || 'N/A'}</td>
                                <td>{candidate.decision || 'Pending'}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center' }}>No candidates found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TrackStatus;
