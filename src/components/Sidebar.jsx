import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaChartLine, FaFileAlt, FaUser } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isCollapsed ? '+' : '-'}
            </button>
            <ul>
                <li>
                    <Link to="/">
                        <FaTachometerAlt />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/clients">
                        <FaUsers />
                        <span>Clientes</span>
                    </Link>
                </li>
                <li>
                    <Link to="/sales">
                        <FaChartLine />
                        <span>Ventas</span>
                    </Link>
                </li>
                <li>
                    <Link to="/reports">
                        <FaFileAlt />
                        <span>Reportes</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <FaUser />
                        <span>Perfil</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;