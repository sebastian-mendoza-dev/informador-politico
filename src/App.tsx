import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  useEffect(() => {
    // Inicialización nativa directa usando el objeto global de producción
    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore - Evita que TypeScript moleste por la propiedad va
        if (!window.va) {
          // @ts-ignore
          window.va = function () {
            // @ts-ignore
            (window.vaq = window.vaq || []).push(arguments);
          };
        }
      }
    } catch (e) {
      console.error("Error cargando analíticas:", e);
    }
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