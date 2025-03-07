import React from 'react';

function AboutUs() {
    return (
        <div className="page-container">
            <div className="about-container"> {/* Reusing existing class for consistent styling */}
                <h2>About Us</h2>
                <p>
                    Doodle is a global tech leader constantly hunting for top talent. But we do things differently.
                    Our AI-powered system analyzes real-world data — open-source contributions, technical forums, 
                    and community interactions — to find the best minds.
                </p>
                <p>
                    When you fit a role, you won’t apply — you’ll get a private invitation to a custom test,
                    crafted dynamically by our AI based on the exact skills we need.
                </p>
                <p>
                    This is hiring for the future. No biases, no resumes — just data-driven talent acquisition.
                </p>
                <h3>How We Do It</h3>
                <ul>
                    <li>Scans GitHub, Stack Overflow, and tech forums for real contributions.</li>
                    <li>Builds a skill graph using AI and Natural Language Processing.</li>
                    <li>Instantly matches candidates when new openings arise.</li>
                    <li>Sends personalized invites with role-specific coding challenges.</li>
                    <li>Final decisions based on skills — not resumes.</li>
                </ul>
                <p>
                    Ready to experience hiring 2.0? Doodle’s AI is watching for your brilliance.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
