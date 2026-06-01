import { useState } from 'react';
import { candidatos, Candidato } from '../data/database';
import { searchProposals, SearchResult } from '../utils/searchEngine';

const CondorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C35 10 15 25 10 45C5 65 15 80 15 80L25 65L50 90L75 65L85 80C85 80 95 65 90 45C85 25 65 10 50 10Z" fill="#1C2B39"/>
    <path d="M50 25C40 25 30 35 30 35C30 35 25 45 30 55C35 65 50 70 50 70C50 70 65 65 70 55C75 45 70 35 70 35C70 35 60 25 50 25Z" fill="#F4F6F8"/>
  </svg>
);

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeTab, setActiveTab] = useState<'segunda' | 'generales'>('segunda');
  
  const [selectedCandidates, setSelectedCandidates] = useState<Record<string, boolean>>(
    candidatos.reduce((acc: Record<string, boolean>, c: Candidato) => ({ ...acc, [c.candidato]: true }), {})
  );

  const ejecutarBusqueda = (termino: string) => {
    setHasSearched(true);
    const allResults = searchProposals(termino);
    
    const filtered = allResults.filter(result => {
      const candInfo = candidatos.find((c: Candidato) => c.candidato === result.candidato);
      if (activeTab === 'segunda' && candInfo?.fase !== 'segunda_vuelta') return false;
      return selectedCandidates[result.candidato];
    });
    
    setSearchResults(filtered);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ejecutarBusqueda(query);
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    ejecutarBusqueda(tag);
  };

  const toggleCandidate = (nombre: string) => {
    setSelectedCandidates(prev => ({ ...prev, [nombre]: !prev[nombre] }));
  };

  const candidatosSegunda = candidatos.filter((c: Candidato) => c.fase === 'segunda_vuelta');
  const candidatosGenerales = candidatos;

  const sugerencias = ['Pensiones', 'Trabajo', 'Seguridad', 'EPS', 'Universidad', 'Campo', 'IA', 'Vías'];

  return (
    <div className="min-h-screen bg-[#F4F6F8] text-[#1C2B39] flex flex-col items-center justify-start antialiased font-sans">
      
      <div className="w-full h-1.5 flex">
        <div className="w-1/3 bg-[#FCD116]"></div>
        <div className="w-1/3 bg-[#003893]"></div>
        <div className="w-1/3 bg-[#CE1126]"></div>
      </div>

      <header className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white shadow-sm mb-10">
        <div className="flex items-center gap-3">
          <CondorIcon />
          <h1 className="text-xl md:text-2xl font-black text-[#1C2B39] tracking-tighter">
            INFORMADOR POLÍTICO <span className="font-light text-gray-400">COLOMBIA</span>
          </h1>
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium text-gray-600">
          <span className="cursor-pointer text-[#003893] border-b-2 border-[#003893] pb-1">Buscador</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400">Fuente Neutral de Control</span>
        </nav>
      </header>

      <div className="w-full max-w-5xl bg-white border border-gray-200 p-6 rounded-2xl text-sm mb-10 shadow-lg relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
          <div>
            <p className="font-bold text-[#1C2B39] text-lg mb-1 tracking-tight">⚖️ Transparencia Electoral Independiente</p>
            <p className="text-gray-600">Iniciativa académica de control ciudadano desarrollada por <strong>Sebastian Mendoza</strong>.</p>
          </div>
          <div className="bg-[#F4F6F8] px-4 py-2 rounded-xl border border-gray-200 font-mono text-xs text-gray-700 font-medium">
            📋 Datos oficiales sin modificaciones
          </div>
        </div>
        <p className="mt-4 text-gray-500 text-xs md:text-sm border-t border-gray-100 pt-4 leading-relaxed font-normal">
          <strong className="text-gray-800 font-semibold">Garantía de Imparcialidad:</strong> Esta plataforma utiliza algoritmos de procesamiento de texto estructurado para mapear los documentos de plan de gobierno oficiales radicados por las agrupaciones políticas. El portal web no contiene juicios de valor, publicidad política pagada ni interpretaciones editoriales de las propuestas.
        </p>
      </div>

      <main className="w-full max-w-5xl flex-1 flex flex-col gap-8 px-4 mb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => { setActiveTab('segunda'); setHasSearched(false); setSearchResults([]); }}
            className={`p-6 rounded-2xl text-center border-2 transition-all flex flex-col items-center justify-center gap-2 ${
              activeTab === 'segunda'
                ? 'bg-[#1C2B39] text-white shadow-xl border-[#1C2B39]'
                : 'bg-white text-gray-600 hover:border-gray-300 border-gray-200 shadow-md'
            }`}
          >
            <span className="text-3xl">🗳️</span>
            <span className="text-sm font-bold tracking-tight">Segunda Vuelta Presidencial</span>
          </button>
          <button
            onClick={() => { setActiveTab('generales'); setHasSearched(false); setSearchResults([]); }}
            className={`p-6 rounded-2xl text-center border-2 transition-all flex flex-col items-center justify-center gap-2 ${
              activeTab === 'generales'
                ? 'bg-[#1C2B39] text-white shadow-xl border-[#1C2B39]'
                : 'bg-white text-gray-600 hover:border-gray-300 border-gray-200 shadow-md'
            }`}
          >
            <span className="text-3xl">🗂️</span>
            <span className="text-sm font-bold tracking-tight">Registro Histórico de Candidatos</span>
          </button>
        </div>

        <section className="w-full bg-white border border-gray-200 p-6 rounded-2xl shadow-lg">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Filtrar por Candidato Oficial:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(activeTab === 'segunda' ? candidatosSegunda : candidatosGenerales).map((c: Candidato) => {
              const isSelected = selectedCandidates[c.candidato];
              return (
                <button
                  key={c.candidato}
                  type="button"
                  onClick={() => toggleCandidate(c.candidato)}
                  className={`p-5 rounded-xl border-2 text-left flex items-center justify-between transition-all gap-4 ${
                    isSelected && (activeTab !== 'segunda' || c.fase === 'segunda_vuelta')
                      ? 'bg-white border-[#003893] shadow-md'
                      : 'bg-[#F4F6F8] border-gray-200 text-gray-400 hover:border-gray-300'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-[#003893]' : 'text-gray-500'}`}>{c.partido}</span>
                    <span className={`block text-lg font-black tracking-tighter truncate w-full mt-0.5 ${isSelected ? 'text-[#1C2B39]' : 'text-gray-600'}`}>{c.candidato}</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${isSelected ? 'bg-[#003893] text-white border-[#003893]' : 'border-gray-300'}`}>
                    {isSelected ? '✓' : ''}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <div className="w-full space-y-4">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row bg-white border-2 border-gray-200 rounded-2xl p-2 shadow-xl focus-within:ring-4 focus-within:ring-[#003893]/10 focus-within:border-[#003893] transition-all gap-2 sm:gap-0">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busca un concepto político general (ej: pensiones, seguridad, campo...)"
                className="w-full px-5 py-4 bg-transparent text-[#1C2B39] placeholder-gray-400 focus:outline-none text-base md:text-lg font-medium"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#1C2B39] hover:bg-black text-white font-bold rounded-xl transition-colors text-base tracking-tight shadow-md whitespace-nowrap"
              >
                Buscar Datos Oficiales
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center gap-2 px-1">
            <span className="text-xs text-gray-400 font-medium mr-1 uppercase tracking-wider">Conceptos sugeridos:</span>
            {sugerencias.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className="bg-white hover:bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full border border-gray-200 transition-colors font-medium shadow-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <section className="space-y-6 mb-20">
          {hasSearched && (
            <div className="text-sm text-gray-600 font-medium tracking-tight px-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CE1126]"></span>
              Resultados obtenidos: {searchResults.length} coincidencia(s).
            </div>
          )}

          {searchResults.length > 0 ? (
            searchResults.map((result, idx) => (
              <div key={idx} className="p-6 border border-gray-200 bg-white rounded-2xl shadow-lg relative flex flex-col justify-between transition-all hover:shadow-2xl">
                <span className="sm:absolute top-0 right-0 bg-[#F4F6F8] text-gray-700 text-[11px] font-mono font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-2xl border-b border-l border-gray-200 self-start sm:self-auto mb-3 sm:mb-0">
                  REPORTE CONTROL: PÁG. {result.pagina}
                </span>
                <div className="mb-4 pr-28">
                  <h3 className="text-xl font-black text-[#1C2B39] tracking-tighter">{result.candidato}</h3>
                  <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">
                    {result.partido} • Tema: <span className="text-[#003893] font-bold">{result.tema.replace('_', ' ')}</span>
                  </p>
                </div>
                <p className="text-gray-800 text-base bg-[#F4F6F8] p-5 rounded-xl border border-gray-100 leading-relaxed font-normal">
                  "{result.texto}"
                </p>
              </div>
            ))
          ) : (
            hasSearched && query.trim() !== '' && (
              <div className="text-center py-16 bg-white rounded-2xl border-2 border-gray-200 text-gray-500 text-base px-6 shadow-md font-medium">
                ℹ️ No se localizaron coincidencias bajo el concepto ingresado. Intenta con un término relacionado.
              </div>
            )
          )}
        </section>
      </main>

      <footer className="w-full bg-[#1C2B39] text-gray-400 text-xs py-6 px-6 text-center font-medium border-t border-black mt-auto">
        Plataforma académica e independiente de consulta ciudadana. Información oficial basada en los planes de gobierno vigentes. 2026.
      </footer>

    </div>
  );
}