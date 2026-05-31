import { useState } from 'react';
import { candidatos, Candidato } from '../data/database';
import { searchProposals, SearchResult } from '../utils/searchEngine';

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeTab, setActiveTab] = useState<'segunda' | 'generales'>('segunda');
  
  // Filtro interno para el motor
  const [selectedCandidates, setSelectedCandidates] = useState<Record<string, boolean>>(
    candidatos.reduce((acc, c) => ({ ...acc, [c.candidato]: true }), {})
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const allResults = searchProposals(query);
    
    // Filtrar según la pestaña activa y los seleccionados
    const filtered = allResults.filter(result => {
      const candInfo = candidatos.find(c => c.candidato === result.candidato);
      if (activeTab === 'segunda' && candInfo?.fase !== 'segunda_vuelta') return false;
      return selectedCandidates[result.candidato];
    });
    
    setSearchResults(filtered);
  };

  const toggleCandidate = (nombre: string) => {
    setSelectedCandidates(prev => ({ ...prev, [nombre]: !prev[nombre] }));
  };

  // Filtrar candidatos para mostrar en la interfaz según el apartado
  const candidatosSegunda = candidatos.filter(c => c.fase === 'segunda_vuelta');
  const candidatosGenerales = candidatos;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-start px-4 py-6 md:py-12 antialiased selection:bg-slate-200">
      
      {/* SECCIÓN DE TRANSPARENCIA EDITORIAL INDEPENDIENTE */}
      <div className="w-full max-w-4xl bg-slate-900 text-slate-100 p-4 rounded-2xl text-xs md:text-sm mb-8 shadow-md border border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <p className="font-bold text-white mb-0.5">⚖️ Proyecto de Pedagogía Ciudadana Neutral</p>
            <p className="text-slate-400">Desarrollado de manera independiente por el estudiante <strong>Sebastian Mendoza</strong>.</p>
          </div>
          <div className="bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 font-mono text-[11px] text-slate-300">
            🤖 Procesado con IA bajo estrictas auditorías antisesgo
          </div>
        </div>
        <p className="mt-3 text-slate-400 text-[11px] md:text-xs border-t border-slate-800 pt-2.5 leading-relaxed">
          <strong className="text-amber-400">Aviso legal y neutralidad:</strong> Esta plataforma utiliza modelos de lenguaje para estructurar y facilitar la búsqueda sobre los planes de gobierno originales. No emite juicios de valor ni prefiere candidatos. Se invita firmemente al ciudadano a descargar y confrontar los documentos oficiales correspondientes.
        </p>
      </div>

      {/* ENCABEZADO */}
      <header className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
          Informador Político
        </h1>
        <p className="text-slate-500 text-sm md:text-base">
          Análisis indexado de propuestas presidenciales mediante minería de datos.
        </p>
      </header>

      {/* NAVEGACIÓN POR APARTADOS (PESTANAS) */}
      <div className="w-full max-w-3xl bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm flex mb-6">
        <button
          onClick={() => { setActiveTab('segunda'); setHasSearched(false); setSearchResults([]); }}
          className={`w-1/2 py-3 rounded-xl text-xs md:text-sm font-bold transition-all text-center flex items-center justify-center gap-2 ${
            activeTab === 'segunda'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          ⚡ Segunda Vuelta Presidencial
        </button>
        <button
          onClick={() => { setActiveTab('generales'); setHasSearched(false); setSearchResults([]); }}
          className={`w-1/2 py-3 rounded-xl text-xs md:text-sm font-bold transition-all text-center flex items-center justify-center gap-2 ${
            activeTab === 'generales'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          📂 Todos los Candidatos (Histórico)
        </button>
      </div>

      <main className="w-full max-w-3xl flex-1 flex flex-col gap-6">

        {/* APARTADO DINÁMICO DE FILTROS DEPENDIENDO DE LA PESTAÑA */}
        <section className="w-full bg-white border border-slate-200 p-4 md:p-5 rounded-2xl shadow-sm">
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
            {activeTab === 'segunda' ? '🎯 Candidatos en contienda final:' : '🔍 Selecciona qué candidatos indexar en la búsqueda:'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {(activeTab === 'segunda' ? candidatosSegunda : candidatosGenerales).map((c: Candidato) => {
              const isSelected = selectedCandidates[c.candidato];
              return (
                <button
                  key={c.candidato}
                  type="button"
                  onClick={() => toggleCandidate(c.candidato)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    isSelected && (activeTab !== 'segunda' || c.fase === 'segunda_vuelta')
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <span className="text-[9px] font-extrabold uppercase tracking-wider opacity-75">{c.partido}</span>
                  <span className="text-sm font-bold truncate w-full mt-0.5">{c.candidato}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* BARRA DE BÚSQUEDA */}
        <form onSubmit={handleSearch} className="w-full">
          <div className="flex flex-col sm:flex-row bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-slate-900 transition-all gap-2 sm:gap-0">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Escribe un tema de interés (ej: salud, pensiones, seguridad...)"
              className="w-full px-4 py-3 bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-sm md:text-base"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm shadow-sm whitespace-nowrap"
            >
              Consultar Datos
            </button>
          </div>
        </form>

        {/* RESULTADOS DE LA BÚSQUEDA */}
        <section className="space-y-4 mb-12">
          {searchResults.length > 0 ? (
            searchResults.map((result, idx) => (
              <div key={idx} className="p-5 border border-slate-200 bg-white rounded-2xl shadow-sm relative flex flex-col justify-between">
                <span className="sm:absolute top-0 right-0 bg-slate-100 text-slate-600 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md sm:rounded-none sm:rounded-bl-xl border border-slate-200 self-start sm:self-auto mb-2 sm:mb-0">
                  PÁG. DE CONTROL: {result.pagina}
                </span>
                <div className="mb-3 pr-24">
                  <h3 className="text-base font-extrabold text-slate-900">{result.candidato}</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {result.partido} • Eje: <span className="capitalize text-slate-800 font-bold">{result.tema.replace('_', ' ')}</span>
                  </p>
                </div>
                <p className="text-slate-700 text-sm bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed font-normal italic">
                  "{result.texto}"
                </p>
              </div>
            ))
          ) : (
            hasSearched && query.trim() !== '' && (
              <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 text-slate-400 text-sm px-4">
                ℹ️ No se detectaron propuestas explícitas con esa palabra clave para los candidatos seleccionados en este apartado. Intenta reduciendo el término.
              </div>
            )
          )}
        </section>
      </main>
    </div>
  );
}