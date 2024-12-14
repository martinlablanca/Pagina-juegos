import React, { useState, useEffect } from 'react';
import '../../Css/JuegoPalabras.css'
import { Link } from 'react-router-dom';

const JuegoPalabras = () => {
    const words = [
        'Valifornication', 'plataforma5', 'black', 'summer', 'flea', 'aeroplane', 'soliloquio', 'dissonancia', 'perspicaz', 'transgresión', 'delirante',
        'peppers', 'unlimited', 'arcadium', 'love', 'getaway', 'stadium', 'quixoticelixer', 'desmesurado', 'inexorable', 'irrevocable', 'aceleración', 'interminable',
        'inmortalidad', 'conjetura', 'paradigma', 'indefinido', 'clarividencia', 'quarter', 'snow', 'dylan', 'zephyr', 'funky', 'chili', 
        'chicha', 'devil', 'vientos de poder', 'metal', 'estrella', 'Nevermind', 'nirvana', 'montaña', 'perjurio', 'anomalía', 'cauterio', 'crisis', 'hipnosis', 'sacerdocio',
        'río', 'soldador', 'bajo un sol feliz', 'rojo', 'negro', 'verde', 'friend', 'happy', 'Tren loco', 'pneumonoultramicroscopicsilicovolcanoconiosis',
        'crazy train', 'secundario', 'libro', 'messi', 'AC/CD', 'agua de la montaña', 'playa', 'parque de atracciones',
        'Ratatouille', 'Slayer', 'Megadeth', 'zapatero', 'cohete', 'barrio bajo', 'avión', 'película', 'Star Wars', 'Pterosaurios',
        'música', 'Ornitorrinco', 'dermatologo', 'semiacuático', 'diente de sable', 'escribir', 'walk', 'walking', 'cucarachas para el desayuno',
        'Brachiosaurus', 'sleep', 'pensar', 'trabajar', 'silla electrica', 'Judas Priest', 'puerta', 'ventana', 'windows', 'zepelín', 'atónito', 'acletismo', 'Tyrannosaurus rex',
        'anticonstitucionalmente', 'absurdidad', 'apoplejía', 'inexorable', 'reconcomio', 'procrastinación', 'serendipia', 'epistemología', 'cacofonía', 'onírico',
        'inescrutable', 'hermenéutica', 'horizonte', 'polifonía', 'hipérbole','cacofonía', 'anacoluto', 'ineludible', 'prestidigitación', 'loquaz',
        'zephyr', 'hipotético', 'extravagante', 'panacea', 'melancolía', 'concatenación', 'metafísica', 'neologismo', 'subterfugio', 'incomprensible', 'cautivo de un sistema'
    ];

    const [randomWord, setRandomWord] = useState('');
    const [time, setTime] = useState(10);
    const [score, setScore] = useState(0);
    const [input, setInput] = useState('');
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const random = Math.floor(Math.random() * words.length);
        setRandomWord(words[random]);
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

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);

        if (value === randomWord) {
            setTime((prevTime) => prevTime + 3); // Agregar 3 segundos al tiempo
            setInput('');
            const random = Math.floor(Math.random() * words.length);
            setRandomWord(words[random]);
            setScore((prevScore) => prevScore + 1);
        }
    };

    const restartGame = () => {
        setGameOver(false);
        setTime(10);
        setScore(0);
        setInput('');
        const random = Math.floor(Math.random() * words.length);
        setRandomWord(words[random]);
    };

    return (
        <div>
            <div className="container body-juego-palabras text-light">
                {!gameOver ? (
                    <div className="main">
                        <h2>⌨️ TYPER 3000 ⌨️</h2>
                        <p>Escribí la siguiente palabra:</p>
                        <h1 id="randomWord">{randomWord}</h1>
                        <input
                            type="text"
                            id="text"
                            value={input}
                            onChange={handleInputChange}
                            autoComplete="off"
                            placeholder="Type the word here..."
                        />
                        <p className="time-container">Tiempo restante: <span id="timeSpan">{time}s</span></p>
                        <p className="score-container">Score: <span id="score">{score}</span></p>
                    </div>
                ) : (
                    <div id="end-game-container" className="end-game-container">
                        <h1>¡Tiempo terminado!</h1>
                        <p>Tu puntuación final es {score}</p>
                        <Link to="/">
                            <button className='text-light mt-3'>Volver al inicio</button>
                        </Link>
                        <br />
                        <button className='text-light mt-5' onClick={restartGame}>Jugar de nuevo</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JuegoPalabras;
