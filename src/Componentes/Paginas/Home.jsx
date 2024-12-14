import React from 'react'
import Cuadrado from '../../imagenes/cuadrado.png'
import CuadradoCarrusel from '../../imagenes/cuadradoCarrusel.png'
import Typer3000 from '../../imagenes/typer3000.png'
import Colores from '../../imagenes/colores.png'
import { Link } from 'react-router-dom'
import Carta from '../Carta'
import Carrucel from '../Carrucel'
import Navbar from '../Navbar'

function Home() {
    return (
        <div className='text-center text-light'>
            <Navbar/>
            <h1 className='mt-3'>Juegos destacados</h1>
            <Carrucel
                imagen1={CuadradoCarrusel}
                url1="/juego-cuadrado"
                imagen2={Typer3000}
                url2="/juego-palabras"
                imagen3={Colores}
                url3="/juego-colores"
            />



            <div className='d-flex justify-content-center mt-3'>
                <Link to="/juego-cuadrado">
                    <Carta
                        imagen={Cuadrado}
                        texto="Toca el cuadrado antes de que termine el tiempo"
                    />
                </Link>
                <Link to="/juego-palabras">
                    <Carta
                        imagen={Typer3000}
                        texto="Escribe la palabra antes de que termine el tiempo"
                    />
                </Link>
                <Link to="/juego-colores">
                    <Carta
                        imagen={Colores}
                        texto="Escribe el color antes de que termine el tiempo"
                    />
                </Link>
                <Link to="/juego-cuadrado">
                    <Carta
                        imagen={Cuadrado}
                        texto="Toca el cuadrado antes de que termine el tiempo"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Home