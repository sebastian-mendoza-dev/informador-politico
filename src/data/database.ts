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
  resumen: `El plan de gobierno oficial radicado por el candidato no desglosa una sección específica orientada al tema de ${tema}.`,
  propuestas: [
    { texto: `Se recomienda consultar la documentación oficial para validar posibles menciones indirectas sobre ${tema}.`, pagina: 1 }
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
        resumen: "Enfoque en carreras técnicas cortas orientadas al trabajo digital, bilingüismo, evaluación obligatoria a profesores y acceso universitario mediante mérito académico y facilidades de pago.",
        propuestas: [
          { texto: "Crear programas de ciclos cortos en tecnologías de la cuarta revolución industrial, bilingüismo y economía del cuidado para formar jóvenes productivos.", pagina: 3 },
          { texto: "Implementar la evaluación docente para mejorar la calidad de la educación que se imparte a niños, niñas y adolescentes.", pagina: 3 },
          { texto: "Crear créditos blandos y un programa de méritos para atraer los mejores talentos a la universidad.", pagina: 3 },
          { texto: "Crear la Universidad Virtual en Casa con conectividad y computadores gratuitos.", pagina: 3 }
        ]
      },
      salud: {
        resumen: "Plan financiero de emergencia para inyectar recursos económicos a las EPS, optimizar la atención en hospitales y limitar los gastos administrativos de las entidades prestadoras.",
        propuestas: [
          { texto: "Implementar un plan de choque de $10 billones y revisar los ajustes a la Unidad de Pago por Capitación (UPC).", pagina: 2 },
          { texto: "Fortalecer la medicina en atención primaria, promoción y prevención, inyectando tecnología a la gestión del sistema.", pagina: 2 },
          { texto: "Hacer más eficientes a las EPS desde lo administrativo fijando topes máximos a los costos de administración.", pagina: 2 },
          { texto: "Realizar arbitraje de los recursos mal administrados por la ADRES.", pagina: 2 }
        ]
      },
      seguridad: {
        resumen: "Estrategia frontal contra la delincuencia organizada y redes de narcotráfico mediante la reactivación de fumigaciones aéreas y la creación de frentes de seguridad ciudadana.",
        propuestas: [
          { texto: "Destruir 330.000 hectáreas de coca utilizando fumigación aérea, erradicación manual y extradición.", pagina: 1 },
          { texto: "Desmontar milicias y poderes coercitivos paralelos para reafirmar el monopolio estatal de las armas.", pagina: 1 },
          { texto: "Crear un Bloque de Búsqueda contra la Extorsión y establecer una Primera Línea de Seguridad con veteranos y reservistas.", pagina: 1 }
        ]
      },
      economia: {
        resumen: "Planes de austeridad para reducir el tamaño del Estado y los gastos públicos, eliminar trámites innecesarios para empresas y reactivar la exploración minero-energética de gas y petróleo.",
        propuestas: [
          { texto: "Consolidar un programa de ajuste fiscal que reduzca el tamaño del Estado hasta en una cuarta parte para lograr superávit primario.", pagina: 2 },
          { texto: "Implementar la política 'Una entra y dos salen', eliminando dos regulaciones o trámites por cada nueva regulación impuesta al sector empresarial.", pagina: 2 },
          { texto: "Recuperar la exploración y producción de petróleo y gas otorgando seguridad jurídica y criterio técnico.", pagina: 2 }
        ]
      },
      empleo: {
        resumen: "Creación de empleo masivo mediante la ampliación de tierras productivas en el agro, impulso a emprendimientos de mujeres y apoyo económico a proyectos culturales.",
        propuestas: [
          { texto: "Generar más de 600.000 empleos rurales ampliando la frontera productiva en 2 millones de nuevas hectáreas.", pagina: 3 },
          { texto: "Formalizar 200.000 emprendimientos femeninos y formar a 150.000 mujeres en áreas de economía digital.", pagina: 3 },
          { texto: "Establecer una línea de acción creadora para capital semilla o coinversión en proyectos creativos y culturales.", pagina: 3 }
        ]
      },
      infraestructura: {
        resumen: "Construcción y mejora de vías e infraestructura de riego en el sector rural para conectar los cultivos, junto con una revisión a las obras públicas de hospitales que estén frenadas.",
        propuestas: [
          { texto: "Abrir caminos de prosperidad moderna con construcción de vías, sistemas de riego y conectividad en el campo.", pagina: 3 },
          { texto: "Revisar los contratos no ejecutados en infraestructura en salud donde haya riesgo de corrupción o ineficiencia.", pagina: 2 }
        ]
      },
      medio_ambiente: {
        resumen: "Transición hacia energías limpias mediante un esquema de licencias ambientales rápidas y desarrollo de políticas de esterilización masiva para protección de animales de la calle.",
        propuestas: [
          { texto: "Promover las energías renovables, energías nuevas e industria 4.0 con una política de licenciamientos exprés.", pagina: 2 },
          { texto: "Reducir la sobrepoblación de fauna de calle mediante esterilización masiva, evitando el sacrificio animal y penalizando el maltrato.", pagina: 3 }
        ]
      },
      tecnologia: {
        resumen: "Uso de Inteligencia Artificial en la DIAN para combatir la evasión de impuestos y digitalización de la contratación del Estado con sistemas transparentes e incorruptibles.",
        propuestas: [
          { texto: "Modernizar la DIAN implementando inteligencia artificial para reducir drásticamente los niveles de evasión de impuestos.", pagina: 2 },
          { texto: "Llevar todos los procesos de contratación pública a través de tecnología blockchain para el año 2030 y evitar alteraciones.", pagina: 1 }
        ]
      },
      vivienda: {
        resumen: "Facilidades de adquisición de inmuebles propios para la ciudadanía reduciendo significativamente los intereses bancarios en créditos de larga duración.",
        propuestas: [
          { texto: "Crear el programa 'País de propietarios' para que los ciudadanos puedan comprar vivienda propia con tasas de interés del 2% a 30 años.", pagina: 2 }
        ]
      },
      corrupcion: {
        resumen: "Creación de un grupo especializado contra la corrupción manejado por la Presidencia, reestructuración de directivas en empresas del Estado y extinción de dominio rápida a dineros robados.",
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
        resumen: "Ampliación de la cobertura educativa pública gratuita en colegios y universidades regionales, enfocado en el desarrollo científico y el respeto a la educación propia e indígena.",
        propuestas: [
          { texto: "Fortalecer el acceso a la educación básica, media y a la educación superior para que la juventud de La Guajira participe con ciencia y conocimiento.", pagina: 26 },
          { texto: "Fortalecer la universidad del pueblo Wayuu para que los jóvenes indígenas puedan educarse en su propio sistema de conocimiento y visión del mundo.", pagina: 26 }
        ]
      },
      salud: {
        resumen: "Reforma estructural al modelo de salud pública enfocado en medicina preventiva comunitaria y la articulación formal de saberes medicinales ancestrales e interculturales.",
        propuestas: [
          { texto: "Garantizar el fortalecimiento y la reforma del sistema de salud e implementar el sistema indígena de salud propio e intercultural.", pagina: 26 }
        ]
      },
      seguridad: {
        resumen: "Seguridad basada en la protección humana, cumplimiento riguroso de los Acuerdos de Paz, aceleración de los planes territoriales (PDET) y sometimiento judicial de bandas criminales.",
        propuestas: [
          { texto: "Cumplir de manera integral e implementar el Acuerdo Final de Paz firmado en 2016, acelerando y ejecutando con seriedad los Planes de Desarrollo con Enfoque Territorial (PDET).", pagina: 10 },
          { texto: "Llamar a los grupos ilegales a dejar las armas y avanzar en diálogos sociojurídicos territoriales para la reducción de homicidios.", pagina: 24 }
        ]
      },
      economia: {
        resumen: "Búsqueda de la soberanía alimentaria mediante redes públicas de distribución agrícola, concertación de uso de tierras productivas con gremios y reformas sociales para redistribuir la riqueza.",
        propuestas: [
          { texto: "Construir una red de abastecimiento y comercialización alimentaria que conecte al campo con las ciudades mediante redes de acopio, cuartos fríos y secaderos.", pagina: 9 },
          { texto: "Establecer un diálogo nacional con los gremios de producción agropecuaria, ganaderos y grandes terratenientes para concertar los beneficios de la revolución agraria.", pagina: 9 },
          { texto: "Avanzar en la redistribución estructural de la riqueza acompañada de reformas sociales con progresividad en derechos económicos, sociales y culturales.", pagina: 22 }
        ]
      },
      empleo: {
        resumen: "Políticas para garantizar estabilidad laboral e ingresos económicos en la transición hacia energías limpias, priorizando puestos de trabajo para mujeres en entornos rurales y urbanos.",
        propuestas: [
          { texto: "Garantizar que la reconversión de las energías tradicionales a las energías limpias no signifique desempleo para los trabajadores de la explotación minera.", pagina: 26 },
          { texto: "Garantizar la inclusión prioritaria de las mujeres en las políticas y programas laborales, tanto en las ciudades como en las zonas rurales.", pagina: 22 }
        ]
      },
      infraestructura: {
        resumen: "Inversión prioritaria en la construcción de vías terciarias rurales firmando convenios directos de contratación comunitaria con juntas de acción comunal.",
        propuestas: [
          { texto: "Crear y ejecutar el Plan Nacional de Construcción de Vías Terciarias para conectar los productos agrícolas y agropecuarios con los mercados.", pagina: 9 },
          { texto: "Implementar un régimen contractual simplificado, pedagógico y comunitario que permita a las juntas de acción comunal y organizaciones populares pavimentar sus calles y ejecutar obras sin trabas tributarias corporativas.", pagina: 8 }
        ]
      },
      medio_ambiente: {
        resumen: "Transformación de la matriz energética nacional hacia plantas de energía solar y eólica, protección de ecosistemas hídricos y acceso al agua potable como derecho fundamental.",
        propuestas: [
          { texto: "Convertir a La Guajira y al país en el epicentro de la generación de energía eólica y solar aprovechando sus condiciones naturales.", pagina: 26 },
          { texto: "Impulsar comunidades energéticas para permitir el acceso a la energía eléctrica limpia en zonas rurales y periferias urbanas.", pagina: 26 },
          { texto: "Garantizar el acceso al agua limpia y potable en las veredas y municipios históricamente excluidos de los servicios básicos.", pagina: 9 }
        ]
      },
      tecnologia: {
        resumen: "Inclusión de herramientas digitales y modernización técnica para optimizar la cadena de producción de la pesca artesanal y la agricultura familiar.",
        propuestas: [
          { texto: "Implementar tecnología y acceso a mercados para las comunidades que viven de la pesca artesanal a través del Programa Nacional de Pesca y Piscicultura.", pagina: 9 }
        ]
      },
      vivienda: {
        resumen: "Acceso a planes estatales de vivienda digna con enfoque de género para mujeres vulnerables y asignación de recursos habitacionales integrados a los territorios PDET.",
        propuestas: [
          { texto: "Garantizar la inclusión efectiva de las mujeres en las políticas y programas de vivienda del Estado, con enfoque diferencial urbano y rural.", pagina: 22 },
          { texto: "Ejecutar proyectos estratégicos de vivienda digna articulados a través del Pacto Territorial del Cauca y los planes PDET.", pagina: 10 }
        ]
      },
      corrupcion: {
        resumen: "Creación de un sistema unificado para vigilar el dinero público, persecución judicial a redes políticas regionales que desvíen regalías y políticas de reducción de lujos del Estado.",
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
        resumen: "Estrategias de becas educativas completas ligadas al empleo para jóvenes y adultos mayores de 50 años, con planes de cobertura universal desde los primeros años de vida.",
        propuestas: [
          { texto: "Crear un programa de un millón de becas de educación y trabajo para jóvenes, mujeres y mayores de 50 años.", pagina: 1 },
          { texto: "Garantizar cobertura universal y de calidad desde la primera infancia hasta la educación posmedia en todas las regiones.", pagina: 1 }
        ]
      },
      salud: {
        resumen: "Saneamiento de deudas financieras de los prestadores de salud para agilizar los tiempos de asignación de citas, tratamientos y entrega de medicamentos.",
        propuestas: [
          { texto: "Resolver la parálisis financiera del sistema para asegurar que los tratamientos y medicamentos lleguen a tiempo.", pagina: 1 }
        ]
      },
      seguridad: {
        resumen: "Fortalecimiento de la justicia mediante una entidad judicial especializada para desarticular bandas de microtráfico, extorsión y delitos de cuello blanco.",
        propuestas: [
          { texto: "Crear una Fiscalía Antimafia dedicada a someter y desmantelar el crimen organizado, el narcotráfico y la corrupción.", pagina: 1 }
        ]
      },
      economia: {
        resumen: "Impulso productivo regional aplicando beneficios e incentivos tributarios en la declaración de renta a empresas que demuestren crecimiento en la economía nacional.",
        propuestas: [
          { texto: "Bajar 2 puntos la tasa de tributación empresarial de renta por cada punto adicional que crezca el PIB.", pagina: 1 }
        ]
      },
      empleo: {
        resumen: "Soporte directo, facilidades de acceso a créditos bancarios y acompañamiento a pequeños negocios y microempresas urbanas para generar puestos de trabajo formales.",
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