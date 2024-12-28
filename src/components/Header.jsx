import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <div className="header">
            <h1>CRM Dashboard</h1>
            <div className="actions">
                <input type="search" placeholder="Buscar..." />
                <button>🔔</button>
                <Link to="/profile">
                <button>  <FaUser /></button>
                </Link>
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? '☾' : '☼'}
                </button>
            </div>
        </div>
    );
};

export default Header;