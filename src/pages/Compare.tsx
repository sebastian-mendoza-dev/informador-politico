import { useState } from 'react';
import { candidatos, Candidato, Propuesta } from '../data/database';

export default function Compare() {
  const candidatosSegunda = candidatos.filter(c => c.fase === 'segunda_vuelta');
  
  // Inicializamos la comparativa con los dos primeros candidatos de segunda vuelta
  const [cand1, setCand1] = useState<Candidato>(candidatosSegunda[0] || candidatos[0]);
  const [cand2, setCand2] = useState<Candidato>(candidatosSegunda[1] || candidatos[1]);

  const listaTemas: { id: string; name: string }[] = [
    { id: 'educacion', name: 'Educación' },
    { id: 'salud', name: 'Salud' },
    { id: 'seguridad', name: 'Seguridad y Orden' },
    { id: 'economia', name: 'Economía' },
    { id: 'empleo', name: 'Empleo y Empresa' },
    { id: 'infraestructura', name: 'Infraestructura' },
    { id: 'medio_ambiente', name: 'Medio Ambiente' },
    { id: 'tecnologia', name: 'Tecnología' },
    { id: 'vivienda', name: 'Vivienda' },
    { id: 'corrupcion', name: 'Lucha Anticorrupción' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 px-4 py-8 antialiased">
      <header className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Comparador de Planes de Gobierno
        </h1>
        <p className="text-sm text-slate-500">
          Contraste directo y neutral de propuestas por ejes temáticos oficiales.
        </p>
      </header>

      <main className="max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* SELECTORES DE CANDIDATOS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-slate-200 rounded-2xl shadow-sm">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Candidato 1:</label>
            <select 
              value={cand1.candidato}
              onChange={(e) => {
                const found = candidatos.find(c => c.candidato === e.target.value);
                if (found) setCand1(found);
              }}
              className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              {candidatos.map(c => (
                <option key={c.candidato} value={c.candidato}>{c.candidato} ({c.partido})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Candidato 2:</label>
            <select 
              value={cand2.candidato}
              onChange={(e) => {
                const found = candidatos.find(c => c.candidato === e.target.value);
                if (found) setCand2(found);
              }}
              className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              {candidatos.map(c => (
                <option key={c.candidato} value={c.candidato}>{c.candidato} ({c.partido})</option>
              ))}
            </select>
          </div>
        </section>

        {/* TABLA DE COMPARACIÓN POR EJES */}
        <section className="space-y-6">
          {listaTemas.map((tema) => {
            const infoTema1 = cand1.temas[tema.id as keyof typeof cand1.temas];
            const infoTema2 = cand2.temas[tema.id as keyof typeof cand2.temas];

            return (
              <div key={tema.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-slate-900 text-white px-4 py-3 text-sm font-bold tracking-wide uppercase">
                  📚 {tema.name}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  
                  {/* COLUMNA CANDIDATO 1 */}
                  <div className="p-4 md:p-5 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 mb-1">{cand1.candidato}</h4>
                      <p className="text-xs text-slate-600 mb-3 bg-slate-50 p-3 rounded-xl border border-slate-150 leading-relaxed">
                        {infoTema1?.resumen}
                      </p>
                      <ul className="space-y-2">
                        {infoTema1?.propuestas.map((p: Propuesta, idx: number) => (
                          <li key={idx} className="text-xs text-slate-700 list-disc list-inside bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                            "{p.texto}" <span className="text-[10px] font-mono text-slate-400">(Pág. {p.pagina})</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* COLUMNA CANDIDATO 2 */}
                  <div className="p-4 md:p-5 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 mb-1">{cand2.candidato}</h4>
                      <p className="text-xs text-slate-600 mb-3 bg-slate-50 p-3 rounded-xl border border-slate-150 leading-relaxed">
                        {infoTema2?.resumen}
                      </p>
                      <ul className="space-y-2">
                        {infoTema2?.propuestas.map((p: Propuesta, idx: number) => (
                          <li key={idx} className="text-xs text-slate-700 list-disc list-inside bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                            "{p.texto}" <span className="text-[10px] font-mono text-slate-400">(Pág. {p.pagina})</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}