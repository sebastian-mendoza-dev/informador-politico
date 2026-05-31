import { useState } from 'react';
import { candidatos, Candidato, Temas } from '../data/database';

export default function Compare() {
  const [candidateA, setCandidateA] = useState<string>(candidatos[0]?.candidato || '');
  const [candidateB, setCandidateB] = useState<string>(candidatos[1]?.candidato || '');
  const [selectedTheme, setSelectedTheme] = useState<keyof Temas>('educacion');

  // Obtener la lista de todos los temas disponibles de manera dinámica
  const listaTemas: (keyof Temas)[] = [
    'educacion', 'salud', 'seguridad', 'economia', 'empleo', 
    'infraestructura', 'medio_ambiente', 'tecnologia', 'vivienda', 'corrupcion'
  ];

  const candAData = candidatos.find((c: Candidato) => c.candidato === candidateA);
  const candBData = candidatos.find((c: Candidato) => c.candidato === candidateB);

  const propuestaA = candAData?.temas[selectedTheme];
  const propuestaB = candBData?.temas[selectedTheme];

  return (
    <div className="p-6 bg-slate-900 min-h-screen text-slate-100">
      <h1 className="text-2xl font-bold mb-6 text-center text-indigo-400">Comparador de Propuestas</h1>
      
      {/* Selector de Tema */}
      <div className="mb-6 max-w-xs mx-auto">
        <label className="block text-sm font-medium mb-2">Selecciona un Eje Temático:</label>
        <select 
          value={selectedTheme} 
          onChange={(e) => setSelectedTheme(e.target.value as keyof Temas)}
          className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white font-medium capitalize"
        >
          {listaTemas.map((tema) => (
            <option key={tema} value={tema}>{tema.replace('_', ' ')}</option>
          ))}
        </select>
      </div>

      {/* Selectores de Candidatos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">Candidato A:</label>
          <select 
            value={candidateA} 
            onChange={(e) => setCandidateA(e.target.value)}
            className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white"
          >
            {candidatos.map((c: Candidato) => (
              <option key={c.candidato} value={c.candidato} disabled={c.candidato === candidateB}>{c.candidato}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Candidato B:</label>
          <select 
            value={candidateB} 
            onChange={(e) => setCandidateB(e.target.value)}
            className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white"
          >
            {candidatos.map((c: Candidato) => (
              <option key={c.candidato} value={c.candidato} disabled={c.candidato === candidateA}>{c.candidato}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Resultados de la Comparación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tarjeta Candidato A */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-xl font-bold text-indigo-400">{candAData?.candidato}</h2>
          <p className="text-xs text-slate-400 mb-4">{candAData?.partido}</p>
          <div className="space-y-4">
            <p className="italic text-slate-300 bg-slate-900/50 p-3 rounded-lg border-l-2 border-indigo-500">
              "{propuestaA?.resumen || 'Sin propuestas o resumen específico para este tema.'}"
            </p>
            {propuestaA?.propuestas.map((p, idx) => (
              <div key={idx} className="p-3 bg-slate-700/30 rounded-lg text-sm border border-slate-700">
                <p className="text-slate-200 font-medium mb-1">{p.texto}</p>
                <span className="text-[10px] text-slate-400">Pág. {p.pagina}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tarjeta Candidato B */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-xl font-bold text-emerald-400">{candBData?.candidato}</h2>
          <p className="text-xs text-slate-400 mb-4">{candBData?.partido}</p>
          <div className="space-y-4">
            <p className="italic text-slate-300 bg-slate-900/50 p-3 rounded-lg border-l-2 border-emerald-500">
              "{propuestaB?.resumen || 'Sin propuestas o resumen específico para este tema.'}"
            </p>
            {propuestaB?.propuestas.map((p, idx) => (
              <div key={idx} className="p-3 bg-slate-700/30 rounded-lg text-sm border border-slate-700">
                <p className="text-slate-200 font-medium mb-1">{p.texto}</p>
                <span className="text-[10px] text-slate-400">Pág. {p.pagina}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}