import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componentes/Paginas/Home';
import JuegoCuadrado from './Componentes/Paginas/JuegoCuadrado';
import JuegoPalabras from './Componentes/Paginas/JuegoPalabras';
import JuegoColores from './Componentes/Paginas/JuegoColores';

function App() {
  return (
    <BrowserRouter>
      {/* Aquí puedes incluir tu Navbar o Footer si los necesitas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego-cuadrado" element={<JuegoCuadrado />} />
        <Route path="/juego-palabras" element={<JuegoPalabras />} />
        <Route path="/juego-colores" element={<JuegoColores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
