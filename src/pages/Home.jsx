import React from 'react';

function Home() {
    return (
        <div className="page-container">
            <div className="about-container"> {/* Reusing existing class for consistent styling */}
                <h2>Welcome to Doodle's Next-Gen Hiring Portal</h2>
                <p>
                    At Doodle, we don't just hire — we discover talent. Our AI-powered recruitment engine scans 
                    the digital universe, from GitHub commits to Stack Overflow answers, identifying the brightest minds.
                </p>
                <p>
                    Traditional resumes? Outdated. Our algorithms map real skills based on your code, your contributions, 
                    and your innovations. If you're making waves in tech, Doodle's AI already knows you.
                </p>
                <p>
                    Join the future of hiring where talent meets technology. No noise, no spam — just precision matchmaking.
                </p>
            </div>
        </div>
    );
}

export default Home;
