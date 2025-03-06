import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function EmailForm({ candidate, onClose }) {
    const [message, setMessage] = useState('Send Invitation Link');  // Default message

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            to_email: candidate.email,
            to_name: candidate.name,
            message: message
        };

        emailjs.send(
            'service_zcyjes9',     // Your actual Service ID
            'template_0ts3tw9',    // Your actual Template ID
            templateParams,
            'MCsX6tYQoBgXBBVi-'   // Your actual Public Key
        )
        .then(() => {
            alert(`Email sent to ${candidate.name} (${candidate.email})`);
            onClose();  // Close form after sending
        })
        .catch((error) => {
            console.error('Failed to send email:', error.text);
            alert(`Failed to send email: ${error.text}`);
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
