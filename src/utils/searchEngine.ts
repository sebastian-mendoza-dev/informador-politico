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

/**
 * Diccionario de Inferencia Conceptual Avanzado
 * Mapea conceptos ciudadanos generales con los ejes y palabras clave 
 * que usan los planes de gobierno de forma indirecta.
 */
const mapaInferencias: Record<string, { temas: string[]; palabrasClave: string[] }> = {
  pension: {
    temas: ['economia', 'empleo'],
    palabrasClave: ['cuidado', 'formalizar', 'ajuste fiscal', 'riqueza', 'reformas sociales', 'blandos', 'productivos']
  },
  pensiones: {
    temas: ['economia', 'empleo'],
    palabrasClave: ['cuidado', 'formalizar', 'ajuste fiscal', 'riqueza', 'reformas sociales', 'blandos', 'productivos']
  },
  jubilacion: {
    temas: ['economia', 'empleo'],
    palabrasClave: ['cuidado', 'formalizar', 'ajuste fiscal', 'riqueza', 'reformas sociales']
  },
  trabajo: {
    temas: ['empleo', 'economia', 'educacion'],
    palabrasClave: ['productivos', 'emprendimientos', 'rurales', 'industria', 'formalizar', 'becas']
  },
  empleo: {
    temas: ['empleo', 'economia', 'educacion'],
    palabrasClave: ['productivos', 'emprendimientos', 'rurales', 'industria', 'formalizar', 'becas']
  },
  fuerza_publica: {
    temas: ['seguridad'],
    palabrasClave: ['armas', 'milicias', 'bloque', 'veteranos', 'reservistas', 'paz', 'homicidios']
  },
  policia: {
    temas: ['seguridad'],
    palabrasClave: ['armas', 'milicias', 'bloque', 'veteranos', 'reservistas', 'paz', 'homicidios']
  },
  ejercito: {
    temas: ['seguridad'],
    palabrasClave: ['armas', 'milicias', 'bloque', 'veteranos', 'reservistas', 'paz', 'homicidios']
  },
  coca: {
    temas: ['seguridad', 'medio_ambiente'],
    palabrasClave: ['hectáreas', 'fumigación', 'erradicación', 'extradición']
  },
  drogas: {
    temas: ['seguridad', 'salud'],
    palabrasClave: ['hectáreas', 'fumigación', 'erradicación', 'atención primaria', 'prevención']
  },
  hospitales: {
    temas: ['salud', 'infraestructura'],
    palabrasClave: ['eps', 'upc', 'adres', 'atención primaria', 'médicos', 'contratos no ejecutados']
  },
  eps: {
    temas: ['salud'],
    palabrasClave: ['upc', 'adres', 'atención primaria', 'choque', 'reforma']
  },
  salud: {
    temas: ['salud'],
    palabrasClave: ['upc', 'adres', 'atención primaria', 'choque', 'reforma', 'intercultural']
  },
  colegios: {
    temas: ['educacion'],
    palabrasClave: ['docente', 'tecnologías', 'virtual', 'universidad', 'wayuu', 'ancestral']
  },
  universidad: {
    temas: ['educacion', 'tecnologia'],
    palabrasClave: ['créditos', 'méritos', 'virtual', 'conectividad', 'computadores', 'ciencia']
  },
  vias: {
    temas: ['infraestructura'],
    palabrasClave: ['caminos', 'carreteras', 'terciarias', 'riego', 'conectividad', 'obras']
  },
  campo: {
    temas: ['economia', 'empleo', 'infraestructura'],
    palabrasClave: ['rurales', 'hectáreas', 'agraria', 'agrícolas', 'abastecimiento', 'pesca']
  },
  agro: {
    temas: ['economia', 'empleo', 'infraestructura'],
    palabrasClave: ['rurales', 'hectáreas', 'agraria', 'agrícolas', 'abastecimiento', 'pesca']
  },
  agua: {
    temas: ['medio_ambiente', 'infraestructura'],
    palabrasClave: ['potable', 'servicios básicos', 'limpia', 'comunidades']
  },
  ia: {
    temas: ['tecnologia', 'economia', 'corrupcion'],
    palabrasClave: ['inteligencia artificial', 'blockchain', 'evasión', 'dian', 'automatización', '4.0']
  },
  impuestos: {
    temas: ['economia', 'tecnologia'],
    palabrasClave: ['dian', 'evasión', 'tributaria', 'ajuste fiscal', 'superávit']
  }
};

// Generamos la base plana de datos para el motor de búsqueda
const dataPlana: SearchResult[] = candidatos.flatMap((c: Candidato) => 
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

/**
 * Función principal del motor de búsqueda inferencial
 */
export function searchProposals(query: string): SearchResult[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return [];

  // Capa 1: Verificar si el término existe en nuestro mapa de inferencias conceptuales
  let temasInferidos: string[] = [];
  let palabrasAsociadas: string[] = [];

  Object.keys(mapaInferencias).forEach((concepto) => {
    if (cleanQuery.includes(concepto) || concepto.includes(cleanQuery)) {
      temasInferidos = [...temasInferidos, ...mapaInferencias[concepto].temas];
      palabrasAsociadas = [...palabrasAsociadas, ...mapaInferencias[concepto].palabrasClave];
    }
  });

  // Capa 2: Filtrado inteligente de la base de datos
  return dataPlana.filter((item) => {
    const textoMinuscula = item.texto.toLowerCase();
    const temaMinuscula = item.tema.toLowerCase();

    // 1. Coincidencia exacta/literal (Texto o Eje)
    const coincidenciaDirecta = textoMinuscula.includes(cleanQuery) || temaMinuscula.includes(cleanQuery);

    // 2. Coincidencia por inferencia temática
    const perteneceATemaInferido = temasInferidos.includes(item.tema);
    
    // 3. Coincidencia por hilos conductores del lenguaje (Palabras clave indirectas)
    const contienePalabraAsociada = palabrasAsociadas.some(palabra => 
      textoMinuscula.includes(palabra.toLowerCase())
    );

    // Si pertenece al tema inferido Y tiene relación contextual, o si coincide directamente, el dato es válido
    return coincidenciaDirecta || (perteneceATemaInferido && contienePalabraAsociada);
  });
}