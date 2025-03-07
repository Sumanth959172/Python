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
            const response = await axios.get('http://localhost:5000/api/candidates/test-link-sent');
            setCandidates(response.data);
        } catch (err) {
            console.error('Failed to fetch candidates:', err);
            alert('Failed to fetch candidates');
        }
    };

    if (!manager) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    const openResponsesSheet = () => {
        window.open('https://docs.google.com/spreadsheets/d/1ns6f6FMVWl93fbQQwuvvrNm0bAME-ZSJ-rK2IZOa9pU/edit#gid=863401679', '_blank');
    };

    return (
        <div className="page-container" style={pageStyle}>
            <div className="dashboard-container" style={dashboardStyle}>
                <h2 style={headerStyle}>   Welcome, {manager.name}!</h2>
                <p style={subHeaderStyle}>Here are the candidates for whom the test link was sent:</p>

                <div className="table-container" style={tableContainerStyle}>
                    <table className="styled-table" style={tableStyle}>
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
                                    <td colSpan="2" style={{ textAlign: 'center' }}>No candidates found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <button onClick={openResponsesSheet} style={buttonStyle}>
                    View All Responses
                </button>
            </div>
        </div>
    );
}

const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
};

const dashboardStyle = {
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
};

const headerStyle = {
    fontSize: '1.8rem',
    marginBottom: '10px',
};

const subHeaderStyle = {
    fontSize: '1rem',
    marginBottom: '20px',
};

const tableContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
};

const tableStyle = {
    width: '100%',
    maxWidth: '500px',
    borderCollapse: 'collapse',
    background: 'rgba(255, 255, 255, 0.15)',
};

const buttonStyle = {
    padding: '12px 25px',
    fontSize: '1rem',
    background: 'linear-gradient(to right, #ff512f, #dd2476)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
};

export default HiringManagerDashboard;
