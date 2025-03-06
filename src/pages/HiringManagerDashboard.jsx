import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function HiringManagerDashboard() {
    const location = useLocation();
    const manager = location.state?.manager;

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        if (!manager) return;
        fetchCandidates();
    }, [manager]);

    const fetchCandidates = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/candidates/test-link-sent');  // Fetch only those with testLinkSent = true
            setCandidates(response.data);
        } catch (err) {
            console.error('Failed to fetch candidates:', err);
            alert('Failed to fetch candidates');
        }
    };

    if (!manager) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    return (
        <div className="page-container">
            <h2>Welcome, {manager.name}!</h2>
            <p>Here are the candidates for whom the test link was sent:</p>

            <div className="table-container">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.length > 0 ? candidates.map(candidate => (
                            <tr key={candidate._id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.email}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center' }}>No candidates found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HiringManagerDashboard;
