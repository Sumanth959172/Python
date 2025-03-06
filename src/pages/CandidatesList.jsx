import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import this for navigation
import axios from 'axios';
import '../styles.css';

function CandidatesList() {
    const [candidates, setCandidates] = useState([]);
    const navigate = useNavigate();  // Hook to navigate

    useEffect(() => {
        axios.get('http://localhost:5000/api/candidates')
            .then(response => setCandidates(response.data))
            .catch(error => console.error('Failed to fetch candidates:', error));
    }, []);

    const handleBack = () => {
        navigate('/login');  // You can change this to any other page if needed
    };

    return (
        <div className="page-container">
            <div className="candidates-card">
                <h2 className="candidates-title">Candidates List</h2>
                <table className="candidates-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map(candidate => (
                            <tr key={candidate._id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Back Button */}
                <div className="back-button-container">
                    <button className="back-button" onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default CandidatesList;
