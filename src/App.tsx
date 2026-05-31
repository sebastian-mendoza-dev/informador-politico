import Home from './pages/Home'; // O './components/Home' según donde esté tu página principal
import Compare from './pages/Compare';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Scale, Search } from 'lucide-react';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <nav className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight focus:outline-none">
              <Scale className="w-5 h-5 text-slate-400" />
              <span>Informador Político</span>
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors">
                <Search className="w-4 h-4" /> Buscar
              </Link>
              <Link to="/comparar" className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors">
                <Scale className="w-4 h-4" /> Comparar
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comparar" element={<Compare />} />
          </Routes>
        </main>

        <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4">
            <p>Plataforma independiente y neutral de consulta ciudadana. Información basada estrictamente en documentos públicos oficiales.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}