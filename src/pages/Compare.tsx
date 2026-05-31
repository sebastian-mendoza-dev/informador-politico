import { useState, useMemo } from 'react';
import { candidates } from '../data/database';
import { AlertTriangle, Scale } from 'lucide-react';

export default function Compare() {
  const [candidateA, setCandidateA] = useState('');
  const [candidateB, setCandidateB] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');

  const themes = useMemo(() => {
    const list = new Set<string>();
    candidates.forEach(c => c.proposals.forEach(p => list.add(p.theme)));
    return Array.from(list).sort();
  }, []);

  const proposalA = useMemo(() => {
    const cand = candidates.find(c => c.id === candidateA);
    return cand ? cand.proposals.find(p => p.theme === selectedTheme) : null;
  }, [candidateA, selectedTheme]);

  const proposalB = useMemo(() => {
    const cand = candidates.find(c => c.id === candidateB);
    return cand ? cand.proposals.find(p => p.theme === selectedTheme) : null;
  }, [candidateB, selectedTheme]);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-2">
          <Scale className="w-5 h-5 text-slate-400" /> Comparador de Propuestas
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Visualización paralela y neutral de programas oficiales. No se generan clasificaciones ni juicios de valor.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 glass-card p-4 rounded-xl">
        <select
          className="w-full bg-[#0f172a] border border-white/10 text-white p-3 rounded-lg text-sm focus:outline-none focus:border-white/20"
          value={candidateA}
          onChange={(e) => setCandidateA(e.target.value)}
        >
          <option value="">Seleccionar Candidato A</option>
          {candidates.map(c => <option key={c.id} value={c.id} disabled={c.id === candidateB}>{c.name}</option>)}
        </select>

        <select
          className="w-full bg-[#0f172a] border border-white/10 text-white p-3 rounded-lg text-sm focus:outline-none focus:border-white/20"
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          <option value="">Seleccionar Eje Temático</option>
          {themes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <select
          className="w-full bg-[#0f172a] border border-white/10 text-white p-3 rounded-lg text-sm focus:outline-none focus:border-white/20"
          value={candidateB}
          onChange={(e) => setCandidateB(e.target.value)}
        >
          <option value="">Seleccionar Candidato B</option>
          {candidates.map(c => <option key={c.id} value={c.id} disabled={c.id === candidateA}>{c.name}</option>)}
        </select>
      </div>

      {candidateA && candidateB && selectedTheme ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna Candidato A */}
          <div className="glass-card rounded-xl p-6 flex flex-col justify-between min-h-[250px]">
            <div>
              <div className="border-b border-white/5 pb-3 mb-4">
                <h2 className="text-lg font-bold text-white">{candidates.find(c => c.id === candidateA)?.name}</h2>
                <p className="text-xs text-slate-400">{candidates.find(c => c.id === candidateA)?.party}</p>
              </div>
              {proposalA ? (
                <>
                  <h3 className="text-sm font-semibold text-slate-200 mb-2">{proposalA.summary}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{proposalA.content}</p>
                </>
              ) : (
                <p className="text-xs text-slate-500 italic py-4">No se registra propuesta explícita en esta temática dentro de su plan de gobierno.</p>
              )}
            </div>
            {proposalA?.inferida && (
              <div className="flex items-start gap-2 text-[11px] text-amber-400 bg-amber-500/5 p-2 rounded border border-amber-500/10 mt-4">
                <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>⚠️ Inferencia basada en interpretación del documento original.</span>
              </div>
            )}
          </div>

          {/* Columna Candidato B */}
          <div className="glass-card rounded-xl p-6 flex flex-col justify-between min-h-[250px]">
            <div>
              <div className="border-b border-white/5 pb-3 mb-4">
                <h2 className="text-lg font-bold text-white">{candidates.find(c => c.id === candidateB)?.name}</h2>
                <p className="text-xs text-slate-400">{candidates.find(c => c.id === candidateB)?.party}</p>
              </div>
              {proposalB ? (
                <>
                  <h3 className="text-sm font-semibold text-slate-200 mb-2">{proposalB.summary}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{proposalB.content}</p>
                </>
              ) : (
                <p className="text-xs text-slate-500 italic py-4">No se registra propuesta explícita en esta temática dentro de su plan de gobierno.</p>
              )}
            </div>
            {proposalB?.inferida && (
              <div className="flex items-start gap-2 text-[11px] text-amber-400 bg-amber-500/5 p-2 rounded border border-amber-500/10 mt-4">
                <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>⚠️ Inferencia basada en interpretación del documento original.</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 glass-card rounded-xl">
          <p className="text-sm text-slate-400">Define los dos candidatos y la temática en los selectores de arriba para habilitar el contraste de información.</p>
        </div>
      )}
    </div>
  );
}