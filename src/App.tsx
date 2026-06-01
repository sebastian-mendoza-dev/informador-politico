import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Importamos el script de inicialización nativo
import { inject } from '@vercel/analytics';

export default function App() {
  // Inicializamos las analíticas de forma segura una vez se monte la aplicación
  useEffect(() => {
    inject();
  }, []);

  return (
    <Router>
      {/* Contenedor raíz totalmente limpio, institucional y gris neutro */}
      <div className="min-h-screen bg-[#F4F6F8] text-[#1C2B39] font-sans antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}