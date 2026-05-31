export interface Propuesta {
  texto: string;
  pagina: number;
  cita: string;
  inferida: boolean;
  palabras_clave: string[];
}

export interface Tema {
  resumen: string;
  propuestas: Propuesta[];
}

export interface Temas {
  educacion?: Tema;
  salud?: Tema;
  seguridad?: Tema;
  economia?: Tema;
  empleo?: Tema;
  infraestructura?: Tema;
  medio_ambiente?: Tema;
  tecnologia?: Tema;
  vivienda?: Tema;
  corrupcion?: Tema;
}

export interface Candidato {
  candidato: string;
  partido: string;
  fuente_pdf: string;
  fecha_procesamiento: string;
  temas: Temas;
}

export const candidatos: Candidato[] = [
  {
    candidato: "Iván Cepeda Castro",
    partido: "Pacto Histórico",
    fuente_pdf: "programa-gobierno-2026-2030.pdf",
    fecha_procesamiento: "2026-05-29",
    temas: {
      educacion: {
        resumen: "Fomentar el acceso permanente a la educación en todos los niveles, priorizando la inclusión de las poblaciones vulnerables y afrodescendientes, y usando la formación como alternativa a la violencia.",
        propuestas: [
          {
            texto: "Garantizar el acceso permanente a la educación en todos sus niveles.",
            pagina: 327,
            cita: "acceso a la educación de manera permanente en todos sus niveles",
            inferida: false,
            palabras_clave: ["acceso", "educación", "permanente"]
          },
          {
            texto: "Fortalecer el sistema universitario con un enfoque especial en la población afrodescendiente.",
            pagina: 327,
            cita: "fortalecer la universidad para la población afrodescendiente",
            inferida: false,
            palabras_clave: ["universidad", "afrodescendientes", "educación superior"]
          },
          {
            texto: "Brindar educación, cultura y deporte como alternativas estatales para evitar el reclutamiento de jóvenes.",
            pagina: 394,
            cita: "Necesitamos educación, cultura, deporte, empleo digno",
            inferida: false,
            palabras_clave: ["educación", "cultura", "deporte", "jóvenes"]
          }
        ]
      },
      salud: {
        resumen: "Impulsar una reforma democrática al sistema de salud nacional, consolidando sistemas interculturales propios para poblaciones indígenas e incluyendo la salud en planes de reparación histórica.",
        propuestas: [
          {
            texto: "Aprobar and consolidar una reforma democrática al sistema de salud nacional.",
            pagina: 181,
            cita: "sacar adelante una reforma a la salud de carácter democrático",
            inferida: false,
            palabras_clave: ["reforma", "salud", "democrática"]
          },
          {
            texto: "Hacer efectivo y materializar el Sistema Indígena de Salud Propia e Intercultural (SISPI).",
            pagina: 236,
            cita: "creando el Sistema Indígena de Salud Propia e Intercultural llamado por su sigla SISPI",
            inferida: false,
            palabras_clave: ["SISPI", "salud indígena", "intercultural"]
          },
          {
            texto: "Incluir el acceso a la salud dentro de un plan de emergencia y reparación histórica para comunidades vulnerables.",
            pagina: 327,
            cita: "garantizar de manera universal... salud",
            inferida: false,
            palabras_clave: ["salud universal", "reparación histórica"]
          }
        ]
      },
      seguridad: {
        resumen: "Basar la seguridad en el modelo de seguridad humana, promoviendo el desarme de grupos ilegales y garantizando la presencia integral del Estado en los territorios afectados por la violencia.",
        propuestas: [
          {
            texto: "Adoptar la seguridad humana como el pilar fundamental de las políticas de protección estatal.",
            pagina: 342,
            cita: "LA SEGURIDAD HUMANA COMO COMPONENTE ESENCIAL DE NUESTRO PROGRAMA",
            inferida: false,
            palabras_clave: ["seguridad humana", "protección", "políticas"]
          },
          {
            texto: "Promover el diálogo y el desarme de grupos ilegales para lograr una paz territorial sostenible.",
            pagina: 394,
            cita: "Llamo a los grupos ilegales a dejar las armas",
            inferida: false,
            palabras_clave: ["desarme", "paz territorial", "grupos ilegales"]
          },
          {
            texto: "Asegurar una presencia integral del Estado en los territorios, que vaya más allá de la simple ocupación militar.",
            pagina: 394,
            cita: "presencia integral del Estado, no solo presencia de la Fuerza Pública",
            inferida: false,
            palabras_clave: ["presencia del Estado", "fuerza pública", "instituciones"]
          }
        ]
      },
      economia: {
        resumen: "Fundamentar el desarrollo en una Revolución Agraria que potencie la economía campesina, fortalezca los ingresos de la ciudadanía y convierta a Colombia en una potencia agroalimentaria.",
        propuestas: [
          {
            texto: "Impulsar una Revolución Agraria que tenga a la economía campesina como motor principal de desarrollo.",
            pagina: 339,
            cita: "la economía campesina será el motor... Revolución Agraria",
            inferida: false,
            palabras_clave: ["Revolución Agraria", "economía campesina", "desarrollo"]
          },
          {
            texto: "Transformar la matriz productiva del país para convertirlo en una potencia mundial agroalimentaria.",
            pagina: 339,
            cita: "potencia mundial de la vida, es decir una potencia agroalimentaria",
            inferida: false,
            palabras_clave: ["potencia agroalimentaria", "producción agrícola", "exportaciones"]
          },
          {
            texto: "Fortalecer los ingresos de la población para dinamizar el mercado interno y favorecer el crecimiento económico general.",
            pagina: 217,
            cita: "cuando se fortalece el ingreso de la gente se fortalece el mercado interno, la producción",
            inferida: false,
            palabras_clave: ["ingreso ciudadano", "mercado interno", "crecimiento económico"]
          },
          {
            texto: "Fomentar el desarrollo y la formalización de la economía popular en comunidades y territorios marginados.",
            pagina: 327,
            cita: "desarrollo territorial de la economía popular que se practica en estos territorios",
            inferida: false,
            palabras_clave: ["economía popular", "desarrollo territorial", "inclusión económica"]
          }
        ]
      },
      empleo: {
        resumen: "Proteger el incremento del salario vital, asegurar la materialización de la reforma laboral y garantizar el respeto y la reparación de los derechos sindicales y de los trabajadores.",
        propuestas: [
          {
            texto: "Defender y mantener el incremento del salario vital como base para la dignidad de los trabajadores.",
            pagina: 217,
            cita: "aumento del salario mínimo en un 23% que hoy podemos llamar con justicia salario vital",
            inferida: false,
            palabras_clave: ["salario vital", "ingresos mínimos", "poder adquisitivo"]
          },
          {
            texto: "Materializar y aplicar efectivamente la reforma laboral para que trascienda del papel a la realidad de los empleados.",
            pagina: 162,
            cita: "reforma laboral... se convierta en realidad, no solamente en leyes",
            inferida: false,
            palabras_clave: ["reforma laboral", "derechos laborales", "cumplimiento"]
          },
          {
            texto: "Garantizar procesos de verdad, justicia y reparación colectiva para los trabajadores organizados y el movimiento sindical.",
            pagina: 338,
            cita: "trabajaremos por la verdad, la justicia y la reparación de los trabajadores y trabajadoras",
            inferida: false,
            palabras_clave: ["reparación sindical", "trabajadores", "justicia laboral"]
          }
        ]
      },
      infraestructura: {
        resumen: "Desarrollar infraestructura rural priorizando la construcción de vías terciarias, redes de acueductos y la dotación de servicios básicos como energía eléctrica y agua potable.",
        propuestas: [
          {
            texto: "Ejecutar un Plan Nacional de Construcción de Vías Terciarias para conectar zonas aisladas.",
            pagina: 95,
            cita: "Plan Nacional de Construcción de Vías Terciarias",
            inferida: false,
            palabras_clave: ["vías terciarias", "conectividad rural", "transporte"]
          },
          {
            texto: "Desarrollar un programa nacional integral para dotar a las zonas rurales de bienes, servicios y energía eléctrica.",
            pagina: 95,
            cita: "programa nacional de bienes, servicios rurales... energía eléctrica",
            inferida: false,
            palabras_clave: ["servicios rurales", "energía eléctrica", "infraestructura social"]
          },
          {
            texto: "Construir acueductos rurales y modernizar los sistemas de potabilización para asegurar el suministro continuo de agua.",
            pagina: 200,
            cita: "se construyan acueductos rurales, se mejoren los sistemas de potabilización",
            inferida: false,
            palabras_clave: ["acueductos", "agua potable", "saneamiento"]
          }
        ]
      },
      medio_ambiente: {
        resumen: "Reconocer la autoridad ambiental de las comunidades indígenas, impedir prácticas extractivistas nocivas y asegurar un desarrollo urbano que respete la biodiversidad.",
        propuestas: [
          {
            texto: "Reconocer y respaldar legalmente a los pueblos indígenas como máxima autoridad ambiental del territorio.",
            pagina: 236,
            cita: "pueblos indígenas, son la mayor autoridad ambiental en nuestro país",
            inferida: false,
            palabras_clave: ["pueblos indígenas", "autoridad ambiental", "saberes ancestrales"]
          },
          {
            texto: "Impedir el retorno de prácticas extractivistas destructivas como el fracking y la minería en zonas de páramos.",
            pagina: 281,
            cita: "destrucción ambiental... AWSpiando el fracking... haciendo minería en los páramos",
            inferida: true,
            palabras_clave: ["fracking", "páramos", "minería", "conservación"]
          },
          {
            texto: "Promover modelos de desarrollo urbano que se integren armónicamente y respeten los ecosistemas naturales.",
            pagina: 320,
            cita: "transformar la reality citadina sin acabar con la... naturaleza",
            inferida: false,
            palabras_clave: ["desarrollo urbano", "naturaleza", "sostenibilidad urbana"]
          }
        ]
      },
      tecnologia: {
        resumen: "Impulsar la tecnificación y modernización logística del sector agropecuario mediante infraestructura avanzada y asegurar la provisión de energía para el desarrollo productivo.",
        propuestas: [
          {
            texto: "Construir redes de acopio y cuartos fríos tecnificados para apoyar la conservación y venta de la producción campesina.",
            pagina: 95,
            cita: "construiremos redes de acopio, cuartos fríos",
            inferida: true,
            palabras_clave: ["tecnología agro", "cuartos fríos", "acopio", "logística"]
          },
          {
            texto: "Llevar redes de energía eléctrica a zonas rurales apartadas como condición básica para su modernización tecnológica.",
            pagina: 95,
            cita: "programa nacional de bienes... energía eléctrica",
            inferida: true,
            palabras_clave: ["energía eléctrica", "modernización rural", "tecnificación"]
          },
          {
            texto: "Acompañar la economía campesina con herramientas e innovación para consolidar la transformación agroalimentaria del país.",
            pagina: 339,
            cita: "la economía campesina será el motor... potencia agroalimentaria",
            inferida: true,
            palabras_clave: ["innovación agro", "potencia agroalimentaria", "productividad"]
          }
        ]
      },
      vivienda: {
        resumen: "Integrar la construcción y asignación de vivienda digna en planes de emergencia social y vigilar que los proyectos urbanísticos no afecten zonas ecológicas estratégicas.",
        propuestas: [
          {
            texto: "Implementar planes estatales directos para la búsqueda y construcción masiva de viviendas dignas.",
            pagina: 327,
            cita: "buscar vivienda digna y construir vivienda digna",
            inferida: false,
            palabras_clave: ["vivienda digna", "construcción", "política habitacional"]
          },
          {
            texto: "Priorizar el acceso a la vivienda como una herramienta estructural para superar la desigualdad racial y económica.",
            pagina: 327,
            cita: "plan de emergencia... buscar vivienda digna",
            inferida: true,
            palabras_clave: ["plan de emergencia", "igualdad social", "inclusión habitacional"]
          },
          {
            texto: "Regular estrictamente los proyectos urbanísticos y habitacionales para impedir que destruyan ecosistemas o reservas naturales.",
            pagina: 58,
            cita: "un proyecto urbanístico decidió acabar con una riqueza y un sistema ecológico",
            inferida: true,
            palabras_clave: ["proyectos urbanísticos", "protección ambiental", "planificación territorial"]
          }
        ]
      },
      corrupcion: {
        resumen: "Adelantar una revolución ética contra la corrupción sistémica, eliminando las redes clientelares en la asignación de presupuestos y frenando el saqueo de recursos como las regalías.",
        propuestas: [
          {
            texto: "Declarar una lucha frontal, constante y sin cuartel contra cualquier forma de corrupción enquistada en el Estado.",
            pagina: 58,
            cita: "lucha implacable, perseverante, sin cuartel contra toda forma de corrupción",
            inferida: false,
            palabras_clave: ["anticorrupción", "Estado", "lucha frontal"]
          },
          {
            texto: "Promover una revolución ética ciudadana que rechace la cultura del atajo y desincentive la admiración hacia los corruptos.",
            pagina: 169,
            cita: "revolución ética... la decisión colectiva de no seguir... admirar al corrupto exitoso",
            inferida: false,
            palabras_clave: ["revolución ética", "cultura ciudadana", "valores"]
          },
          {
            texto: "Erradicar los esquemas de desvío sistemático y robo de los recursos públicos provenientes del sistema de regalías.",
            pagina: 362,
            cita: "robo o desvío de los recursos de las regalías",
            inferida: false,
            palabras_clave: ["regalías", "desvío de recursos", "presupuesto público"]
          },
          {
            texto: "Desmantelar las redes clientelares que exigen sobornos o peajes ilegales a cambio de emitir certificaciones técnicas estatales.",
            pagina: 362,
            cita: "cobro de “peajes” en certificaciones técnicas",
            inferida: false,
            palabras_clave: ["sobornos", "trámites estatales", "clientelismo"]
          }
        ]
      }
    }
  },
  {
    candidato: "Paloma Valencia y Juan Daniel Oviedo",
    partido: "Centro Democrático",
    fuente_pdf: "Plan Integrado de Gobierno Final_compressed.pdf",
    fecha_procesamiento: "2026-05-29",
    temas: {
      educacion: {
        resumen: "Se propone un enfoque integral que vincula estudio, empleo y emprendimiento, otorgando libertad de elección entre colegios, ascensos docentes por mérito y reforma de créditos educativos.",
        propuestas: [
          {
            texto: "Implementar la Ruta 3E para asegurar opciones de educación, empleo o emprendimiento a los jóvenes.",
            pagina: 6,
            cita: "Ruta 3E -Estudiar, Emplearse o Emprender- garantizará que ningún joven se quede",
            inferida: false,
            palabras_clave: ["Ruta 3E", "jóvenes", "oportunidades"]
          },
          {
            texto: "Garantizar la libertad de elección para estudiar en colegios públicos o privados.",
            pagina: 6,
            cita: "Libertad de elección para estudiar en colegios públicos o privados.",
            inferida: false,
            palabras_clave: ["colegios privados", "colegios públicos", "libertad de elección"]
          },
          {
            texto: "Establecer que los ascensos de los profesores se basen en el mérito académico y no en la antigüedad.",
            pagina: 6,
            cita: "Los profesores ascenderán por mérito (no por antigüedad).",
            inferida: false,
            palabras_clave: ["profesores", "mérito", "ascensos"]
          },
          {
            texto: "Reformar el ICETEX para que los créditos se paguen únicamente cuando el egresado tenga empleo.",
            pagina: 6,
            cita: "El ICETEX dejará de ser una trampa de deuda: los créditos se pagarán solo cuando haya trabajo",
            inferida: false,
            palabras_clave: ["ICETEX", "créditos", "deuda"]
          }
        ]
      },
      salud: {
        resumen: "El plan se centra en solucionar la crisis actual mediante la inyección de recursos financieros, la atención inmediata de citas represadas y la expansión de la telemedicina rural.",
        propuestas: [
          {
            texto: "Resolver diez millones de atenciones en salud represadas durante los primeros cien días de gobierno.",
            pagina: 4,
            cita: "Resolver 10 millones de atenciones represadas in los primeros 100 días",
            inferida: false,
            palabras_clave: ["atenciones", "primeros 100 días", "crisis"]
          },
          {
            texto: "Inyectar nueve billones de pesos para la compra de medicamentos y el pago de deudas del sector.",
            pagina: 5,
            cita: "Inyectar 9 billones de pesos (3 billones para medicamentos, 6 billones para pago de deudas acumuladas",
            inferida: false,
            palabras_clave: ["recursos", "medicamentos", "deudas"]
          },
          {
            texto: "Implementar un sistema de telemedicina rural apoyado por hospitales padrinos.",
            pagina: 5,
            cita: "Acceso rural con telemedicina (Hospitales padrinos, 100.000 atenciones).",
            inferida: false,
            palabras_clave: ["telemedicina", "rural", "hospitales"]
          },
          {
            texto: "Dignificar and mejorar las condiciones laborales del personal médico y de enfermería.",
            pagina: 5,
            cita: "Mejores condiciones laborales para médicos y enfermeras.",
            inferida: false,
            palabras_clave: ["médicos", "enfermeras", "laboral"]
          }
        ]
      },
      seguridad: {
        resumen: "Busca recuperar el orden mediante el aumento del gasto en defensa, la incorporación masiva de personal a la fuerza pública y la militarización de vías estratégicas.",
        propuestas: [
          {
            texto: "Incrementar el gasto en seguridad y defensa en veinte billones de pesos para alcanzar el 4 por ciento del PIB.",
            pagina: 2,
            cita: "Aumentaremos el gasto en seguridad y defensa en cerca de $20 billones",
            inferida: false,
            palabras_clave: ["gasto", "defensa", "PIB"]
          },
          {
            texto: "Incorporar treinta mil nuevos militares y treinta mil nuevos policías mediante el Plan 30-30.",
            pagina: 2,
            cita: "incorporaremos 30 mil nuevos militares y 30 mil nuevos policías",
            inferida: false,
            palabras_clave: ["militares", "policías", "pie de fuerza"]
          },
          {
            texto: "Realizar militarización estratégica inmediata en vías y regiones con riesgo de secuestro y problemas de movilidad.",
            pagina: 2,
            cita: "Militarización estratégica inmediata en vías y regiones",
            inferida: false,
            palabras_clave: ["vías", "secuestro", "militarización"]
          },
          {
            texto: "Construir veintidós mil cupos penitenciarios y diecinueve mil cupos carcelarios con resocialización obligatoria.",
            pagina: 4,
            cita: "Construcción de 22.000 cupos penitenciarios y 19.000 cupos carcelarios",
            inferida: false,
            palabras_clave: ["cárceles", "cupos", "penitenciarios"]
          }
        ]
      },
      economia: {
        resumen: "Se plantea un objetivo de crecimiento económico anual sostenido, la reducción de la carga tributaria empresarial y el recorte estricto del gasto de funcionamiento estatal.",
        propuestas: [
          {
            texto: "Alcanzar una tasa de crecimiento económico anual del 5 por ciento del PIB.",
            pagina: 6,
            cita: "Creceremos a una tasa del 5% del PIB cada año",
            inferida: false,
            palabras_clave: ["crecimiento", "PIB", "economía"]
          },
          {
            texto: "Mantener una inversión anual mínima equivalente al 25 por ciento del PIB nacional.",
            pagina: 6,
            cita: "La inversión será de al menos 25% del PIB.",
            inferida: false,
            palabras_clave: ["inversión", "capital", "PIB"]
          },
          {
            texto: "Reducir las tarifas de renta a empresas y eliminar por completo el impuesto al patrimonio.",
            pagina: 6,
            cita: "Reduciremos tarifas de renta empresarial, eliminaremos impuesto al patrimonio y reduciremos impuesto predial.",
            inferida: false,
            palabras_clave: ["renta", "impuestos", "patrimonio"]
          },
          {
            texto: "Recortar el gasto de funcionamiento en un 25 por ciento en ministerios y un 30 por ciento en órdenes de prestación de servicios.",
            pagina: 6,
            cita: "Reducción de gasto de funcionamiento: -25 % en ministerios, -30 % en OPS.",
            inferida: false,
            palabras_clave: ["recorte", "gasto", "funcionamiento"]
          }
        ]
      },
      empleo: {
        resumen: "Promueve la formalización y el fortalecimiento laboral mediante incentivos tributarios a pequeños empresarios, billeteras digitales para informales y apoyo directo a mujeres.",
        propuestas: [
          {
            texto: "Ofrecer gratuidad en registros de Cámaras de Comercio e Invima dentro de un mini régimen tributario simple.",
            pagina: 6,
            cita: "Registro de Cámaras de Comercio gratuito, Invima gratuito y mini régimen simple de tributación.",
            inferida: false,
            palabras_clave: ["formalización", "empresario", "gratuito"]
          },
          {
            texto: "Dotar a trabajadores informales y vendedores ambulantes con billeteras digitales respaldadas por el Estado.",
            pagina: 6,
            cita: "Dotaremos a los trabajadores informales y vendedores ambulantes de billeteras digitales para generar una historia crediticia real",
            inferida: false,
            palabras_clave: ["informales", "crédito", "billeteras digitales"]
          },
          {
            texto: "Entregar capital semilla promedio de dos millones de pesos para proyectos productivos liderados por mujeres.",
            pagina: 6,
            cita: "La inversión para emprendimientos liderados por mujeres será en promedio de 2 millones de pesos por cada una, para capital semilla",
            inferida: false,
            palabras_clave: ["mujeres", "capital semilla", "emprendimiento"]
          },
          {
            texto: "Garantizar la formalización laboral de las cuidadoras comunitarias con acceso a contrato, salud y pensión.",
            pagina: 6,
            cita: "Contrato, salud y pensión para cuidadoras comunitarias: el cuidado es infraestructura social.",
            inferida: false,
            palabras_clave: ["cuidadoras", "contrato", "pensión"]
          }
        ]
      },
      infraestructura: {
        resumen: "Se prioriza la culminación total de proyectos viales de cuarta y quinta generación, el desarrollo de transporte multimodal y el mejoramiento de espacios deportivos.",
        propuestas: [
          {
            texto: "Dar continuidad a contratos públicos vigentes y asegurar la ejecución completa de proyectos viales 4G y 5G.",
            pagina: 6,
            cita: "ejecutar al 100 % la 4G y la 5G, proyectos en otros modos de transporte",
            inferida: false,
            palabras_clave: ["4G", "5G", "obra pública"]
          },
          {
            texto: "Estructurar proyectos de transporte multimodal abarcando los sectores vial, férreo, aéreo, portuario y fluvial.",
            pagina: 6,
            cita: "proyectos de infraestructura e impulsaremos las iniciativas privadas en los modos vial, férreo, aéreo, portuario y fluvial",
            inferida: false,
            palabras_clave: ["multimodal", "férreo", "fluvial"]
          },
          {
            texto: "Desarrollar proyectos de movilidad limpia urbana que incluyan buses eléctricos, metros y trenes de cercanías.",
            pagina: 6,
            cita: "proyectos de movilidad sostenible: buses eléctricos, líneas de metro y trenes de cercanía",
            inferida: false,
            palabras_clave: ["metro", "buses eléctricos", "movilidad"]
          },
          {
            texto: "Incrementar y adecuar la infraestructura deportiva y recreativa a nivel nacional.",
            pagina: 6,
            cita: "Aumentar el número y las calidades físicas y ambientales de la infraestructura deportiva",
            inferida: false,
            palabras_clave: ["deporte", "parques", "escenarios"]
          }
        ]
      },
      medio_ambiente: {
        resumen: "El plan ambiental se enfoca en la restauración masiva de ecosistemas terrestres y marinos, el control de la deforestación y la consolidación de incentivos por conservación.",
        propuestas: [
          {
            texto: "Restaurar un millón de hectáreas y ampliar las plantaciones comerciales para contrarrestar la deforestación.",
            pagina: 6,
            cita: "Restauraremos 1 millón de hectáreas, frenaremos la deforestación e incrementaremos plantaciones comerciales",
            inferida: false,
            palabras_clave: ["hectáreas", "deforestación", "restauración"]
          },
          {
            texto: "Consolidar los programas de pagos por servicios ambientales y aplicar dieciséis beneficios tributarios de conservación.",
            pagina: 6,
            cita: "Consolidación de los programas de pagos por servicios ambientales (PSA) y pago por resultados ambientales",
            inferida: false,
            palabras_clave: ["PSA", "beneficios tributarios", "conservación"]
          },
          {
            texto: "Elevar la contribución de la bioeconomía nacional del 0.8 por ciento al 2 por ciento del PIB.",
            pagina: 6,
            cita: "aumentando la bioeconomía del 0,8 % al 2 % del PIB en 4 años",
            inferida: false,
            palabras_clave: ["bioeconomía", "PIB", "riqueza"]
          },
          {
            texto: "Llevar a cabo la restauración ecológica de un millón de corales en ambos océanos.",
            pagina: 6,
            cita: "Restauraremos 1 millón de corales, beneficiando a los pescadores y comunidades costeras",
            inferida: false,
            palabras_clave: ["corales", "pescadores", "océanos"]
          }
        ]
      },
      tecnologia: {
        resumen: "Se propone la modernización del Estado e inclusión digital mediante el uso de inteligencia artificial en la justicia y la gestión pública, y conectividad rural satelital.",
        propuestas: [
          {
            texto: "Implementar herramientas de inteligencia artificial en la rama judicial para eliminar la congestión de procesos.",
            pagina: 4,
            cita: "reducir el índice de congestión del 48,2% al 0%, utilizando instrumentos de inteligencia artificial.",
            inferida: false,
            palabras_clave: ["inteligencia artificial", "congestión", "justicia"]
          },
          {
            texto: "Capacitar a un millón de jóvenes en inteligencia artificial y habilidades digitales avanzadas.",
            pagina: 6,
            cita: "1 millón de jóvenes formados en inteligencia artificial y habilidades digitales con cursos gratuitos e internet incluido",
            inferida: false,
            palabras_clave: ["capacitación", "jóvenes", "habilidades digitales"]
          },
          {
            texto: "Proveer conectividad mediante internet satelital complementado con energía solar en regiones apartadas.",
            pagina: 6,
            cita: "Internet satelital and conectividad para zonas marginadas: llevaremos conexión a los rincones apartados del país",
            inferida: false,
            palabras_clave: ["internet satelital", "paneles solares", "conectividad"]
          },
          {
            texto: "Habilitar un tablero público automatizado con inteligencia artificial para monitorear las metas gubernamentales.",
            pagina: 6,
            cita: "Un tablero público de metas y resultados, administrado por el DNP fortalecido con analítica e inteligencia artificial",
            inferida: false,
            palabras_clave: ["monitoreo", "tablero público", "analítica"]
          }
        ]
      },
      vivienda: {
        resumen: "Plantea habilitar el uso opcional del ahorro pensional para adquisición de vivienda propia, priorizar la titulación predial femenina y optimizar los servicios básicos habitacionales.",
        propuestas: [
          {
            texto: "Permitir que los ciudadanos escojan destinar su ahorro semanal para vivienda propia en lugar de pensión.",
            pagina: 6,
            cita: "Cada colombiano podrá ahorrar semanalmente sin importar su ingreso, eligiendo entre vivienda o pensión. Convertiremos el ahorro pensional en activos reales: de pensionados a propietarios.",
            inferida: false,
            palabras_clave: ["ahorro", "propiedad", "pensionados"]
          },
          {
            texto: "Otorgar la mayoría de los títulos de propiedad inmobiliaria a nombre de las mujeres como medida de protección.",
            pagina: 6,
            cita: "La gran mayoría de los títulos estarán a nombre de las mujeres, para empoderarlas y protegerlas de la violencia",
            inferida: false,
            palabras_clave: ["títulos", "propiedad", "mujeres"]
          },
          {
            texto: "Sustituir el uso de leña en los hogares mediante subsidios dirigidos a la compra de pipetas de gas.",
            pagina: 6,
            cita: "Subsidios a pipetas de gas en zonas con mayor consumo de leña (1 millón de familias dejarán de cocinar con leña).",
            inferida: true,
            palabras_clave: ["gas", "hogares", "calidad de vida"]
          }
        ]
      },
      corrupcion: {
        resumen: "Se establecen medidas severas de control directo como un canal presidencial de denuncias, la aplicación de extinción de dominio exprés y auditorías preventivas automatizadas.",
        propuestas: [
          {
            texto: "Disponer de un correo electrónico personal de la presidenta para tramitar y perseguir denuncias ciudadanas.",
            pagina: 6,
            cita: "La presidente tendrá un correo personal para recibir las denuncias, que ella personalmente perseguirá para garantizar que se investiguen y sancionen.",
            inferida: false,
            palabras_clave: ["denuncias", "anticorrupción", "control directo"]
          }
        ]
      }
    }
  }
];