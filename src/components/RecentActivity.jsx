import React from 'react';
import '../styles/RecentActivity.css';

const RecentActivity = () => {
    const activities = [
        { id: 1, action: 'Agregó un nuevo cliente', time: 'Hace 2 horas' },
        { id: 2, action: 'Actualizó información de ventas', time: 'Ayer' },
        { id: 3, action: 'Generó un reporte', time: 'Hace 3 días' },
    ];

    return (
        <div className="recent-activity">
            <h3>Actividad Reciente</h3>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        {activity.action} - <span>{activity.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentActivity;
