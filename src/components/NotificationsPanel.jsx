import React from 'react';
import '../styles/NotificationsPanel.css';

const NotificationsPanel = () => {
    const notifications = [
        { id: 1, message: 'Nuevo cliente agregado: María López', time: 'Hace 5 min' },
        { id: 2, message: 'Venta completada por $1200', time: 'Hace 1 hora' },
        { id: 3, message: 'Reporte generado: Ventas del mes', time: 'Ayer' },
    ];

    return (
        <div className="notifications-panel">
            <h3>Notificaciones</h3>
            <ul>
                {notifications.map((notif) => (
                    <li key={notif.id}>
                        <p>{notif.message}</p>
                        <span>{notif.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationsPanel;
