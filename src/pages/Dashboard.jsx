import React from 'react';
import NotificationsPanel from '../components/NotificationsPanel';
import RecentActivity from '../components/RecentActivity';
import Chart from '../components/Chart';
import SummaryWidget from '../components/SummaryWidget';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="widgets">
                <SummaryWidget title="Total Ventas" value="$50,000" />
                <SummaryWidget title="Nuevos Clientes" value="150" />
                <SummaryWidget title="Ventas Pendientes" value="30" />
                <SummaryWidget title="Ingresos" value="$75,000" />
            </div>
            <div className="main-content">
                <div className="side-widgets">
                    <NotificationsPanel />
                    <RecentActivity />
                </div>
                <Chart title="Ventas Mensuales" data={[]} />
            </div>
        </div>
    );
};

export default Dashboard;
