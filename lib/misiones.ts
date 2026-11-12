/**
 * Las misiones: los proyectos de reforestación de la asociación.
 *
 * Cada misión es un terreno concreto con nombre propio. Esta es la
 * página a la que apunta, desde la tienda, el código QR de la etiqueta
 * de cada prenda: compras, escaneas, ves el mapa de tu bosque y desde
 * ahí llegas aquí, al proyecto entero con sus datos de seguimiento.
 *
 * REGLA DE LA CASA, la misma que en la trazabilidad de la tienda: aquí
 * no se escribe nada que no se pueda demostrar. El valor PENDIENTE se
 * muestra como un hueco visible, a propósito. Una asociación que publica
 * cifras de supervivencia inventadas no tiene nada que la distinga de
 * las que no publican nada.
 *
 * Los tres estados no son decorativos, cambian lo que la página puede
 * afirmar:
 *   · prevista   — hay intención y trabajo previo. Sin cifras de
 *                  resultado, porque todavía no hay resultado.
 *   · en-curso   — plantación ejecutada, seguimiento en marcha.
 *   · completada — ciclo de seguimiento cerrado y auditado.
 */

export const PENDIENTE = 'PENDIENTE' as const;

export type Dato = string;

/** Grados decimales. Latitud norte y longitud este, en positivo. */
export type Coordenadas = { lat: number; lon: number };

export type EstadoMision = 'prevista' | 'en-curso' | 'completada';

export type Mision = {
  slug: string;
  nombre: string;
  estado: EstadoMision;
  /** Una frase. Lo que se lee en el índice bajo el nombre. */
  resumen: string;
  /** Dos o tres párrafos. Por qué este sitio y no otro. */
  contexto: string[];

  ubicacion: {
    zona: Dato;
    municipio: Dato;
    provincia: Dato;
    /** null mientras no haya terreno cerrado: entonces no se dibuja mapa. */
    coordenadas: Coordenadas | null;
  };

  terreno: {
    superficie: Dato;
    estadoPrevio: Dato;
    titularidad: Dato;
  };

  plantacion: {
    especies: Dato;
    arboles: Dato;
    densidad: Dato;
    fecha: Dato;
  };

  seguimiento: {
    supervivencia: Dato;
    mediciones: Dato;
    verificacion: Dato;
  };

  apoyos: {
    propietario: Dato;
    administraciones: Dato;
    empresas: Dato;
    financiacion: Dato;
  };

  /** Códigos de lote de Forest Classics que financian esta misión. */
  lotes: string[];
};

export const MISIONES: Mision[] = [
  {
    slug: 'monegrillo',
    nombre: 'Misión Monegrillo',
    estado: 'prevista',
    resumen:
      'Restauración de suelo degradado en Los Monegros, una de las zonas más áridas de la Península.',
    contexto: [
      'Los Monegros es territorio de estepa: lluvias escasas y mal repartidas, veranos muy secos y suelos pobres en materia orgánica. Es uno de los lugares de España donde la desertificación no es una amenaza futura sino un paisaje presente.',
      'Por eso es un buen sitio para empezar. Si el método funciona aquí —aportar compost certificado para devolverle al suelo la materia orgánica que perdió, y plantar especies que ya pertenecen a este clima— funciona en casi cualquier parte de la mitad sur peninsular.',
      'La restauración se plantea por fases y no de una vez. Primero arbustos autóctonos y sabinas, que son las especies capaces de agarrar en un suelo así y de crear la sombra y la humedad que las demás necesitan. Las encinas llegan en una segunda fase, cuando el terreno esté en condiciones de sostenerlas. Plantar encinas el primer año en Los Monegros es plantar leña seca.',
      'La misión está en preparación. Según avance, esta página se irá rellenando con los datos reales de cada fase, incluidos los que no salgan bien.',
    ],

    ubicacion: {
      zona: 'Los Monegros',
      municipio: 'Monegrillo',
      provincia: 'Zaragoza',
      // Se rellena cuando haya parcela cerrada. Mientras sea null, la
      // página no dibuja mapa y lo dice en lugar de disimularlo.
      coordenadas: null,
    },

    terreno: {
      superficie: PENDIENTE,
      estadoPrevio: PENDIENTE,
      titularidad: PENDIENTE,
    },

    plantacion: {
      especies:
        'Fase 1: arbustos autóctonos y sabina (Juniperus thurifera). Fase 2: encina (Quercus ilex), cuando el suelo pueda sostenerla.',
      arboles: PENDIENTE,
      densidad: PENDIENTE,
      fecha: 'Fase 1 prevista para la primavera de 2027',
    },

    seguimiento: {
      supervivencia: PENDIENTE,
      mediciones: PENDIENTE,
      verificacion: PENDIENTE,
    },

    apoyos: {
      propietario: PENDIENTE,
      administraciones: PENDIENTE,
      empresas: PENDIENTE,
      financiacion: PENDIENTE,
    },

    lotes: [],
  },
];

export function getMision(slug: string): Mision | null {
  const limpio = slug.trim().toLowerCase();
  return MISIONES.find((m) => m.slug === limpio) ?? null;
}

export function esPendiente(valor: string): boolean {
  return valor === PENDIENTE;
}

export const ETIQUETA_ESTADO: Record<EstadoMision, string> = {
  prevista: 'Prevista',
  'en-curso': 'En curso',
  completada: 'Completada',
};

/**
 * Mapa incrustado de OpenStreetMap, igual que en las páginas de lote de
 * la tienda: sin clave de API y sin rastrear a quien lo mira. El margen
 * deja ver unos kilómetros a la redonda, suficiente para situar la
 * parcela sin dar el punto exacto.
 */
export function mapaUrl({ lat, lon }: Coordenadas): string {
  const m = 0.03;
  const bbox = [lon - m, lat - m, lon + m, lat + m].join('%2C');
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
}

export function mapaEnlace({ lat, lon }: Coordenadas): string {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=12/${lat}/${lon}`;
}
