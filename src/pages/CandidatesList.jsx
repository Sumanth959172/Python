import React, { useEffect, useState } from 'react';
import EmailForm from './EmailForm';

function CandidatesList() {
    const [candidates, setCandidates] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/candidates')
            .then(res => res.json())
            .then(data => setCandidates(data))
            .catch(err => console.error('Error fetching candidates:', err));
    }, []);

    return (
        <div className="page-container">
            <div className="about-container">
                <h2>Candidates List</h2>
                <table className="candidates-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.length === 0 ? (
                            <tr><td colSpan="2">No candidates found.</td></tr>
                        ) : (
                            candidates.map(candidate => (
                                <tr 
                                    key={candidate._id} 
                                    onClick={() => setSelectedCandidate(candidate)}
                                    className="clickable-row"
                                >
                                    <td>{candidate.name}</td>
                                    <td>{candidate.email}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {selectedCandidate && (
                <EmailForm 
                    candidate={selectedCandidate} 
                    onClose={() => setSelectedCandidate(null)} 
                />
            )}
        </div>
    );
}

export default CandidatesList;