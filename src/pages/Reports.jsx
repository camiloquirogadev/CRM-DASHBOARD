import React from 'react';
import Chart from '../components/Chart';
import '../styles/Reports.css';

const Reports = () => (
    <div className="reports">
        <h2>Reportes</h2>
        <Chart title="Ingresos Anuales" data={[]} />
    </div>
);

export default Reports;