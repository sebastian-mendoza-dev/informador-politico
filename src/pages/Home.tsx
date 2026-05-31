import { useState } from 'react';
import { candidatos, Candidato } from '../data/database';
import { searchProposals, SearchResult } from '../utils/searchEngine';

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  
  // Estado para controlar qué candidatos están seleccionados en el filtro
  // Inicialmente todos están seleccionados (true)
  const [selectedCandidates, setSelectedCandidates] = useState<Record<string, boolean>>(
    candidatos.reduce((acc, c) => ({ ...acc, [c.candidato]: true }), {})
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Obtenemos todos los resultados del motor de búsqueda
    const allResults = searchProposals(query);
    
    // 2. Filtramos los resultados para mostrar solo los de los candidatos seleccionados
    const filtered = allResults.filter(result => selectedCandidates[result.candidato]);
    
    setSearchResults(filtered);
  };

  // Alternar el estado de selección de un candidato en el filtro
  const toggleCandidate = (nombre: string) => {
    setSelectedCandidates(prev => ({
      ...prev,
      [nombre]: !prev[nombre]
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-start p-6">
      
      {/* ENCABEZADO PRINCIPAL */}
      <header className="w-full max-w-4xl text-center my-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
          Informador Político
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
          Plataforma independiente y neutral de consulta ciudadana. Información basada estrictamente en documentos públicos oficiales.
        </p>
      </header>

      <main className="w-full max-w-3xl flex-1">
        
        {/* TARJETA EXPLICATIVA DEL PROYECTO */}
        <div className="w-full bg-slate-800/60 border border-slate-700/50 p-6 rounded-2xl mb-8 shadow-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold text-indigo-400 mb-3 flex items-center gap-2">
            🤔 ¿Qué es Informador Político?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Informador Político</strong> es una plataforma experimental e independiente que recopila y organiza propuestas de programas de gobierno de forma neutral y transparente. Nuestro objetivo es facilitar el acceso a la información pública para que cualquier ciudadano pueda consultar, buscar y comparar propuestas directamente desde las fuentes oficiales.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Actualmente, esta plataforma se encuentra en fase beta. A futuro, buscamos evolucionar hacia una herramienta de seguimiento ciudadano que permita contrastar las propuestas presentadas durante las campañas con los avances reales de los planes de desarrollo y compromisos de gobierno. Información del pueblo, para el pueblo.
          </p>
        </div>

        {/* NUEVA SECCIÓN: FILTRO PERSONALIZADO DE CANDIDATOS */}
        <div className="w-full bg-slate-800/40 border border-slate-700/40 p-5 rounded-2xl mb-6">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            🎯 Selecciona qué candidatos quieres incluir en la búsqueda:
          </label>
          <div className="flex flex-wrap gap-3">
            {candidatos.map((c: Candidato) => (
              <button
                key={c.candidato}
                type="button"
                onClick={() => toggleCandidate(c.candidato)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${
                  selectedCandidates[c.candidato]
                    ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                    : 'bg-slate-800 border-slate-700 text-slate-500 hover:border-slate-600'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${selectedCandidates[c.candidato] ? 'bg-indigo-400' : 'bg-slate-600'}`} />
                <div>
                  <span className="block text-left text-slate-200">{c.candidato}</span>
                  <span className="block text-[10px] font-normal opacity-60 text-left">{c.partido}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* BARRA DE BÚSQUEDA */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Escribe para buscar (ejemplo: EPS, IVA, seguridad, fracking, empleo...)"
              className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg shadow-xl transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors shadow-md text-sm"
            >
              Buscar
            </button>
          </div>
        </form>

        {/* CONTENEDOR DE RESULTADOS */}
        <div className="space-y-4 mb-16">
          {searchResults.length > 0 ? (
            searchResults.map((result, idx) => (
              <div 
                key={idx} 
                className="p-6 border border-slate-700/60 bg-slate-800/80 rounded-2xl hover:bg-slate-800 hover:border-slate-600 transition-all relative overflow-hidden group shadow-sm"
              >
                {/* Número de página oficial */}
                <span className="absolute top-0 right-0 bg-indigo-950/80 text-indigo-300 text-xs px-3 py-1 rounded-bl-xl font-semibold border-l border-b border-slate-700">
                  Pág. {result.pagina}
                </span>
                
                {/* Metadatos del Candidato */}
                <div className="mb-3 pr-16">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {result.candidato}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    {result.partido} • <span className="capitalize text-indigo-300 font-semibold">{result.tema.replace('_', ' ')}</span>
                  </p>
                </div>
                
                {/* Texto exacto de la propuesta */}
                <p className="text-slate-200 font-normal text-sm md:text-base leading-relaxed bg-slate-900/30 p-3 rounded-xl border border-slate-750">
                  {result.texto}
                </p>
              </div>
            ))
          ) : (
            query.trim() !== '' && (
              <div className="text-center py-12 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700 text-slate-400">
                🔍 No se encontraron propuestas para los candidatos seleccionados. Intenta cambiar los filtros o usar palabras clave más simples.
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}