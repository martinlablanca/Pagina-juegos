import React, { useState, useEffect, useRef } from 'react';
import '../../Css/JuegoCuadrado.css';
import { Link } from 'react-router-dom';

function JuegoCuadrado() {
    const [cuadradoPos, setCuadradoPos] = useState([{ top: '15%', left: '48%' }]);
    const [puntuacion, setPuntuacion] = useState(0);
    const [color, setColor] = useState(['bg-danger']);
    const [tamanio, setTamanio] = useState(50);
    const [tiempo, setTiempo] = useState(10);
    const [gameOver, setGameOver] = useState(false);
    const [tiempoResta, setTiempoResta] = useState(1);
    const [nivel, setNivel] = useState(1);

    const tiempoRestaRef = useRef(tiempoResta);

    useEffect(() => {
        tiempoRestaRef.current = tiempoResta;

        if (tiempo <= 0) {
            setTiempo(0);
            setGameOver(true);
            return;
        }

        if (puntuacion >= 10 && nivel === 1) {
            setNivel(2);
            setTiempoResta(2);
        } else if (puntuacion >= 20 && nivel === 2) {
            setNivel(3);
            setTiempoResta(3);
            setCuadradoPos(pos => [...pos, { top: '50%', left: '50%' }]);
            setColor(colors => [...colors, 'bg-primary']);
        } else if (puntuacion >= 30 && nivel === 3) {
            setNivel(4);
            setTiempoResta(4);
        } else if (puntuacion >= 40 && nivel === 4) {
            setNivel(5);
            setTiempoResta(4);
        } else if (puntuacion >= 50 && nivel === 5) {
            setNivel(6);
            setTiempoResta(4);
        }

        const timeInterval = setInterval(() => {
            setTiempo(prevTiempo => prevTiempo - tiempoRestaRef.current);
        }, 500);

        return () => clearInterval(timeInterval);
    }, [tiempo, puntuacion, nivel, tiempoResta]);

    const crearCuadrados = () => {
        return cuadradoPos.map((pos, index) => (
            <div
                key={index}
                className={`cuadrado ${color[index]}`}
                onClick={() => cambiarPosicion(index)}
                style={{
                    width: `${tamanio}px`,
                    height: `${tamanio}px`,
                    position: 'absolute',
                    top: pos.top,
                    left: pos.left,
                }}
            ></div>
        ));
    };

    const cambiarPosicion = (index) => {
        if (!gameOver) {
            setTiempo(prevTiempo => prevTiempo + 3);

            const x = Math.round(Math.random() * 95);
            const y = Math.round(Math.random() * 95);

            const cambiarTamanio = Math.round(Math.random() * 2);
            if (cambiarTamanio === 1 && nivel < 4) {
                const agrandar = Math.round(Math.random() * 100);
                setTamanio(prevTamanio => Math.min(prevTamanio + agrandar, 200));
            }
            else if (cambiarTamanio === 1 && nivel >= 4) {
                const agrandar = Math.round(Math.random() * 80);
                setTamanio(prevTamanio => Math.min(prevTamanio + agrandar, 200));
            }
            else {
                const achicar = Math.round(Math.random() * 100);
                setTamanio(prevTamanio => Math.max(prevTamanio - achicar, 20));
            }

            setPuntuacion(prevPuntuacion => prevPuntuacion + 1);

            setCuadradoPos(prevPos => {
                const newPos = [...prevPos];
                newPos[index] = { top: `${x}%`, left: `${y}%` };
                return newPos;
            });

            setColor(prevColors => {
                const colores = ['bg-danger', 'bg-primary', 'bg-secondary', 'bg-success', 'bg-warning', 'bg-info', 'bg-dark', 'bg-light'];
                const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
                const newColors = [...prevColors];
                newColors[index] = nuevoColor;
                return newColors;
            });
        }
    };

    const reiniciarJuego = () => {
        setPuntuacion(0);
        setTiempo(10);
        setNivel(1);
        setTiempoResta(1);
        setGameOver(false);
        setCuadradoPos([{ top: '15%', left: '48%' }]);
        setColor(['bg-danger']);
        setTamanio(50);
    };

    return (
        <div className="mira">
            <div className="d-flex justify-content-center align-items-center blur-background">
                <h1 className="tiempo">{tiempo}</h1>
            </div>

            {gameOver ? (
                <div className='d-flex justify-content-center align-items-center blur-background mt-5'>
                    <div className="game-over text-light text-center d-flex flex-column">
                        <h1 className='mt-5'>GAME OVER</h1>
                        <hr />
                        <h3>Puntuación: {puntuacion}</h3>
                        <h3>Llegaste al nivel: {nivel}</h3>
                        <hr />
                        <div className="d-flex justify-content-evenly align-items-center mt-5">
                            <Link to="/" className=''>
                                <button className='btn btn-danger'>Volver al inicio</button>
                            </Link>
                            <button className='btn btn-primary' onClick={reiniciarJuego}>Jugar de nuevo</button>
                        </div>
                    </div>
                </div>

            ) : (
                crearCuadrados()
            )}
        </div>
    );
}

export default JuegoCuadrado;