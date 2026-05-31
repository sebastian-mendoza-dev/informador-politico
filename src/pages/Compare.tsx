import { useState } from 'react';
import { candidatos, Candidato, Temas } from '../data/database';

export default function Compare() {
  // Inicializamos de forma segura con los candidatos que existan en la lista
  const [candidateA, setCandidateA] = useState<string>(candidatos[0]?.candidato || '');
  const [candidateB, setCandidateB] = useState<string>(candidatos[1]?.candidato || '');
  const [selectedTheme, setSelectedTheme] = useState<keyof Temas>('educacion');

  // Lista de ejes temáticos
  const listaTemas: { id: keyof Temas; label: string }[] = [
    { id: 'educacion', label: 'Educación' },
    { id: 'salud', label: 'Salud' },
    { id: 'seguridad', label: 'Seguridad' },
    { id: 'economia', label: 'Economía' },
    { id: 'empleo', label: 'Empleo' },
    { id: 'infraestructura', label: 'Infraestructura' },
    { id: 'medio_ambiente', label: 'Medio Ambiente' },
    { id: 'tecnologia', label: 'Tecnología' },
    { id: 'vivienda', label: 'Vivienda' },
    { id: 'corrupcion', label: 'Corrupción' },
  ];

  // Buscamos la información completa de los candidatos seleccionados
  const candAData = candidatos.find((c: Candidato) => c.candidato === candidateA);
  const candBData = candidatos.find((c: Candidato) => c.candidato === candidateB);

  const propuestaA = candAData?.temas[selectedTheme];
  const propuestaB = candBData?.temas[selectedTheme];

  return (
    <div className="p-6 bg-slate-900 min-h-screen text-slate-100">
      <header className="max-w-4xl mx-auto text-center my-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
          ⚖️ Comparador de Propuestas
        </h1>
        <p className="text-sm text-slate-400">
          Selecciona dos candidatos y un eje temático para contrastar sus visiones de país.
        </p>
      </header>
      
      {/* SECTOR DE TEMA */}
      <div className="mb-8 max-w-xs mx-auto">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">
          Eje Temático
        </label>
        <select 
          value={selectedTheme} 
          onChange={(e) => setSelectedTheme(e.target.value as keyof Temas)}
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all shadow-md cursor-pointer"
        >
          {listaTemas.map((tema) => (
            <option key={tema.id} value={tema.id}>{tema.label}</option>
          ))}
        </select>
      </div>

      {/* SELECTORES DE CANDIDATOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
        {/* Selector A */}
        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Primer Candidato
          </label>
          <select 
            value={candidateA} 
            onChange={(e) => setCandidateA(e.target.value)}
            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-semibold cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            {candidatos.map((c: Candidato) => (
              <option key={c.candidato} value={c.candidato} disabled={c.candidato === candidateB}>
                {c.candidato} ({c.partido})
              </option>
            ))}
          </select>
        </div>

        {/* Selector B */}
        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Segundo Candidato
          </label>
          <select 
            value={candidateB} 
            onChange={(e) => setCandidateB(e.target.value)}
            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-semibold cursor-pointer focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            {candidatos.map((c: Candidato) => (
              <option key={c.candidato} value={c.candidato} disabled={c.candidato === candidateA}>
                {c.candidato} ({c.partido})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* BLOQUE DE COMPARACIÓN HISTÓRICA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
        
        {/* COLUMNA A */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl transition-all hover:border-indigo-500/50">
          <span className="bg-indigo-900/50 text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
            {candAData?.partido || 'Partido'}
          </span>
          <h2 className="text-2xl font-black text-white mt-2 mb-4">{candAData?.candidato}</h2>
          
          <div className="space-y-4">
            <div className="italic text-slate-300 bg-slate-900/50 p-4 rounded-xl border-l-4 border-indigo-500 text-sm leading-relaxed">
              "{propuestaA?.resumen || 'Este candidato no registra un resumen o propuestas específicas para este tema.'}"
            </div>
            
            {propuestaA?.propuestas.map((p, idx) => (
              <div key={idx} className="p-4 bg-slate-700/20 rounded-xl text-sm border border-slate-750 relative group">
                <span className="absolute top-2 right-3 text-[10px] text-slate-500 font-bold">Pág. {p.pagina}</span>
                <p className="text-slate-200 font-medium pr-10">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA B */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl transition-all hover:border-purple-500/50">
          <span className="bg-purple-900/50 text-purple-300 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
            {candBData?.partido || 'Partido'}
          </span>
          <h2 className="text-2xl font-black text-white mt-2 mb-4">{candBData?.candidato}</h2>
          
          <div className="space-y-4">
            <div className="italic text-slate-300 bg-slate-900/50 p-4 rounded-xl border-l-4 border-purple-500 text-sm leading-relaxed">
              "{propuestaB?.resumen || 'Este candidato no registra un resumen o propuestas específicas para este tema.'}"
            </div>
            
            {propuestaB?.propuestas.map((p, idx) => (
              <div key={idx} className="p-4 bg-slate-700/20 rounded-xl text-sm border border-slate-750 relative group">
                <span className="absolute top-2 right-3 text-[10px] text-slate-500 font-bold">Pág. {p.pagina}</span>
                <p className="text-slate-200 font-medium pr-10">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}