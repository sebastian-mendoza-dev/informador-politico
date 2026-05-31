import { useState } from 'react';
import { searchProposals, SearchResult } from '../utils/searchEngine';

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = searchProposals(query);
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-start p-6">
      
      {/* ENCABEZADO PRINCIPAL */}
      <header className="w-full max-w-4xl text-center my-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
          Informador Político
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          Consulta, busca y compara de forma transparente las propuestas y planes de gobierno oficiales para las Elecciones 2026.
        </p>
      </header>

      {/* BARRA DE BÚSQUEDA */}
      <main className="w-full max-w-3xl flex-1">
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
                🔍 No se encontraron propuestas que coincidan exactamente con tu búsqueda. Prueba con palabras clave más simples.
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}