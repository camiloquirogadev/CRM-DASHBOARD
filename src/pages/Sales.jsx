import React from 'react';
import Table from '../components/Table';
import '../styles/Sales.css';

const Sales = () => {
    const columns = ['Fecha', 'Cliente', 'Monto', 'Estado'];
    const data = [
        { Fecha: '2024-01-01', Cliente: 'Juan Pérez', Monto: '$500', Estado: 'Completado' },
        { Fecha: '2024-01-02', Cliente: 'Ana Gómez', Monto: '$300', Estado: 'Pendiente' },
    ];

    return (
        <div className="sales">
            <h2>Ventas</h2>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default Sales;