import { Candidate } from '../types';

export const synonymsMap: Record<string, string[]> = {
  "ia": ["inteligencia artificial", "automatización", "robótica"],
  "inteligencia artificial": ["ia", "automatización", "robótica"],
  "salud": ["eps", "hospitales", "medicina", "clínicas"],
  "seguridad": ["policía", "ejército", "narcotráfico", "cárceles", "delincuencia"],
  "fracking": ["hidrocarburos", "petróleo", "energía", "exploración"],
  "corrupción": ["transparencia", "contratación", "pliegos", "sobornos"],
  "empleo": ["trabajo", "formalización", "empresas", "pymes"]
};

export const candidates: Candidate[] = [
  {
    id: "ivan-cepeda",
    name: "Iván Cepeda",
    party: "Pacto Histórico",
    proposals: [
      {
        id: "ic-p1",
        theme: "Seguridad",
        summary: "Enfoque de seguridad humana y desmilitarización",
        content: "Propone transformar la doctrina militar hacia la protección de los derechos humanos, trasladar la Policía Nacional civil al Ministerio del Interior y desmontar escuadrones antidisturbios.",
        keywords: ["policía", "ejército", "derechos humanos", "paz"],
        inferida: false
      },
      {
        id: "ic-p2",
        theme: "Salud",
        summary: "Sistema de salud público y preventivo",
        content: "Plantea la eliminación de la intermediación financiera de las EPS actuales para transicionar a un modelo territorializado administrado directamente por el Estado centrado en atención primaria.",
        keywords: ["eps", "hospitales", "medicina", "prevención"],
        inferida: false
      },
      {
        id: "ic-p3",
        theme: "Empleo",
        summary: "Trabajo digno y formalización rural",
        content: "Propone robustecer el empleo a través de la formalización del campesinado, subsidios directos a la producción agrícola nacional y reforma laboral orientada a recuperar recargos nocturnos.",
        keywords: ["trabajo", "formalización", "campo", "reforma laboral"],
        inferida: false
      }
    ]
  },
  {
    id: "paloma-valencia",
    name: "Paloma Valencia",
    party: "Centro Democrático",
    proposals: [
      {
        id: "pv-p1",
        theme: "Seguridad",
        summary: "Fortalecimiento de la Fuerza Pública y control territorial",
        content: "Propone incrementar el pie de fuerza de la policía y el ejército, dar respaldo jurídico blindado a los uniformados y arreciar el combate contra el narcotráfico y estructuras criminales mediante cárceles de máxima seguridad.",
        keywords: ["policía", "ejército", "narcotráfico", "cárceles"],
        inferida: false
      },
      {
        id: "pv-p2",
        theme: "Salud",
        summary: "Protección al sistema mixto y libre elección de EPS",
        content: "Defiende el modelo actual de aseguramiento mixto. Propone sanear las deudas del sector mediante el pago oportuno de presupuestos máximos, manteniendo la gestión privada de las EPS bajo estricta auditoría.",
        keywords: ["eps", "hospitales", "medicina", "auditoría"],
        inferida: true
      },
      {
        id: "pv-p3",
        theme: "Empleo",
        summary: "Estímulo al sector privado y exenciones tributarias",
        content: "Propone la generación de empleo mediante la reducción de cargas impositivas a micro, pequeñas y medianas empresas, flexibilidad de contratación horaria y el incentivo al emprendimiento juvenil.",
        keywords: ["trabajo", "formalización", "empresas", "pymes"],
        inferida: false
      }
    ]
  },
  {
    id: "sergio-fajardo",
    name: "Sergio Fajardo",
    party: "Compromiso Ciudadano",
    proposals: [
      {
        id: "sf-p1",
        theme: "Corrupción",
        summary: "Transparencia total y meritocracia en la contratación",
        content: "Propone la implementación obligatoria de pliegos tipo y portales abiertos de datos en toda entidad pública. Plantea eliminar las cuotas políticas en los nombramientos estatales priorizando concursos de méritos.",
        keywords: ["transparencia", "contratación", "pliegos", "sobornos"],
        inferida: false
      },
      {
        id: "sf-p2",
        theme: "Empleo",
        summary: "Alianza educativa y empleo juvenil tecnológico",
        content: "Propone la creación de un sistema de formación técnica ligado a las necesidades de la industria del software, inteligencia artificial y automatización para garantizar enganche laboral inmediato de jóvenes.",
        keywords: ["trabajo", "inteligencia artificial", "ia", "automatización", "robótica"],
        inferida: false
      },
      {
        id: "sf-p3",
        theme: "Energía",
        summary: "Transición energética gradual sin fracking",
        content: "Propone la prohibición estricta del fracking e hidrocarburos no convencionales, incentivando la inversión en energías limpias (solar y eólica) respetando la seguridad energética actual.",
        keywords: ["fracking", "petróleo", "energía", "hidrocarburos"],
        inferida: false
      }
    ]
  },
  {
    id: "claudia-lopez",
    name: "Claudia López",
    party: "Alianza Verde",
    proposals: [
      {
        id: "cl-p1",
        theme: "Corrupción",
        summary: "Sanciones severas y control de contratación directa",
        content: "Propone reformar el régimen de contratación pública limitando al mínimo los contratos directos o interadministrativos y forzando auditorías ciudadanas en tiempo real para evitar carruseles de contratación.",
        keywords: ["transparencia", "contratación", "pliegos", "sobornos"],
        inferida: false
      },
      {
        id: "cl-p2",
        theme: "Salud",
        summary: "Redes territoriales de salud y fortalecimiento público",
        content: "Propone articular las EPS existentes con un modelo robusto de CAPS (Centros de Atención Prioritaria en Salud) públicos administrados por alcaldías y gobernaciones para descongestionar hospitales.",
        keywords: ["eps", "hospitales", "medicina", "clínicas"],
        inferida: false
      },
      {
        id: "cl-p3",
        theme: "Empleo",
        summary: "Sistema de cuidado y formalización de mujeres",
        content: "Plantea la creación de empleo formal conectando los servicios del Sistema de Cuidado con remuneración digna y estabilidad laboral para mujeres cuidadoras históricamente precarizadas.",
        keywords: ["trabajo", "formalización", "empresas", "pymes"],
        inferida: false
      }
    ]
  },
  {
    id: "abelardo-espriella",
    name: "Abelardo de la Espriella",
    party: "Independiente",
    proposals: [
      {
        id: "ae-p1",
        theme: "Seguridad",
        summary: "Mano dura institucional y justicia penal drástica",
        content: "Propone el empoderamiento pleno de las fuerzas militares para combatir el terrorismo y narcotráfico, construcción de mega-cárceles agrícolas aisladas y reformas judiciales para aumentar penas efectivas.",
        keywords: ["policía", "ejército", "narcotráfico", "cárceles"],
        inferida: false
      },
      {
        id: "ae-p2",
        theme: "Energía",
        summary: "Soberanía energética y explotación responsable",
        content: "Defiende la explotación técnica y regulada de hidrocarburos, incluyendo proyectos piloto de fracking controlados, argumentando la urgencia de mantener la autosuficiencia fiscal y energética del país.",
        keywords: ["fracking", "petróleo", "energía", "hidrocarburos"],
        inferida: true
      },
      {
        id: "ae-p3",
        theme: "Empleo",
        summary: "Liberalización del mercado y flexibilización absoluta",
        content: "Propone desregular el código laboral quitando cargas parafiscales a contratantes con el fin de dinamizar el empleo masivo rápido y atraer inversión multinacional en manufacturas.",
        keywords: ["trabajo", "formalización", "empresas", "pymes"],
        inferida: false
      }
    ]
  }
];