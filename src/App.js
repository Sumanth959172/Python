import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import HRLogin from './pages/HRLogin';
import HRDashboard from './pages/HRDashboard';
import CandidatesList from './pages/CandidatesList';
import SendEmailPage from './pages/EmailForm';
import CandidateLogin from './pages/CandidateLogin';
import CandidateDashboard from './pages/CandidateDashboard';  // New import
import './styles.css';
import Home from './pages/Home';
import TestInstructions from './pages/TestInstructions';  // New import
import FeedbackForm from './pages/FeedbackForm';
import ThankYou from './pages/ThankYou';
import HiringManagerLogin from './pages/HiringManagerLogin';
import HiringManagerDashboard from './pages/HiringManagerDashboard';


function App() {
    return (
        <Router>
            <Header />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login/hr" element={<HRLogin />} />
                    <Route path="/login/candidate" element={<CandidateLogin />} />
                    <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
                    <Route path="/dashboard" element={<HRDashboard />} />
                    <Route path="/candidates" element={<CandidatesList />} />
                    <Route path="/send-email/:candidateId" element={<SendEmailPage />} />
                    <Route path="/candidate/instructions" element={<TestInstructions />} />#
                    <Route path="/candidate/feedback" element={<FeedbackForm />} />
                    <Route path="/candidate/thank-you" element={<ThankYou />} />
                    <Route path="/login/hiring-manager" element={<HiringManagerLogin />} />
                    <Route path="/hiring-manager/dashboard" element={<HiringManagerDashboard />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
