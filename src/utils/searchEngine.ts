import { candidatos, Candidato, Propuesta } from '../data/database';

export interface SearchResult {
  candidato: string;
  partido: string;
  tema: string;
  texto: string;
  pagina: number;
}

const listaTemas: string[] = [
  'educacion', 'salud', 'seguridad', 'economia', 'empleo',
  'infraestructura', 'medio_ambiente', 'tecnologia', 'vivienda', 'corrupcion'
];

// Diccionario semántico: mapea palabras comunes a los ejes oficiales de la app
const diccionarioSemantico: Record<string, string[]> = {
  pensiones: ['economia', 'empleo', 'vivienda'],
  trabajo: ['empleo', 'economia'],
  empresas: ['economia', 'empleo', 'tecnologia'],
  fuerza_publica: ['seguridad'],
  policia: ['seguridad'],
  ejercito: ['seguridad'],
  coca: ['seguridad', 'medio_ambiente'],
  drogas: ['seguridad', 'salud'],
  hospitales: ['salud'],
  medicos: ['salud'],
  eps: ['salud'],
  colegios: ['educacion'],
  universidad: ['educacion', 'tecnologia'],
  becas: ['educacion', 'empleo'],
  vias: ['infraestructura'],
  carreteras: ['infraestructura'],
  campo: ['economia', 'empleo', 'infraestructura'],
  agua: ['medio_ambiente', 'infraestructura'],
  animales: ['medio_ambiente'],
  blockchain: ['tecnologia', 'corrupcion'],
  ia: ['tecnologia', 'economia', 'corrupcion'],
  plata: ['economia'],
  impuestos: ['economia', 'tecnologia']
};

const flatData: SearchResult[] = candidatos.flatMap((c: Candidato) => 
  listaTemas.flatMap((tema) => {
    const infoTema = c.temas[tema as keyof typeof c.temas];
    if (!infoTema || !infoTema.propuestas) return [];
    
    return infoTema.propuestas.map((p: Propuesta) => ({
      candidato: c.candidato,
      partido: c.partido,
      tema: tema,
      texto: p.texto,
      pagina: p.pagina
    }));
  })
);

export function searchProposals(query: string): SearchResult[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return [];

  // 1. Encontrar ejes alternativos basados en el diccionario semántico
  let temasRelacionados: string[] = [];
  Object.keys(diccionarioSemantico).forEach((key) => {
    if (cleanQuery.includes(key) || key.includes(cleanQuery)) {
      temasRelacionados = [...temasRelacionados, ...diccionarioSemantico[key]];
    }
  });

  // 2. Filtrar los resultados combinando coincidencia exacta y semántica
  return flatData.filter((item) => {
    const matchesTexto = item.texto.toLowerCase().includes(cleanQuery);
    const matchesTemaExacto = item.tema.toLowerCase().includes(cleanQuery);
    const matchesSemantica = temasRelacionados.includes(item.tema);

    return matchesTexto || matchesTemaExacto || matchesSemantica;
  });
}