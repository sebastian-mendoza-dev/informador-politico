import { candidatos, Candidato, Temas } from '../data/database';

export interface SearchResult {
  candidato: string;
  partido: string;
  tema: string;
  texto: string;
  pagina: number;
}

// Mapa de sinónimos básico para mejorar las búsquedas en español
export const synonymsMap: Record<string, string[]> = {
  "escuela": ["educacion", "colegio", "universidad", "profesores"],
  "dinero": ["economia", "impuestos", "empleo", "inflacion"],
  "medico": ["salud", "hospital", "eps", "clinica"],
  "policia": ["seguridad", "ejercito", "crimen", "delincuencia"],
};

// Mapeamos los datos planos para el motor de búsqueda en español
const listaTemas: (keyof Temas)[] = [
  'educacion', 'salud', 'seguridad', 'economia', 'empleo', 
  'infraestructura', 'medio_ambiente', 'tecnologia', 'vivienda', 'corrupcion'
];

const flatData: SearchResult[] = candidatos.flatMap((c: Candidato) => 
  listaTemas.flatMap((tema) => {
    const infoTema = c.temas[tema];
    if (!infoTema) return [];
    
    return infoTema.propuestas.map((p) => ({
      candidato: c.candidato,
      partido: c.partido,
      tema: tema,
      texto: p.texto,
      pagina: p.pagina
    }));
  })
);

export function searchProposals(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase().trim();
  let expandedQuery = lowerQuery;

  // Añadir sinónimos a la búsqueda
  Object.entries(synonymsMap).forEach(([key, synonyms]) => {
    if (lowerQuery.includes(key)) {
      expandedQuery += ` ${synonyms.join(' ')}`;
    }
  });

  const searchWords = expandedQuery.split(/\s+/);

  return flatData.filter((item) => {
    const targetText = `${item.candidato} ${item.partido} ${item.tema} ${item.texto}`.toLowerCase();
    return searchWords.every((word) => targetText.includes(word));
  });
}