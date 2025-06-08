import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminTables = () => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        fetchTables();
    }, []);

    const fetchTables = async () => {
        try {
            const res = await axios.get('/api/tables');
            setTables(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            await axios.patch(`/api/tables/${id}`, { status: newStatus });
            fetchTables();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Manage Tables</h1>
            <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Table Number</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tables.map((table) => (
                        <tr key={table._id}>
                            <td>{table.tableNumber}</td>
                            <td>{table.status}</td>
                            <td>
                                <button
                                    onClick={() =>
                                        updateStatus(
                                            table._id,
                                            table.status === 'empty' ? 'filled' : 'empty'
                                        )
                                    }
                                >
                                    Toggle Status
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminTables;
