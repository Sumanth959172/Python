import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="logo">Hush Hush Technologies</div>
            <nav className="nav-menu">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;
