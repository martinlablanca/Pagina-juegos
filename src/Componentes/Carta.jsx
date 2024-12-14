import React from 'react';

function Carta({ imagen, texto }) {
    return (
        <div className="card m-5" style={{ width: '18rem', height: '400px' }}>
            <img src={imagen} className="card-img-top" alt="..." style={{ height: '300px', objectFit: 'cover' }} />
            <div className="card-body" style={{ height: '100px', backgroundColor: '#333' }}>
                <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: 'none', color: 'white' }}>
                    {texto}
                </p>
            </div>
        </div>
    );
}

export default Carta;
