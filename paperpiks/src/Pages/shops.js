import React from 'react';

const shopsPage = () => {

    const shops = [
        {
            id: 1,
            name: 'Shop 1',
            location: 'Location 1',
            description: 'This is shop 1.',
        },
        {
            id: 2,
            name: 'Shop 2',
            location: 'Location 2',
            description: 'This is shop 2.',
        },
    ];

    return (
        <div>
            <h2>Nearby Stationeries</h2>
            <ul>
                {shops.map((shop) => (
                    <li key={shop.id}>
                        <h3>{shop.name}</h3>
                        <p>{shop.location}</p>
                        <p>{shop.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default shopsPage;