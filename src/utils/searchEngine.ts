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

const flatData: SearchResult[] = candidatos.flatMap((c: Candidato) => 
  listaTemas.flatMap((tema) => {
    // Forzamos a TypeScript a entender que "tema" es una clave válida de c.temas
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

  return flatData.filter((item) => 
    item.texto.toLowerCase().includes(cleanQuery) ||
    item.tema.toLowerCase().includes(cleanQuery)
  );
}