import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand">Pagina de juego</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
