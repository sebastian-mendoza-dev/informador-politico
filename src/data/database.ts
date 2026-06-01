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
  fase: 'segunda_vuelta' | 'general';
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
    candidato: "Abelardo De La Espriella",
    partido: "Defensores de la Patria / Los Nunca",
    fuente_pdf: "PROPUESTAS-DEL-TIGRE.pdf",
    fecha_procesamiento: "2026-05-29",
    fase: "segunda_vuelta",
    temas: {
      educacion: {
        resumen: "Fomento a la educación técnica, tecnológica y virtual, con énfasis en la evaluación docente y el acceso universitario por mérito y créditos.",
        propuestas: [
          { texto: "Crear programas de ciclos cortos en tecnologías de la cuarta revolución industrial, bilingüismo y economía del cuidado para formar jóvenes productivos.", pagina: 3 },
          { texto: "Implementar la evaluación docente para mejorar la calidad de la educación que se imparte a niños, niñas y adolescentes.", pagina: 3 },
          { texto: "Crear créditos blandos y un programa de méritos para atraer los mejores talentos a la universidad.", pagina: 3 },
          { texto: "Crear la Universidad Virtual en Casa con conectividad y computadores gratuitos.", pagina: 3 }
        ]
      },
      salud: {
        resumen: "Plan de choque para restablecer recursos de las EPS y fortalecimiento de la atención primaria y hospitalaria.",
        propuestas: [
          { texto: "Implementar un plan de choque de $10 billones y revisar los ajustes a la Unidad de Pago por Capitación (UPC).", pagina: 2 },
          { texto: "Fortalecer la medicina en atención primaria, promoción y prevención, inyectando tecnología a la gestión del sistema.", pagina: 2 },
          { texto: "Hacer más eficientes a las EPS desde lo administrativo fijando topes máximos a los costos de administración.", pagina: 2 },
          { texto: "Realizar arbitraje de los recursos mal administrados por la ADRES.", pagina: 2 }
        ]
      },
      seguridad: {
        resumen: "Mano dura contra el crimen organizado y el narcotráfico mediante la erradicación forzada de cultivos y la recuperación del control territorial.",
        propuestas: [
          { texto: "Destruir 330.000 hectáreas de coca utilizando fumigación aérea, erradicación manual y extradición.", pagina: 1 },
          { texto: "Desmontar milicias y poderes coercitivos paralelos para reafirmar el monopolio estatal de las armas.", pagina: 1 },
          { texto: "Crear un Bloque de Búsqueda contra la Extorsión y establecer una Primera Línea de Seguridad con veteranos y reservistas.", pagina: 1 }
        ]
      },
      economia: {
        resumen: "Reducción del tamaño del Estado, disminución de la carga tributaria y fomento de la inversión mediante una agresiva desregulación.",
        propuestas: [
          { texto: "Consolidar un programa de ajuste fiscal que reduzca el tamaño del Estado hasta en una cuarta parte para lograr superávit primario.", pagina: 2 },
          { texto: "Implementar la política 'Una entra y dos salen', eliminando dos regulaciones o trámites por cada nueva regulación impuesta al sector empresarial.", pagina: 2 },
          { texto: "Recuperar la exploración y producción de petróleo y gas otorgando seguridad jurídica y criterio técnico.", pagina: 2 }
        ]
      },
      empleo: {
        resumen: "Generación de empleo enfocado en el fortalecimiento del agro productivo y la formalización de la economía femenina y cultural.",
        propuestas: [
          { texto: "Generar más de 600.000 empleos rurales ampliando la frontera productiva en 2 millones de nuevas hectáreas.", pagina: 3 },
          { texto: "Formalizar 200.000 emprendimientos femeninos y formar a 150.000 mujeres en áreas de economía digital.", pagina: 3 },
          { texto: "Establecer una línea de acción creadora para capital semilla o coinversión en proyectos creativos y culturales.", pagina: 3 }
        ]
      },
      infraestructura: {
        resumen: "Inversión en vías y conectividad para la competitividad agroindustrial, junto con auditorías a obras inconclusas en salud.",
        propuestas: [
          { texto: "Abrir caminos de prosperidad moderna con construcción de vías, sistemas de riego y conectividad en el campo.", pagina: 3 },
          { texto: "Revisar los contratos no ejecutados en infraestructura en salud donde haya riesgo de corrupción o ineficiencia.", pagina: 2 }
        ]
      },
      medio_ambiente: {
        resumen: "Acelerar la transición hacia energías renovables con licenciamiento rápido y consolidar una política de bienestar animal.",
        propuestas: [
          { texto: "Promover las energías renovables, energías nuevas e industria 4.0 con una política de licenciamientos exprés.", pagina: 2 },
          { texto: "Reducir la sobrepoblación de fauna de calle mediante esterilización masiva, evitando el sacrificio animal y penalizando el maltrato.", pagina: 3 }
        ]
      },
      tecnologia: {
        resumen: "Modernización tecnológica de entidades de control, incorporación de blockchain y automatización con IA.",
        propuestas: [
          { texto: "Modernizar la DIAN implementando inteligencia artificial para reducir drásticamente los niveles de evasión de impuestos.", pagina: 2 },
          { texto: "Llevar todos los procesos de contratación pública a través de tecnología blockchain para el año 2030 y evitar alteraciones.", pagina: 1 }
        ]
      },
      vivienda: {
        resumen: "Facilitar la compra de inmuebles mediante la reducción drástica de tasas de interés a largo plazo.",
        propuestas: [
          { texto: "Crear el programa 'País de propietarios' para que los ciudadanos puedan comprar vivienda propia con tasas de interés del 2% a 30 años.", pagina: 2 }
        ]
      },
      corrupcion: {
        resumen: "Estrategia frontal y persecución de activos ilícitos liderada por el Ejecutivo y apoyada en el uso de datos abiertos.",
        propuestas: [
          { texto: "Crear el Bloque de Búsqueda contra la Corrupción, el cual será dirigido directamente por el Presidente de la República.", pagina: 1 },
          { texto: "Ejecutar una limpieza inmediata en las cabezas directivas de instituciones públicas, comenzando de manera urgente por Ecopetrol.", pagina: 1 },
          { texto: "Emplear inteligencia, análisis financiero y extinción de dominio exprés para la persecución de flujos financieros ilícitos.", pagina: 1 }
        ]
      }
    }
  },
  {
    candidato: "Iván Cepeda Castro",
    partido: "Pacto Histórico",
    fuente_pdf: "programa-gobierno-2026-2030.pdf",
    fecha_procesamiento: "2026-05-31",
    fase: "segunda_vuelta",
    temas: {
      educacion: {
        resumen: "Fortalecer el acceso a la educación básica, media y superior para la juventud en los territorios. Se prioriza el robustecimiento de instituciones locales y de los sistemas de conocimiento indígena ancestral.",
        propuestas: [
          { texto: "Fortalecer el acceso a la educación básica, media y a la educación superior para que la juventud de La Guajira participe con ciencia y conocimiento.", pagina: 26 },
          { texto: "Fortalecer la universidad del pueblo Wayuu para que los jóvenes indígenas puedan educarse en su propio sistema de conocimiento y visión del mundo.", pagina: 26 }
        ]
      },
      salud: {
        resumen: "Garantizar el fortalecimiento y la reforma del sistema de salud a nivel nacional. Se promueve un enfoque intercultural que integre de forma directa los sistemas de salud propios de las comunidades indígenas.",
        propuestas: [
          { texto: "Garantizar el fortalecimiento y la reforma del sistema de salud e implementar el sistema indígena de salud propio e intercultural.", pagina: 26 }
        ]
      },
      seguridad: {
        resumen: "Aborda la seguridad desde la dimensión humana, enfocándose en la implementación integral del Acuerdo de Paz, la reparación a las víctimas y el desarme en los territorios afectados por el conflicto.",
        propuestas: [
          { texto: "Cumplir de manera integral e implementar el Acuerdo Final de Paz firmado en 2016, acelerando y ejecutando con seriedad los Planes de Desarrollo con Enfoque Territorial (PDET).", pagina: 10 },
          { texto: "Llamar a los grupos ilegales a dejar las armas y avanzar en diálogos sociojurídicos territoriales para la reducción de homicidios.", pagina: 24 }
        ]
      },
      economia: {
        resumen: "Impulsar la soberanía alimentaria y la economía popular a través de redes comunitarias. Propone esquemas de comercio justo controlados por organizaciones de base y un diálogo concertado con los grandes gremios agropecuarios.",
        propuestas: [
          { texto: "Construir una red de abastecimiento y comercialización alimentaria que conecte al campo con las ciudades mediante redes de acopio, cuartos fríos y secaderos.", pagina: 9 },
          { texto: "Establecer un diálogo nacional con los gremios de producción agropecuaria, ganaderos y grandes terratenientes para concertar los beneficios de la revolución agraria.", pagina: 9 },
          { texto: "Avanzar en la redistribución estructural de la riqueza acompañada de reformas sociales con progresividad en derechos económicos, sociales y culturales.", pagina: 22 }
        ]
      },
      empleo: {
        resumen: "Promover la inclusión de las mujeres y poblaciones vulnerables dentro de las políticas laborales urbanas y rurales. Se busca que la transición energética justa y la reconversión de industrias no genere desempleo.",
        propuestas: [
          { texto: "Garantizar que la reconversión de las energías tradicionales a las energías limpias no signifique desempleo para los trabajadores de la explotación minera.", pagina: 26 },
          { texto: "Garantizar la inclusión prioritaria de las mujeres en las políticas y programas laborales, tanto en las ciudades como en las zonas rurales.", pagina: 22 }
        ]
      },
      infraestructura: {
        resumen: "Inversión masiva en infraestructura rural y conectividad territorial para dinamizar el campo. Se plantea la ejecución directa de las obras mediante contratación transparente con organizaciones populares y juntas de acción comunal.",
        propuestas: [
          { texto: "Crear y ejecutar el Plan Nacional de Construcción de Vías Terciarias para conectar los productos agrícolas y agropecuarios con los mercados.", pagina: 9 },
          { texto: "Implementar un régimen contractual simplificado, pedagógico y comunitario que permita a las juntas de acción comunal y organizaciones populares pavimentar sus calles y ejecutar obras sin trabas tributarias corporativas.", pagina: 8 }
        ]
      },
      medio_ambiente: {
        resumen: "Consolidar a Colombia como potencia natural mediante la transición hacia energías limpias y renovables. Prioriza el acceso al agua potable como eje central del desarrollo territorial y productivo.",
        propuestas: [
          { texto: "Convertir a La Guajira y al país en el epicentro de la generación de energía eólica y solar aprovechando sus condiciones naturales.", pagina: 26 },
          { texto: "Impulsar comunidades energéticas para permitir el acceso a la energía eléctrica limpia en zonas rurales y periferias urbanas.", pagina: 26 },
          { texto: "Garantizar el acceso al agua limpia y potable en las veredas y municipios históricamente excluidos de los servicios básicos.", pagina: 9 }
        ]
      },
      tecnologia: {
        resumen: "Modernizar los sectores productivos tradicionales mediante la inclusión de herramientas tecnológicas y el fortalecimiento de la ciencia aplicada.",
        propuestas: [
          { texto: "Implementar tecnología y acceso a mercados para las comunidades que viven de la pesca artesanal a través del Programa Nacional de Pesca y Piscicultura.", pagina: 9 }
        ]
      },
      vivienda: {
        resumen: "Garantizar la inclusión de las poblaciones vulnerables y étnicas en las políticas habitacionales del Estado, coordinando la inversión directamente desde las necesidades de los territorios.",
        propuestas: [
          { texto: "Garantizar la inclusión efectiva de las mujeres en las políticas y programas de vivienda del Estado, con enfoque diferencial urbano y rural.", pagina: 22 },
          { texto: "Ejecutar proyectos estratégicos de vivienda digna articulados a través del Pacto Territorial del Cauca y los planes PDET.", pagina: 10 }
        ]
      },
      corrupcion: {
        resumen: "Implementar una reforma profunda orientada a desmantelar los clanes políticos y controlar el gasto público. Se propone un sistema nacional preventivo, judicial y punitivo contra el saqueo del Estado.",
        propuestas: [
          { texto: "Crear el Sistema Nacional contra la Macrocorrupción que abarque la prevención, el control, la trazabilidad estricta del gasto público y el juzgamiento penal ejemplar.", pagina: 14 },
          { texto: "Implementar el principio de austeridad republicana en todas las esferas del Estado para eliminar la ostentación, los privilegios y el derroche de los dineros públicos.", pagina: 14 },
          { texto: "Perseguir penalmente a los clanes políticos regionales para proteger los dineros de las regalías y garantizar que se inviertan exclusivamente en el beneficio del pueblo.", pagina: 26 }
        ]
      }
    }
  },
  {
    candidato: "Claudia López",
    partido: "Alianza Verde / Independiente",
    fuente_pdf: "Programa-Gobierno-Claudia-Lopez-Leonardo-Huerta.pdf",
    fecha_procesamiento: "2026-05-31",
    fase: "general",
    temas: {
      educacion: {
        resumen: "La educación se concibe como el motor principal para la igualdad de oportunidades y el progreso social. Se plantea un modelo que articule la formación con el sector productivo para facilitar la inserción laboral directa.",
        propuestas: [
          { texto: "Crear un programa de un millón de becas de educación y trabajo para jóvenes, mujeres y mayores de 50 años.", pagina: 1 },
          { texto: "Garantizar cobertura universal y de calidad desde la primera infancia hasta la educación posmedia en todas las regiones.", pagina: 1 }
        ]
      },
      salud: {
        resumen: "Se busca transformar el sistema actual, superando la fragmentación y resolviendo su crisis financiera estructural mediante un modelo mixto e integral.",
        propuestas: [
          { texto: "Resolver la parálisis financiera del sistema para asegurar que los tratamientos y medicamentos lleguen a tiempo.", pagina: 1 }
        ]
      },
      seguridad: {
        resumen: "Recuperar el control territorial mediante un Estado legítimo, implementando una nueva Fiscalía Antimafia y un sistema judicial reformado.",
        propuestas: [
          { texto: "Crear una Fiscalía Antimafia dedicada a someter y desmantelar el crimen organizado, el narcotráfico y la corrupción.", pagina: 1 }
        ]
      },
      economia: {
        resumen: "Reactivación desde las regiones con el objetivo de duplicar la productividad del país en 20 años priorizando disciplina fiscal.",
        propuestas: [
          { texto: "Bajar 2 puntos la tasa de tributación empresarial de renta por cada punto adicional que crezca el PIB.", pagina: 1 }
        ]
      },
      empleo: {
        resumen: "Impulsar la creación de empleo privado y formal otorgando incentivos directos a los micronegocios y las mipymes.",
        propuestas: [
          { texto: "Implementar un esquema de apoyo directo, incentivos y crédito para micronegocios.", pagina: 1 }
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