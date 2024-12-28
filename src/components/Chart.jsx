import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import '../styles/Chart.css';

const Chart = ({ title, data }) => (
    <div className="chart">
        <h2>{title}</h2>
        <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
    </div>
);

export default Chart;
