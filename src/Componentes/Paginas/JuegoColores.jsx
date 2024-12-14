import React, { useState, useEffect } from 'react';
import '../../Css/JuegoColores.css';
import { Link } from 'react-router-dom';

function JuegoColores() {
    const [colorValue, setColorValue] = useState('');
    const [randomColor, setRandomColor] = useState('');
    const [time, setTime] = useState(10);
    const [gameOver, setGameOver] = useState(false);
    const [puntuacion, setPuntuacion] = useState(0);

    const colores = [
        { espanol: 'rojo', ingles: 'red' },
        { espanol: 'verde', ingles: 'green' },
        { espanol: 'azul', ingles: 'blue' },
        { espanol: 'amarillo', ingles: 'yellow' },
        { espanol: 'negro', ingles: 'black' },
        { espanol: 'blanco', ingles: 'white' },
        { espanol: 'gris', ingles: 'gray' },
        { espanol: 'morado', ingles: 'purple' },
        { espanol: 'naranja', ingles: 'orange' },
        { espanol: 'rosa', ingles: 'pink' },
        { espanol: 'agua', ingles: 'aqua' },
        { espanol: 'verde azulado', ingles: 'teal' },
        { espanol: 'limón', ingles: 'lime' },
        { espanol: 'plata', ingles: 'silver' },
        { espanol: 'café', ingles: 'brown' },
        { espanol: 'marino', ingles: 'navy' },
        { espanol: 'oliva', ingles: 'olive' },
        { espanol: 'fucsia', ingles: 'fuchsia' },
        { espanol: 'salmón', ingles: 'salmon' },
        { espanol: 'beige', ingles: 'beige' },
        { espanol: 'turquesa', ingles: 'turquoise' },
        { espanol: 'lavanda', ingles: 'lavender' },
        { espanol: 'cian', ingles: 'cyan' },
        { espanol: 'marrón', ingles: 'brown' },
        { espanol: 'rosa claro', ingles: 'lightpink' },
        { espanol: 'verde claro', ingles: 'lightgreen' },
        { espanol: 'azul claro', ingles: 'lightblue' },
        { espanol: 'gris claro', ingles: 'lightgray' },
        { espanol: 'amarillo claro', ingles: 'lightyellow' },
        { espanol: 'blanco roto', ingles: 'offwhite' },
        { espanol: 'púrpura claro', ingles: 'plum' },
        { espanol: 'rosa oscuro', ingles: 'darkpink' },
        { espanol: 'rojo oscuro', ingles: 'darkred' },
        { espanol: 'verde oscuro', ingles: 'darkgreen' },
        { espanol: 'azul oscuro', ingles: 'darkblue' },
        { espanol: 'gris oscuro', ingles: 'darkgray' },
        { espanol: 'verde lima', ingles: 'limegreen' },
        { espanol: 'violeta', ingles: 'violet' },
        { espanol: 'champán', ingles: 'champagne' },
        { espanol: 'ocre', ingles: 'ochre' },
        { espanol: 'beige claro', ingles: 'lightbeige' },
        { espanol: 'plata claro', ingles: 'lightsilver' },
        { espanol: 'rojo coral', ingles: 'coral' },
        { espanol: 'verde pasto', ingles: 'grassgreen' },
        { espanol: 'agua marina', ingles: 'seagreen' },
        { espanol: 'almendra', ingles: 'almond' },
        { espanol: 'mandarina', ingles: 'tangerine' },
        { espanol: 'caramelo', ingles: 'caramel' }
    ];


    const generateRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colores.length);
        setRandomColor(colores[randomIndex]);
    };

    useEffect(() => {
        generateRandomColor();
    }, []);

    useEffect(() => {
        if (time === 0) {
            setGameOver(true);
        }
    }, [time]);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            if (!gameOver) {
                setTime((prevTime) => prevTime - 1);
            }
        }, 1000);

        return () => clearInterval(timeInterval);
    }, [gameOver]);

    const handleKeyUp = (event) => {
        const value = event.target.value.toLowerCase();
        setColorValue(value);

        if (event.key === 'Enter') {
            const colorFound = colores.find((color) => color.espanol === value);

            if (colorFound) {
                document.body.style.backgroundColor = colorFound.ingles;
                setColorValue('');
                setTime((prevTime) => prevTime + 2);
                setPuntuacion(prevPuntuacion => prevPuntuacion + 1);
                generateRandomColor();
            }
        }

        if (event.key === 'Backspace' && value === '') {
            document.body.style.backgroundColor = 'rgb(61, 61, 61)'; // Color de fondo por defecto
        }
    };

    const restartGame = () => {
        setGameOver(false);
        setTime(10);
        setColorValue('');
        generateRandomColor();
        setPuntuacion(0);
    };

    const generateRandomTextColor = () => {
        const randomTextColor = ['black', 'white', 'gray', 'pink', 'silver', 'beige'];
        return randomTextColor[Math.floor(Math.random() * randomTextColor.length)];
    };

    useEffect(() => {
        return () => {
            document.body.style.backgroundColor = 'rgb(61, 61, 61)'; // Restablecer el color de fondo
        };
    }, []);

    return (
        <div className="JuegoColores d-flex justify-content-center align-items-center text-light">
            <div>
                {!gameOver ? (
                    <div>
                        <h1
                            id="randomColor"
                            style={{ color: generateRandomTextColor() }}
                        >
                            {randomColor.espanol}
                        </h1>
                        <p>Escribe el color mostrado antes de que se acabe el tiempo</p>
                        <p>Tiempo restante: <span>{time}s</span></p>
                        <input
                            type="text"
                            id="colorInput"
                            value={colorValue}
                            autoComplete="off"
                            onChange={(e) => setColorValue(e.target.value)}
                            onKeyUp={handleKeyUp}
                            placeholder="Escribe el color aquí..."
                        />
                    </div>
                ) : (
                    <div className='d-flex justify-content-center align-items-center blur-background mt-5'>
                        <div className="game-over text-light text-center d-flex flex-column">
                            <h1 className='mt-5'>GAME OVER</h1>
                            <hr />
                            <h3>Puntuación: {puntuacion}</h3>
                            <hr />
                            <div className="d-flex justify-content-evenly align-items-center mt-5">
                                <Link to="/" className=''>
                                    <button className='btn btn-danger'>Volver al inicio</button>
                                </Link>
                                <button className='btn btn-primary' onClick={restartGame}>Jugar de nuevo</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default JuegoColores;
