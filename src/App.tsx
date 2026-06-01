import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Importamos el rastreador oficial de Vercel
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <Router>
      {/* Contenedor raíz totalmente limpio, institucional y gris neutro */}
      <div className="min-h-screen bg-[#F4F6F8] text-[#1C2B39] font-sans antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      
      {/* Inyectamos el componente de analíticas de Vercel.
        Mide visitas y rendimiento de forma automática y transparente.
      */}
      <Analytics />
    </Router>
  );
}