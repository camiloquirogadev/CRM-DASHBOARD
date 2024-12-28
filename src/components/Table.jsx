import React, { useState } from 'react';
import '../styles/Table.css';

const Table = ({ columns, data }) => {
    const [tableData, setTableData] = useState(data);

    const handleCreate = () => {
        const newRow = columns.reduce((acc, col) => ({ ...acc, [col]: '' }), {});
        setTableData([...tableData, newRow]);
    };

    const handleDelete = (index) => {
        const newData = tableData.filter((_, i) => i !== index);
        setTableData(newData);
    };

    const handleEdit = (index, column, value) => {
        const newData = tableData.map((row, i) => 
            i === index ? { ...row, [column]: value } : row
        );
        setTableData(newData);
    };

    return (
        <div>
            <div className="table-actions">
                <button onClick={handleCreate}>Crear</button>
            </div>
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => <th key={col}>{col}</th>)}
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            {columns.map((col) => (
                                <td key={col}>
                                    <input 
                                        type="text" 
                                        value={row[col]} 
                                        onChange={(e) => handleEdit(index, col, e.target.value)} 
                                    />
                                </td>
                            ))}
                            <td>
                                <button onClick={() => handleDelete(index)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;