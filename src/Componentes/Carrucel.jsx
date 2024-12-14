import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Carrucel({ imagen1, imagen2, imagen3, url1, url2, url3 }) {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <Link to={url1}>
                    <div className="carousel-item active">
                        <img src={imagen1} className="" alt="..." />
                    </div>
                </Link>
                <Link to={url2}>
                    <div className="carousel-item">
                        <img src={imagen2} className="" alt="..." />
                    </div>
                </Link>
                <Link to={url3}>
                    <div className="carousel-item">
                        <img src={imagen3} className="" alt="..." />
                    </div>
                </Link>
            </div>
            <button className="carousel-control-prev no-outline" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next no-outline" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carrucel;