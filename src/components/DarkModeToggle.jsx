import React, { useState } from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
    );
};

export default DarkModeToggle;
