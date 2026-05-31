export interface Candidato {
  candidato: string;
  partido: string;
  fuente_pdf: string;
  fecha_procesamiento: string;
  fase: 'segunda_vuelta' | 'general'; // <-- NUEVA PROPIEDAD CLAVE
  temas: Temas;
}

export const candidatos: Candidato[] = [
  {
    candidato: "Abelardo de la Espriella",
    partido: "Defensores de la Patria",
    fuente_pdf: "PROPUESTAS-DEL-TIGRE.pdf",
    fecha_procesamiento: "2026-05-29",
    fase: "segunda_vuelta", // <-- Ponlo en segunda_vuelta
    temas: { /* ... sus temas ... */ }
  },
  {
    candidato: "Claudia López",
    partido: "Alianza Verde / Independiente",
    fuente_pdf: "Programa-Gobierno-Claudia-Lopez-Leonardo-Huerta.pdf",
    fecha_procesamiento: "2026-05-31",
    fase: "general", // <-- Queda como registro general histórico
    temas: { /* ... sus temas ... */ }
  }
  // Cuando me pases a Iván Cepeda, le pondremos fase: "segunda_vuelta"
];