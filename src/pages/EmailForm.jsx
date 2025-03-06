import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function generateRandomPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    let password = '';
    for (let i = 0; i < 10; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function generateLoginID(candidate) {
    const base = candidate.name.toLowerCase().replace(/\s+/g, '.');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `${base}${random}`;
}

function EmailForm({ candidate, onClose }) {
    const [loginID, setLoginID] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('Send Invitation Link');  // Default message for textarea

    useEffect(() => {
        const generatedLoginID = generateLoginID(candidate);
        const generatedPassword = generateRandomPassword();

        setLoginID(generatedLoginID);
        setPassword(generatedPassword);

        saveCredentialsToDB(candidate._id, generatedLoginID, generatedPassword);
    }, [candidate]);

    const saveCredentialsToDB = async (candidateId, loginID, password) => {
        try {
            const response = await fetch(`http://localhost:5000/api/candidates/${candidateId}/credentials`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ loginID, password })
            });
    
            const responseText = await response.text();
            console.log('Response from backend:', responseText);
    
            if (!response.ok) {
                console.error('Failed to save credentials:', responseText);
            }
        } catch (error) {
            console.error('Error saving credentials:', error);
        }
    };
    

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            to_email: candidate.email,
            to_name: candidate.name,
            login_id: loginID,
            password: password,
            message: message  // This will be "Send Invitation Link" unless HR changes it
        };

        emailjs.send(
            'service_zcyjes9',    // Replace with your actual Service ID
            'template_0ts3tw9',    // Replace with your actual Template ID
            templateParams,
            'MCsX6tYQoBgXBBVi-'      // Replace with your actual Public Key
        )
        .then(() => {
            alert(`Email sent to ${candidate.name} (${candidate.email})`);
            onClose();
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send email');
        });
    };

    return (
        <div className="email-form-overlay">
            <div className="email-form">
                <h3>Send Email to {candidate.name}</h3>
                <p><strong>Email:</strong> {candidate.email}</p>
                <form onSubmit={sendEmail}>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <div className="form-buttons">
                        <button type="submit">Send Email</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EmailForm;
