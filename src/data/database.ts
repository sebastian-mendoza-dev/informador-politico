export interface Propuesta {
  texto: string;
  pagina: number;
}

export interface DetalleTema {
  resumen: string;
  propuestas: Propuesta[];
}

export interface Temas {
  educacion: DetalleTema;
  salud: DetalleTema;
  seguridad: DetalleTema;
  economia: DetalleTema;
  empleo: DetalleTema;
  infraestructura: DetalleTema;
  medio_ambiente: DetalleTema;
  tecnologia: DetalleTema;
  vivienda: DetalleTema;
  corrupcion: DetalleTema;
}

export interface Candidato {
  candidato: string;
  partido: string;
  fuente_pdf: string;
  fecha_procesamiento: string;
  temas: Temas;
}

const sinInformacion = (tema: string): DetalleTema => ({
  resumen: `El candidato no registra un resumen oficial sobre ${tema} en este bloque extraído de su plan de gobierno.`,
  propuestas: [
    { texto: `Consultar el documento oficial para más detalles sobre sus directrices en ${tema}.`, pagina: 1 }
  ]
});

export const candidatos: Candidato[] = [
  {
    candidato: "Abelardo de la Espriella",
    partido: "Defensores de la Patria",
    fuente_pdf: "PROPUESTAS-DEL-TIGRE.pdf",
    fecha_procesamiento: "2026-05-29",
    temas: {
      educacion: {
        resumen: "Transformación del sistema educativo mediante programas tecnológicos de ciclos cortos, universidad virtual, créditos blandos y evaluación rigurosa del profesorado.",
        propuestas: [
          { texto: "Crear programas cortos enfocados en la cuarta revolución industrial, bilingüismo y economía del cuidado.", pagina: 3 },
          { texto: "Implementar un sistema de evaluación docente para garantizar y mejorar la calidad de la enseñanza.", pagina: 3 },
          { texto: "Establecer créditos blandos y un sistema basado en el mérito para facilitar el acceso universitario.", pagina: 3 },
          { texto: "Fomentar la inversión del sector privado en tecnología y ciencia educativa a través de beneficios tributarios.", pagina: 3 },
          { texto: "Fundar una Universidad Virtual en Casa que garantice el acceso a computadores e internet gratuitos.", pagina: 3 }
        ]
      },
      salud: {
        resumen: "Plan de emergencia para estabilizar financieramente el sistema, priorizando la atención médica primaria, el uso de tecnología y la optimización de los costos administrativos de las EPS.",
        propuestas: [
          { texto: "Ejecutar un plan de choque financiero y auditar trimestralmente la ejecución de la Unidad de Pago por Capitación (UPC).", pagina: 2 },
          { texto: "Reforzar el modelo de medicina basada en la atención primaria y estrategias de prevención.", pagina: 2 },
          { texto: "Incorporar herramientas tecnológicas para estandarizar y hacer cumplir los tiempos de citas médicas especializadas.", pagina: 2 },
          { texto: "Imponer límites a los gastos administrativos de las Entidades Promotoras de Salud (EPS) para aumentar su eficiencia.", pagina: 2 },
          { texto: "Realizar arbitraje de fondos y auditar contratos de infraestructura médica con indicios de corrupción.", pagina: 2 }
        ]
      },
      seguridad: {
        resumen: "Estrategia frontal contra el crimen organizado y el narcotráfico, recuperación del control territorial, fortalecimiento de las fuerzas armadas y erradicación de cultivos ilícitos.",
        propuestas: [
          { texto: "Erradicar todas las hectáreas de cultivos ilícitos usando fumigación aérea, erradicación manual y herramientas tecnológicas.", pagina: 1 },
          { texto: "Desmantelar estructuras armadas ilegales y recuperar el monopolio exclusivo del Estado sobre las armas.", pagina: 1 },
          { texto: "Respaldar institucionalmente y fortalecer el accionar de las Fuerzas Militares y de Policía.", pagina: 1 },
          { texto: "Crear grupos especiales para combatir la extorsión y aprovechar el conocimiento de veteranos en seguridad local.", pagina: 1 },
          { texto: "Retomar el control y reestructurar profundamente el sistema penitenciario del país.", pagina: 1 }
        ]
      },
      economia: {
        resumen: "Búsqueda de un crecimiento económico superior al 7% reduciendo el tamaño del Estado, aliviando la carga tributaria empresarial y cumpliendo estrictamente la Regla Fiscal.",
        propuestas: [
          { texto: "Alcanzar una meta de crecimiento económico a tasas del 7% basándose en modelos exitosos internacionales.", pagina: 2 },
          { texto: "Achicar la estructura estatal en un 25% y generar un superávit fiscal primario a corto plazo.", pagina: 2 },
          { texto: "Establecer una política de desregulación donde por cada nuevo trámite creado, se eliminen dos existentes.", pagina: 2 },
          { texto: "Respetar la Regla Fiscal y fortalecer la autoridad del comité autónomo para controlar el gasto excesivo.", pagina: 2 },
          { texto: "Implementar inteligencia artificial en la autoridad tributaria para reducir drásticamente los niveles de evasión de impuestos.", pagina: 2 }
        ]
      },
      empleo: {
        resumen: "Fomento a la generación de empleo ampliando la frontera agrícola, apoyando emprendimientos de mujeres y jóvenes, y promoviendo las industrias culturales creativas.",
        propuestas: [
          { texto: "Generar más de medio millón de puestos de trabajo rurales mediante la ampliación del área productiva.", pagina: 3 },
          { texto: "Apoyar la formalización y formación de cientos de miles de emprendimientos liderados por mujeres.", pagina: 3 },
          { texto: "Remunerar formalmente las labores de la economía del cuidado y brindar subsidios de formación a cuidadoras.", pagina: 3 },
          { texto: "Desarrollar una potente industria de creación audiovisual y musical para generar prosperidad en el sector cultural.", pagina: 3 },
          { texto: "Instruir a 100,000 jóvenes del campo en emprendimiento rural y prácticas productivas con respaldo financiero.", pagina: 3 }
        ]
      },
      infraestructura: {
        resumen: "Desarrollo estratégico de conectividad rural, modernización del sistema eléctrico regional y aceleración de proyectos de transporte de hidrocarburos.",
        propuestas: [
          { texto: "Transformar y optimizar la red de suministro de energía eléctrica en la zona del Caribe colombiano.", pagina: 2 },
          { texto: "Acelerar la construcción de infraestructura, transporte y desarrollo de proyectos gasíferos en el mar.", pagina: 2 },
          { texto: "Construir vías terciarias, sistemas de riego y expandir la conectividad digital para el campo productivo.", pagina: 3 },
          { texto: "Simplificar y agilizar los trámites de licencias ambientales y consultas para facilitar macroproyectos.", pagina: 2 }
        ]
      },
      medio_ambiente: {
        resumen: "Promoción del turismo sostenible y energías limpias, junto con una fuerte política estatal centrada en el bienestar, protección y atención sanitaria de los animales.",
        propuestas: [
          { texto: "Frenar la sobrepoblación de animales en condición de calle a través de jornadas de esterilización a gran escala y gratuitas.", pagina: 3 },
          { texto: "Penalizar el maltrato hacia los animales con un andamiaje legal robusto y medidas sancionatorias estrictas.", pagina: 3 },
          { texto: "Asegurar atención veterinaria utilizando la infraestructura actual de la red de salud pública sin incrementar el gasto.", pagina: 3 },
          { texto: "Impulsar de manera paralela el ecoturismo y las fuentes de generación de energías renovables.", pagina: 2 }
        ]
      },
      tecnologia: {
        resumen: "Incorporación transversal de herramientas avanzadas como la inteligencia artificial y el blockchain en el gobierno, la educación y la administración tributaria.",
        propuestas: [
          { texto: "Realizar todos los contratos del Estado utilizando tecnología blockchain para garantizar la inmutabilidad de los datos.", pagina: 1 },
          { texto: "Actualizar las plataformas de la Dirección de Impuestos (DIAN) con sistemas de Inteligencia Artificial para el control fiscal.", pagina: 2 },
          { texto: "Impartir conocimientos en robótica, computación cuántica e inteligencia artificial dentro del sistema de educación pública.", pagina: 3 },
          { texto: "Automatizar la logística y la asignación de consultas médicas especializadas en las EPS mediante desarrollo tecnológico.", pagina: 2 }
        ]
      },
      vivienda: {
        resumen: "Iniciativa gubernamental para masificar la compra de vivienda reduciendo las tasas de interés y facilitando la tenencia de propiedades rurales.",
        propuestas: [
          { texto: "Lanzar un programa nacional que otorgue condiciones favorables para la adquisición de la primera vivienda.", pagina: 2 },
          { texto: "Subsidiar créditos hipotecarios para la compra de bienes raíces con tasas de interés excepcionalmente bajas al 2% a un plazo de 30 años.", pagina: 2 },
          { texto: "Convertir al agricultor en dueño de sus tierras y titular propiedades rurales carentes de formalización.", pagina: 3 }
        ]
      },
      corrupcion: {
        resumen: "Lucha radical contra el desfalco estatal implementando un escuadrón especial liderado por presidencia, rastreo financiero inteligente y trazabilidad digital obligatoria.",
        propuestas: [
          { texto: "Instaurar una unidad especializada de búsqueda directa de corruptos, comandada directamente por el presidente.", pagina: 1 },
          { texto: "Aplicar herramientas de inteligencia financiera para rastrear dineros ilícitos y efectuar procesos de extinción de dominio ultra rápidos.", pagina: 1 },
          { texto: "Blindar las finanzas del Estado forzando a que la totalidad de los contratos públicos queden inalterables en una red blockchain.", pagina: 1 },
          { texto: "Remover las directivas actuales e intervenir de emergencia las instituciones clave, iniciando por Ecopetrol.", pagina: 1 }
        ]
      }
    }
  },
  {
    candidato: "Claudia López",
    partido: "Alianza Verde / Independiente",
    fuente_pdf: "Programa-Gobierno-Claudia-Lopez-Leonardo-Huerta.pdf",
    fecha_procesamiento: "2026-05-31",
    temas: {
      educacion: {
        resumen: "La educación se concibe como el motor principal para la igualdad de oportunidades y el progreso social. Se plantea un modelo que articule la formación con el sector productivo para facilitar la inserción laboral directa. Además, se busca garantizar una cobertura universal de calidad desde la primera infancia hasta la educación posmedia.",
        propuestas: [
          { texto: "Crear un programa de un millón de becas de educación y trabajo para jóvenes, mujeres y mayores de 50 años.", pagina: 1 },
          { texto: "Garantizar cobertura universal y de calidad desde la primera infancia hasta la educación posmedia en todas las regiones.", pagina: 1 },
          { texto: "Vincular directamente los programas educativos con el trabajo y el sector productivo para aumentar la productividad regional.", pagina: 1 },
          { texto: "Fomentar el desarrollo tecnológico, la economía del conocimiento y los servicios descentralizados en las regiones.", pagina: 1 },
          { texto: "Liberar a las mujeres de la sobrecarga del trabajo de cuidado no remunerado para permitirles estudiar y formarse.", pagina: 1 }
        ]
      },
      salud: {
        resumen: "Se busca transformar el sistema actual, superando la fragmentación y resolviendo su crisis financiera estructural. Se propone un modelo mixto e integral que acompañe a las personas en todo su ciclo de vida, eliminando las filas interminables. El enfoque será preventivo, equitativo territorialmente y articulará servicios físicos, mentales y de cuidado.",
        propuestas: [
          { texto: "Resolver la parálisis financiera del sistema para asegurar que los tratamientos y medicamentos lleguen a tiempo y sin filas.", pagina: 1 },
          { texto: "Crear un Sistema Mixto e Integral de Salud y Cuidado centrado en la prevención y la dignidad del individuo.", pagina: 1 },
          { texto: "Articular los servicios tradicionales de salud física con atención especializada en salud mental y cuidado preventivo.", pagina: 1 },
          { texto: "Mejorar la equidad territorial del sistema, cerrando brechas históricas de acceso en zonas rurales y poblaciones excluidas.", pagina: 1 },
          { texto: "Desarrollar un Sistema Nacional de Cuidado institucionalizado que proteja a las personas desde la primera infancia hasta la vejez.", pagina: 1 }
        ]
      },
      seguridad: {
        resumen: "Ante la expansión criminal, se busca recuperar el control territorial mediante un Estado soberano, legítimo y fuerte. Se implementará un sistema judicial de tres niveles liderado por una nueva Fiscalía Antimafia implacable. El objetivo central es desmantelar el crimen organizado, acabar con la impunidad y pacificar las regiones.",
        propuestas: [
          { texto: "Crear una Fiscalía Antimafia dedicada a someter y desmantelar el crimen organizado, el narcotráfico y la corrupción.", pagina: 1 },
          { texto: "Reformar la justicia en tres niveles: contra las mafias (mínimas garantías), ordinaria (delincuencia común) y restaurativa (faltas a la convivencia).", pagina: 1 },
          { texto: "Retomar el control de las cárceles aislando a los líderes mafiosos y transformar al INPEC en una gendarmería carcelaria.", pagina: 1 },
          { texto: "Ampliar el pie de fuerza y las capacidades operativas, tecnológicas y de inteligencia de las Fuerzas Militares y de Policía.", pagina: 1 },
          { texto: "Sancionar de forma drástica la reincidencia delictiva y el uso de armas en cualquier tipo de delito.", pagina: 1 }
        ]
      },
      economia: {
        resumen: "Se propone una reactivación desde las regiones con el ambicioso objetivo de duplicar la productividad del país en 20 años. La estrategia prioriza la disciplina fiscal, la descentralización de presupuestos y el impulso a grandes proyectos territoriales. Se promoverán asociaciones público-privadas-comunitarias y una reducción de tributos basada en el crecimiento.",
        propuestas: [
          { texto: "Descentralizar el DNP transformándolo en el Departamento de Planeación Regional (DPR) para estudiar inversiones sin intermediación política.", pagina: 1 },
          { texto: "Bajar 2 puntos la tasa de tributación empresarial de renta por cada punto adicional que crezca el PIB.", pagina: 1 },
          { texto: "Implementar presupuestos participativos regionales donde la ciudadanía vote para decidir y priorizar las inversiones estratégicas.", pagina: 1 },
          { texto: "Promover Alianzas Público-Privadas-Comunitarias donde las comunidades sean socias y reciban utilidades directas en grandes proyectos.", pagina: 1 },
          { texto: "Cumplir la regla fiscal asegurando que el crecimiento de los gastos públicos no supere el de los ingresos del país.", pagina: 1 }
        ]
      },
      empleo: {
        resumen: "El plan se enfoca en impulsar la creación de empleo privado y formal otorgando incentivos directos a los micronegocios y las mipymes. Se busca facilitar la inserción laboral de mujeres, jóvenes y adultos mayores mediante subsidios focalizados. Un pilar clave es descargar a las mujeres de labores de cuidado no remuneradas para que puedan generar ingresos.",
        propuestas: [
          { texto: "Implementar un esquema de apoyo directo, incentivos y crédito para micronegocios, impulsando el empleo formal y privado.", pagina: 1 },
          { texto: "Otorgar subsidios al empleo con salario mínimo enfocados en jóvenes, mujeres y personas mayores de 50 años.", pagina: 1 },
          { texto: "Garantizar que las mipymes tengan acceso preferente a las compras públicas del Estado y pago oportuno a 30 días.", pagina: 1 },
          { texto: "Institucionalizar un Sistema Nacional de Cuidado desde los municipios para liberar a las mujeres del trabajo no remunerado y que generen ingresos.", pagina: 1 },
          { texto: "Dignificar el ingreso de los trabajadores defendiendo un salario mínimo justo y protegiendo los avances de la reforma pensional y laboral.", pagina: 1 }
        ]
      },
      infraestructura: sinInformacion("infraestructura"),
      medio_ambiente: sinInformacion("medio ambiente"),
      tecnologia: sinInformacion("tecnología"),
      vivienda: sinInformacion("vivienda"),
      corrupcion: sinInformacion("corrupción")
    }
  },
  {
    candidato: "Sergio Fajardo Valderrama",
    partido: "Compromiso Ciudadano",
    fuente_pdf: "Fajardo.pdf",
    fecha_procesamiento: "2026-05-31",
    temas: {
      educacion: {
        resumen: "Propone que la educación sea el principal motor de movilidad social, innovación y desarrollo. Busca garantizar trayectorias educativas completas, fortalecer la calidad educativa y conectar la formación con el empleo y la tecnología.",
        propuestas: [
          { texto: "Ampliar la cobertura de educación inicial y atención integral para niños de 0 a 5 años.", pagina: 1 },
          { texto: "Fortalecer la enseñanza de ciencia, tecnología, arte y matemáticas en colegios.", pagina: 1 },
          { texto: "Implementar un proyecto nacional para mejorar la enseñanza de las matemáticas.", pagina: 1 },
          { texto: "Conectar la educación media, técnica y superior con el mundo laboral mediante trayectorias flexibles.", pagina: 1 },
          { texto: "Recuperar el Icetex con nuevas becas y créditos con pagos contingentes al ingreso.", pagina: 1 }
        ]
      },
      salud: {
        resumen: "Busca reorganizar y estabilizar el sistema de salud gartantizando acceso oportuno, sostenibilidad financiera y atención basada en prevención. Promueve la modernización tecnológica y el fortalecimiento de la salud territorial.",
        propuestas: [
          { texto: "Implementar un Plan de Recuperación del Sistema durante los primeros 100 días.", pagina: 1 },
          { texto: "Realizar una reforma financiera que garantice sostenibilidad y transparencia.", pagina: 1 },
          { texto: "Construir un modelo territorial de salud coordinado entre EPS, IPS y entidades territoriales.", pagina: 1 },
          { texto: "Fortalecer la Atención Primaria en Salud y la medicina familiar y comunitaria.", pagina: 1 },
          { texto: "Desarrollar una Estrategia Nacional de Salud Mental con mayor cobertura y recursos.", pagina: 1 }
        ]
      },
      seguridad: {
        resumen: "Plantea recuperar el control territorial, fortalecer la seguridad ciudadana y combatir el crimen organizado. La estrategia combina inteligencia, fortalecimiento de la Fuerza Pública y prevención del reclutamiento criminal.",
        propuestas: [
          { texto: "Atacar las finanzas del crimen organizado mediante inteligencia y coordinación institucional.", pagina: 1 },
          { texto: "Aumentar en 40.000 el número de policías profesionales durante el cuatrienio.", pagina: 1 },
          { texto: "Duplicar los grupos Gaula para combatir extorsión y secuestro.", pagina: 1 },
          { texto: "Reformar el sistema penitenciario y construir cinco nuevas cárceles.", pagina: 1 },
          { texto: "Implementar programas para prevenir el reclutamiento de niños y jóvenes por grupos criminales.", pagina: 1 }
        ]
      },
      economia: {
        resumen: "Propone estabilizar las finanzas públicas, fortalecer la productividad y promover la inversión. Busca impulsar el crecimiento económico mediante innovación, exportaciones y desarrollo empresarial.",
        propuestas: [
          { texto: "Implementar un plan de consolidación fiscal para reducir déficit y estabilizar la deuda.", pagina: 1 },
          { texto: "Modernizar la DIAN para combatir la evasión y mejorar el recaudo.", pagina: 1 },
          { texto: "Impulsar la reconversión tecnológica de empresas para aumentar la productividad.", pagina: 1 },
          { texto: "Facilitar crédito productivo para empresas que inviertan y crezcan.", pagina: 1 },
          { texto: "Promover el desarrollo productivo y la expansión de exportaciones en diferentes sectores.", pagina: 1 }
        ]
      },
      empleo: {
        resumen: "Busca generar empleo formal mediante educación pertinente, crecimiento empresarial y desarrollo productivo. Prioriza oportunidades para jóvenes, mujeres y trabajadores de la economía popular.",
        propuestas: [
          { texto: "Conectar la educación superior y técnica con el mercado laboral mediante formación dual.", pagina: 1 },
          { texto: "Aumentar la empleabilidad de los egresados del SENA.", pagina: 1 },
          { texto: "Apoyar la modernización de 120.000 empresas para fortalecer la generación de empleo.", pagina: 1 },
          { texto: "Implementar una ruta de estabilidad productiva para un millón de trabajadores y micronegocios.", pagina: 1 },
          { texto: "Facilitar acceso a crédito para empresas que generen empleo formal.", pagina: 1 }
        ]
      },
      infraestructura: sinInformacion("infraestructura"),
      medio_ambiente: sinInformacion("medio ambiente"),
      tecnologia: sinInformacion("tecnología"),
      vivienda: sinInformacion("vivienda"),
      corrupcion: sinInformacion("corrupción")
    }
  }
];