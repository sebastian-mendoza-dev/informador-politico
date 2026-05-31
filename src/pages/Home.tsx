import { useState } from 'react';
import { candidatos, Candidato } from '../data/database';
import { searchProposals, SearchResult } from '../utils/searchEngine';

export default function Home() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Filtro de candidatos dinámico
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
    <div className="min-h-screen bg-slate-50 text-slate-850 flex flex-col items-center justify-start px-4 md:px-6 py-8 selection:bg-slate-200">
      
      {/* BARRA SUPERIOR DE ALERTA NEUTRAL */}
      <div className="w-full max-w-4xl bg-slate-900 text-slate-100 px-4 py-2 rounded-xl text-xs md:text-sm text-center font-medium mb-8 shadow-sm">
        ⚖️ Espacio de pedagogía electoral independiente. Sin afiliación política ni pauta gubernamental.
      </div>

      {/* ENCABEZADO INSTITUCIONAL */}
      <header className="w-full max-w-3xl text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
          Informador Político Colombia
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Acceso estructurado a los programas de gobierno oficiales para las elecciones presidenciales.
        </p>
      </header>

      <main className="w-full max-w-3xl flex-1 flex flex-col gap-6">
        
        {/* PANEL DE TRANSPARENCIA Y POLÍTICA EDITORIAL */}
        <section className="w-full bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-150 pb-2">
            📋 Protocolo de Transparencia y Propósito
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-600 leading-relaxed">
            <div>
              <p className="mb-2">
                <strong className="text-slate-800">Propósito y Visión:</strong> Esta plataforma nace con el objetivo de democratizar el acceso a la información electoral, permitiendo a los ciudadanos buscar palabras clave e intereses directamente sobre los textos oficiales, promoviendo un voto informado basado en datos y no en narrativas de redes sociales.
              </p>
              <p>
                <strong className="text-slate-800">Uso de Inteligencia Artificial:</strong> El procesamiento, la extracción de citas textuales y la indexación de temas se realizan mediante modelos avanzados de IA bajo un riguroso marco de pruebas diseñado para mitigar sesgos y evitar la polarización del contenido.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong className="text-slate-800">Fuentes Oficiales:</strong> Toda la información contenida proviene exclusivamente de los planes de gobierno radicados formalmente por las campañas ante la Registraduría Nacional del Estado Civil. 
              </p>
              <p className="bg-amber-50 text-amber-900 p-2.5 rounded-xl border border-amber-200 font-medium">
                ⚠️ <strong className="text-amber-950">Invitación al Ciudadano:</strong> A pesar de los estrictos controles de veracidad digital, instamos a cada usuario a descargar y leer directamente los planes de gobierno completos para contrastar la información de primera mano.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>Desarrollado y administrado de forma independiente por: <strong>Sebastian Mendoza</strong></span>
            <span className="font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Versión Beta 2.0 (Segunda Vuelta)</span>
          </div>
        </section>

        {/* FILTRO DE CANDIDATOS */}
        <section className="w-full bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Filtro de indexación por candidato:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {candidatos.map((c: Candidato) => (
              <button
                key={c.candidato}
                type="button"
                onClick={() => toggleCandidate(c.candidato)}
                className={`p-3 rounded-xl border text-xs font-medium transition-all text-left flex flex-col justify-between ${
                  selectedCandidates[c.candidato]
                    ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                }`}
              >
                <span className={`text-[10px] uppercase font-bold tracking-wide mb-1 ${selectedCandidates[c.candidato] ? 'text-slate-300' : 'text-slate-400'}`}>
                  {c.partido}
                </span>
                <span className="text-sm font-semibold truncate w-full">{c.candidato}</span>
              </button>
            ))}
          </div>
        </section>

        {/* BARRA DE BÚSQUEDA */}
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-slate-900 focus-within:border-transparent transition-all">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar propuestas (ej. pensiones, seguridad, salud, impuestos...)"
              className="w-full px-4 py-3 bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-base"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-colors text-sm shadow-sm"
            >
              Consultar
            </button>
          </div>
        </form>

        {/* RESULTADOS DE LA CONSULTA */}
        <section className="space-y-4 mb-12">
          {searchResults.length > 0 ? (
            searchResults.map((result, idx) => (
              <div 
                key={idx} 
                className="p-5 border border-slate-200 bg-white rounded-2xl shadow-sm relative overflow-hidden group"
              >
                {/* Meta de Ubicación en el documento */}
                <span className="absolute top-0 right-0 bg-slate-100 text-slate-600 text-[10px] font-mono font-bold px-3 py-1 rounded-bl-xl border-l border-b border-slate-200">
                  DOC. OFICIAL PÁG. {result.pagina}
                </span>
                
                {/* Autor de la propuesta */}
                <div className="mb-3 pr-24">
                  <h3 className="text-base font-bold text-slate-900">
                    {result.candidato}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {result.partido} • Enfoque: <span className="capitalize text-slate-700 font-semibold">{result.tema.replace('_', ' ')}</span>
                  </p>
                </div>
                
                {/* Cita de propuesta */}
                <p className="text-slate-700 text-sm md:text-base bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 leading-relaxed font-normal">
                  "{result.texto}"
                </p>
              </div>
            ))
          ) : (
            hasSearched && query.trim() !== '' && (
              <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 text-slate-400 text-sm">
                ℹ️ No se detectaron entradas exactas para los criterios seleccionados. Intente simplificar la palabra clave (ej: use "salud" en lugar de "hospitales públicos").
              </div>
            )
          )}
        </section>
      </main>
    </div>
  );
}