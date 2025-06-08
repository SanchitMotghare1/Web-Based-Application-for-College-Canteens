import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmptyTableCount = () => {
    const [emptyTables, setEmptyTables] = useState(0);

    useEffect(() => {
        fetchEmptyTableCount();
    }, []);

    const fetchEmptyTableCount = async () => {
        try {
            const res = await axios.get('/api/tables/empty/count');
            setEmptyTables(res.data.emptyTables);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Number of Empty Tables</h1>
            <p>There are {emptyTables} empty tables in the canteen.</p>
        </div>
    );
};

export default EmptyTableCount;
