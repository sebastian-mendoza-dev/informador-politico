import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Cambiamos la ruta de importación a la raíz del paquete para resolver el error de tipado
import { Analytics } from '@vercel/analytics';

export default function App() {
  return (
    <Router>
      {/* Contenedor raíz totalmente limpio, institucional y gris neutro */}
      <div className="min-h-screen bg-[#F4F6F8] text-[#1C2B39] font-sans antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      
      {/* Inyectamos el componente de analíticas de Vercel. */}
      <Analytics />
    </Router>
  );
}