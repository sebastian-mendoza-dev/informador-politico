import { useState } from 'react';
import { candidatos, Candidato } from '../data/database';
import { searchProposals, SearchResult } from '../utils/searchEngine';

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Estado para controlar qué candidatos están activos en la búsqueda
  const [selectedCandidates, setSelectedCandidates] = useState<Record<string, boolean>>(
    candidatos.reduce((acc, c) => ({ ...acc, [c.candidato]: true }), {})
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const allResults = searchProposals(query);
    const filtered = allResults.filter(result => selectedCandidates[result.candidato]);
    setSearchResults(filtered);
  };

  const toggleCandidate = (nombre: string) => {
    setSelectedCandidates(prev => ({ ...prev, [nombre]: !prev[nombre] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-850 flex flex-col items-center justify-start px-3 sm:px-6 py-4 md:py-8 selection:bg-slate-200 antialiased">
      
      {/* CINTA SUPERIOR: RESPONSIVA Y DISCRETA */}
      <div className="w-full max-w-4xl bg-slate-900 text-slate-100 px-3 py-2 rounded-xl text-center text-xs font-medium mb-6 shadow-sm leading-tight">
        ⚖️ Espacio de pedagogía electoral independiente para la Segunda Vuelta Presidencial. Sin afiliación política.
      </div>

      {/* ENCABEZADO INSTITUCIONAL */}
      <header className="w-full max-w-3xl text-center mb-8 px-2">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-2">
          Informador Político Colombia
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Consulta y contrasta los programas de gobierno oficiales radicados ante la Registraduría.
        </p>
      </header>

      <main className="w-full max-w-3xl flex-1 flex flex-col gap-5 sm:gap-6">
        
        {/* NUEVA SECCIÓN DEFECTO: TARJETÓN SEGUNDA VUELTA (CARA A CARA) */}
        <section className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              ⚡ Decisión Final: Segunda Vuelta
            </h2>
            <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
              Junio 2026
            </span>
          </div>

          {/* CUADRICULA RESPONSIVA: 1 COLUMNA EN MÓVIL, 2 EN ESCRITORIO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {candidatos.slice(0, 2).map((c: Candidato) => {
              const isActive = selectedCandidates[c.candidato];
              return (
                <div 
                  key={c.candidato}
                  onClick={() => toggleCandidate(c.candidato)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                    isActive 
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm' 
                      : 'bg-slate-50 border-slate-200 text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className={`text-[9px] font-extrabold uppercase tracking-widest ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                      {c.partido}
                    </span>
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[8px] ${isActive ? 'border-white bg-white text-slate-900' : 'border-slate-300'}`}>
                      {isActive && '✓'}
                    </div>
                  </div>
                  <h3 className="text-base font-bold tracking-tight truncate">{c.candidato}</h3>
                  <p className={`text-[10px] mt-1 italic ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                    {isActive ? '✓ Incluido en tu motor de búsqueda' : '✕ Excluido de la búsqueda'}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-[11px] text-slate-400 text-center mt-3">
            💡 Toca el tarjetón de cualquier candidato para activarlo o desactivarlo de los resultados.
          </p>
        </section>

        {/* BARRA DE BÚSQUEDA FLUIDA */}
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-slate-900 focus-within:border-transparent transition-all gap-1.5 sm:gap-0">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Escribe para buscar (pensiones, salud, seguridad, IVA...)"
              className="w-full px-4 py-3 sm:py-2 bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-sm sm:text-base order-1"
            />
            <button
              type="submit"
              className="px-5 py-3 sm:py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors text-sm shadow-sm order-2 sm:order-2"
            >
              Buscar Propuestas
            </button>
          </div>
        </form>

        {/* CONTENEDOR DE RESULTADOS RESPONSIVOS */}
        <section className="space-y-3 sm:space-y-4 mb-8">
          {searchResults.length > 0 ? (
            searchResults.map((result, idx) => (
              <div 
                key={idx} 
                className="p-4 sm:p-5 border border-slate-200 bg-white rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between"
              >
                {/* Meta Ubicación: Ajustada para pantallas pequeñas */}
                <span className="sm:absolute top-0 right-0 bg-slate-100 text-slate-600 text-[9px] font-mono font-bold px-2 py-1 rounded-md sm:rounded-none sm:rounded-bl-xl border sm:border-l sm:border-b border-slate-200 self-start sm:self-auto mb-2 sm:mb-0">
                  DOCUMENTO OFICIAL • PÁG. {result.pagina}
                </span>
                
                {/* Autor e información */}
                <div className="mb-2 sm:pr-28">
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {result.candidato}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {result.partido} • Tema: <span className="capitalize text-slate-700 font-bold">{result.tema.replace('_', ' ')}</span>
                  </p>
                </div>
                
                {/* Bloque de texto responsivo */}
                <p className="text-slate-700 text-xs sm:text-sm bg-slate-50 p-3 rounded-xl border border-slate-200/60 leading-relaxed font-normal italic">
                  "{result.texto}"
                </p>
              </div>
            ))
          ) : (
            hasSearched && query.trim() !== '' && (
              <div className="text-center py-8 px-4 bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs sm:text-sm">
                ℹ️ No se encontraron coincidencias exactas para los criterios seleccionados. Intenta con un término más corto (ej. "empleo" en lugar de "generación de trabajo").
              </div>
            )
          )}
        </section>

        {/* SECCIÓN TRANSPARENCIA ABAJO PARA NO QUITARLE VISIBILIDAD AL BUSCADOR */}
        <section className="w-full bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl shadow-sm">
          <h2 className="text-xs sm:text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-1.5 border-b border-slate-100 pb-2">
            📋 Protocolo de Transparencia y Datos
          </h2>
          <div className="flex flex-col gap-3 text-xs text-slate-600 leading-relaxed">
            <p>
              Esta plataforma es gestionada de manera independiente por <strong className="text-slate-800">Sebastian Mendoza</strong>. El procesamiento, organización de temáticas y extracción de fragmentos de texto se ejecutan mediante modelos de Inteligencia Artificial controlados.
            </p>
            <p className="bg-amber-50 text-amber-950 p-3 rounded-xl border border-amber-200 font-medium text-[11px]">
              ⚠️ <strong className="text-amber-900">Nota Ciudadana:</strong> A pesar de las auditorías de datos, el software puede procesar variaciones. Se invita formalmente al electorado a descargar y estudiar los PDF oficiales presentados ante el consejo electoral para la validación definitiva de su voto.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-center text-[10px] text-slate-400 font-mono">
            Informador Político v2.0 • Código Abierto Pedagógico
          </div>
        </section>

      </main>
    </div>
  );
}