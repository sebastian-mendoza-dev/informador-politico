import { useState, useMemo, useEffect } from 'react';
import { searchProposals, SearchResult } from '../utils/searchEngine';
import { Search, AlertTriangle, Loader2 } from 'lucide-react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      setLoading(false);
    }, 250);
    return () => clearTimeout(handler);
  }, [query]);

  const results = useMemo<SearchResult[]>(() => {
    return searchProposals(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="glass-card rounded-xl p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">¿Qué es Informador Político?</h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          "Informador Político es una plataforma experimental e independiente que recopila y organiza propuestas de programas de gobierno de forma neutral y transparente.
          Nuestro objetivo es facilitar el acceso a la información pública para que cualquier ciudadano pueda consultar, buscar y comparar propuestas directamente desde las fuentes oficiales.
          Actualmente esta plataforma se encuentra en fase beta.
          A futuro buscamos evolucionar hacia una herramienta de seguimiento ciudadano que permita contrastar las propuestas presentadas durante las campañas con los avances reales de los planes de desarrollo y compromisos de gobierno.
          Información del pueblo, para el pueblo."
        </p>
      </section>

      <section className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {loading ? <Loader2 className="h-5 w-5 text-slate-400 animate-spin" /> : <Search className="h-5 w-5 text-slate-400" />}
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 rounded-xl text-white placeholder-slate-500 focus:outline-none glass-input transition-all text-sm sm:text-base"
            placeholder="Escribe para buscar (ej: salud, EPS, IA, seguridad, fracking, empleo)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {debouncedQuery && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Resultados coincidentes ({results.length})
              </h2>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-16 glass-card rounded-xl">
                <p className="text-slate-400 text-sm">No se encontraron propuestas con ese criterio de búsqueda.</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {results.map((item) => (
                  <div key={`${item.candidateId}-${item.proposal.id}`} className="glass-card rounded-xl p-5 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <div>
                          <h3 className="font-bold text-white text-base">{item.candidateName}</h3>
                          <p className="text-xs text-slate-400">{item.party}</p>
                        </div>
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/10 text-slate-300 whitespace-nowrap">
                          {item.proposal.theme}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-1">{item.proposal.summary}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.proposal.content}</p>
                    </div>

                    {item.proposal.inferida && (
                      <div className="flex items-start gap-2 text-[11px] text-amber-400 bg-amber-500/5 p-2 rounded.5 border border-amber-500/10 mt-2">
                        <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span>⚠️ Inferencia basada en interpretación del documento original.</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}