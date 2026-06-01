import { useState } from 'react';
import { candidatos, Candidato } from '../data/database';
import { searchProposals, SearchResult } from '../utils/searchEngine';

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

  // Sugerencias rápidas para el usuario
  const sugerencias = ['Pensiones', 'Trabajo', 'Seguridad', 'EPS', 'Universidad', 'Campo', 'IA', 'Vías'];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 flex flex-col items-center justify-start px-4 py-6 md:py-12 font-sans tracking-normal antialiased selection:bg-stone-200">
      
      {/* BANNER INFORMATIVO NEUTRO DE CONTROL */}
      <div className="w-full max-w-4xl bg-stone-900 text-stone-100 p-5 rounded-xl text-xs md:text-sm mb-8 shadow-sm border border-stone-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <p className="font-semibold text-stone-100 text-sm mb-0.5 tracking-tight">⚖️ Transparencia Electoral Independiente</p>
            <p className="text-stone-400">Iniciativa académica estructurada de forma autónoma por <strong>Sebastian Mendoza</strong>.</p>
          </div>
          <div className="bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700 font-mono text-[11px] text-stone-300">
            📊 Datos indexados sin edición
          </div>
        </div>
        <p className="mt-3 text-stone-400 text-[11px] md:text-xs border-t border-stone-800 pt-2.5 leading-relaxed font-normal">
          <strong className="text-stone-200 font-medium">Cláusula de imparcialidad:</strong> Esta plataforma web utiliza minería de datos estructurada para mapear los planes de gobierno oficiales radicados ante los organismos competentes. No emite juicios ponderados, publicidad ni sesgos de opinión. Se sugiere validar el texto frente a la documentación oficial.
        </p>
      </div>

      {/* ENCABEZADO CON FUENTE LIMPIA */}
      <header className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-2">
          INFORMADOR POLÍTICO
        </h1>
        <p className="text-stone-500 text-xs md:text-sm font-medium uppercase tracking-widest">
          Buscador de Propuestas Presidenciales Oficiales
        </p>
      </header>

      {/* TABS DE NAVEGACIÓN EN TONOS PIEDRA NEUTROS */}
      <div className="w-full max-w-3xl bg-stone-200/60 border border-stone-300/40 p-1 rounded-xl shadow-inner flex mb-6">
        <button
          onClick={() => { setActiveTab('segunda'); setHasSearched(false); setSearchResults([]); }}
          className={`w-1/2 py-3 rounded-lg text-xs md:text-sm font-bold transition-all text-center tracking-tight ${
            activeTab === 'segunda'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          🗳️ Segunda Vuelta Presidencial
        </button>
        <button
          onClick={() => { setActiveTab('generales'); setHasSearched(false); setSearchResults([]); }}
          className={`w-1/2 py-3 rounded-lg text-xs md:text-sm font-bold transition-all text-center tracking-tight ${
            activeTab === 'generales'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          🗂️ Registro General Histórico
        </button>
      </div>

      <main className="w-full max-w-3xl flex-1 flex flex-col gap-6">

        {/* CONTENEDOR DE FILTROS POR CANDIDATO */}
        <section className="w-full bg-white border border-stone-200 p-4 md:p-5 rounded-xl shadow-sm">
          <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">
            {activeTab === 'segunda' ? 'Candidatos en contienda final:' : 'Selecciona los candidatos a incluir en la consulta:'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {(activeTab === 'segunda' ? candidatosSegunda : candidatosGenerales).map((c: Candidato) => {
              const isSelected = selectedCandidates[c.candidato];
              return (
                <button
                  key={c.candidato}
                  type="button"
                  onClick={() => toggleCandidate(c.candidato)}
                  className={`p-3 rounded-lg border text-left flex flex-col justify-between transition-all ${
                    isSelected && (activeTab !== 'segunda' || c.fase === 'segunda_vuelta')
                      ? 'bg-stone-800 border-stone-800 text-white shadow-sm'
                      : 'bg-stone-50 border-stone-200 text-stone-400 hover:border-stone-300'
                  }`}
                >
                  <span className="text-[9px] font-bold uppercase tracking-wider opacity-60">{c.partido}</span>
                  <span className="text-sm font-bold tracking-tight truncate w-full mt-0.5">{c.candidato}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* INPUT DE BÚSQUEDA MINIMALISTA Y TEMAS DE INTERÉS */}
        <div className="w-full space-y-3">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row bg-white border border-stone-200 rounded-xl p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-stone-900 focus-within:border-stone-900 transition-all gap-2 sm:gap-0">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busca conceptos generales políticos (ej: pensiones, fuerza pública, campo...)"
                className="w-full px-4 py-3 bg-transparent text-stone-900 placeholder-stone-400 focus:outline-none text-sm md:text-base font-normal"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-lg transition-colors text-sm tracking-tight shadow-sm whitespace-nowrap"
              >
                Buscar Datos
              </button>
            </div>
          </form>

          {/* ETIQUETAS DE ACCESO RÁPIDO */}
          <div className="flex flex-wrap items-center gap-1.5 px-1">
            <span className="text-[11px] text-stone-400 font-medium mr-1 uppercase tracking-wider">Sugeridos:</span>
            {sugerencias.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className="bg-stone-200/50 hover:bg-stone-200 text-stone-700 text-xs px-2.5 py-1 rounded-md border border-stone-300/30 transition-colors font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* TARJETAS DE RESULTADO COMPLETAMENTE CORREGIDAS EN VISIBILIDAD */}
        <section className="space-y-4 mb-12">
          {hasSearched && (
            <div className="text-xs text-stone-500 font-mono tracking-tight px-1">
              Resultados obtenidos: {searchResults.length} coincidencia(s).
            </div>
          )}

          {searchResults.length > 0 ? (
            searchResults.map((result, idx) => (
              <div key={idx} className="p-5 border border-stone-200 bg-white rounded-xl shadow-sm relative flex flex-col justify-between transition-all hover:border-stone-300">
                <span className="sm:absolute top-0 right-0 bg-stone-100 text-stone-600 text-[10px] font-mono font-bold px-2.5 py-1 rounded border-b border-l border-stone-200 self-start sm:self-auto mb-2 sm:mb-0">
                  REPORTE CONTROL: PÁG. {result.pagina}
                </span>
                <div className="mb-3 pr-24">
                  <h3 className="text-base font-black text-stone-900 tracking-tight">{result.candidato}</h3>
                  <p className="text-xs text-stone-500 font-medium mt-0.5 uppercase tracking-wider">
                    {result.partido} • Eje: <span className="text-stone-800 font-bold">{result.tema.replace('_', ' ')}</span>
                  </p>
                </div>
                <p className="text-stone-800 text-sm bg-stone-50/80 p-4 rounded-lg border border-stone-150 leading-relaxed font-normal">
                  "{result.texto}"
                </p>
              </div>
            ))
          ) : (
            hasSearched && query.trim() !== '' && (
              <div className="text-center py-12 bg-white rounded-xl border border-stone-200 text-stone-400 text-sm px-4 font-normal">
                ℹ️ No se localizaron coincidencias literales ni semánticas para el término ingresado bajo los filtros actuales. Intenta seleccionando una etiqueta sugerida.
              </div>
            )
          )}
        </section>
      </main>
    </div>
  );
}