import React from 'react';
import '../styles/SummaryWidget.css';

const SummaryWidget = ({ title, value }) => {
    return (
        <div className="summary-widget">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default SummaryWidget;