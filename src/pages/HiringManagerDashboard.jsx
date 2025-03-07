import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function HiringManagerDashboard() {
    const location = useLocation();
    const manager = location.state?.manager;

    const [candidates, setCandidates] = useState([]);
    const [showMarksModal, setShowMarksModal] = useState(false);
    const [showDecisionModal, setShowDecisionModal] = useState(false);
    const [selectedCandidateId, setSelectedCandidateId] = useState('');
    const [marks, setMarks] = useState('');
    const [decision, setDecision] = useState('');  // New State for decision

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

    const openResponsesSheet = () => {
        window.open('https://docs.google.com/spreadsheets/d/1ns6f6FMVWl93fbQQwuvvrNm0bAME-ZSJ-rK2IZOa9pU/edit#gid=863401679', '_blank');
    };

    const openMarksModal = () => setShowMarksModal(true);
    const closeMarksModal = () => {
        setShowMarksModal(false);
        setSelectedCandidateId('');
        setMarks('');
    };

    const openDecisionModal = () => setShowDecisionModal(true);
    const closeDecisionModal = () => {
        setShowDecisionModal(false);
        setSelectedCandidateId('');
        setDecision('');
    };

    const submitMarks = async () => {
        if (!selectedCandidateId || !marks) {
            alert('Please select a candidate and enter marks');
            return;
        }

        try {
            await axios.put(`http://localhost:5000/api/candidates/${selectedCandidateId}/marks`, { marks });
            alert('Marks saved successfully!');
            closeMarksModal();
            fetchCandidates();
        } catch (err) {
            console.error('Failed to save marks:', err);
            alert('Failed to save marks');
        }
    };

    const submitDecision = async () => {
        if (!selectedCandidateId || !decision) {
            alert('Please select a candidate and decision');
            return;
        }

        try {
            await axios.put(`http://localhost:5000/api/candidates/${selectedCandidateId}/decision`, { decision });
            alert('Decision saved successfully!');
            closeDecisionModal();
            fetchCandidates();
        } catch (err) {
            console.error('Failed to save decision:', err);
            alert('Failed to save decision');
        }
    };

    if (!manager) {
        return <p>Unauthorized access. Please log in.</p>;
    }

    return (
        <div style={pageStyle}>
            <div style={dashboardStyle}>
                <h2>Welcome, {manager.name}!</h2>
                <p>Here are the candidates for whom the test link was sent:</p>

                <div style={tableContainerStyle}>
                    <table style={tableStyle}>
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

                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                    <button onClick={openResponsesSheet} className="role-btn">View All Responses</button>
                    <button onClick={openMarksModal} className="role-btn">Enter Marks</button>
                    <button onClick={openDecisionModal} className="role-btn">Decision</button>
                </div>

                {/* Marks Modal */}
                {showMarksModal && (
                    <Modal title="Enter Marks for Candidate" onClose={closeMarksModal}>
                        <CandidateDropdown candidates={candidates} value={selectedCandidateId} onChange={setSelectedCandidateId} />
                        <input type="number" placeholder="Enter Marks" value={marks} onChange={(e) => setMarks(e.target.value)} style={inputStyle} />
                        <ActionButtons onSave={submitMarks} onCancel={closeMarksModal} />
                    </Modal>
                )}

                {/* Decision Modal */}
                {showDecisionModal && (
                    <Modal title="Select Candidate Decision" onClose={closeDecisionModal}>
                        <CandidateDropdown candidates={candidates} value={selectedCandidateId} onChange={setSelectedCandidateId} />
                        <select value={decision} onChange={(e) => setDecision(e.target.value)} style={inputStyle}>
                            <option value="">Select Decision</option>
                            <option value="Selected">Selected</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                        <ActionButtons onSave={submitDecision} onCancel={closeDecisionModal} />
                    </Modal>
                )}
            </div>
        </div>
    );
}

const CandidateDropdown = ({ candidates, value, onChange }) => (
    <select value={value} onChange={(e) => onChange(e.target.value)} style={inputStyle}>
        <option value="">Select Candidate</option>
        {candidates.map(candidate => (
            <option key={candidate._id} value={candidate._id}>{candidate.name} ({candidate.email})</option>
        ))}
    </select>
);

const Modal = ({ title, children, onClose }) => (
    <div style={modalOverlayStyle}>
        <div style={modalContentStyle}>
            <h3>{title}</h3>
            {children}
        </div>
    </div>
);

const ActionButtons = ({ onSave, onCancel }) => (
    <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={onSave} className="role-btn">Submit</button>
        <button onClick={onCancel} className="role-btn" style={{ background: 'gray' }}>Cancel</button>
    </div>
);

// 🔥 Add these styles to fix the error
const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #6a11cb, #ff6f61)',
    color: 'white'
};

const dashboardStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '30px',
    borderRadius: '15px',
    backdropFilter: 'blur(15px)',
    textAlign: 'center'
};

const tableContainerStyle = {
    marginTop: '20px'
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    background: 'white',
    color: '#333',
    borderRadius: '10px',
    overflow: 'hidden'
};

const inputStyle = {
    padding: '10px',
    width: '100%',
    marginTop: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
};

const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const modalContentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)'
};



export default HiringManagerDashboard;
