import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import HRLogin from './pages/HRLogin';
import HRDashboard from './pages/HRDashboard';
import CandidatesList from './pages/CandidatesList';
import SendEmailPage from './pages/EmailForm';  // New Page for Sending Email
import './styles.css';

function App() {
    return (
        <Router>
            <Header />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login/hr" element={<HRLogin />} />
                    <Route path="/dashboard" element={<HRDashboard />} />
                    <Route path="/candidates" element={<CandidatesList />} />
                    <Route path="/send-email/:candidateId" element={<SendEmailPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
