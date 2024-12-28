import React from 'react';
import Table from '../components/Table';
import '../styles/Clients.css';

const Clients = () => {
    const columns = ['Nombre', 'Correo', 'Teléfono', 'Estado'];
    const data = [
        { Nombre: 'Juan Pérez', Correo: 'juan@example.com', Teléfono: '123456789', Estado: 'Activo' },
        { Nombre: 'Ana Gómez', Correo: 'ana@example.com', Teléfono: '987654321', Estado: 'Inactivo' },
    ];

    return (
        <div className="clients">
            <h2>Clientes</h2>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default Clients;