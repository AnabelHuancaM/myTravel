const images = import.meta.glob("../assets/img/**/*.{png,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
});

export const categoriesData = [
  {
    id: "asia",
    title: "Sudeste Asiático Express",
    description: "Templos, comida callejera y la biodiversidad más deslumbrante.",
    fullDescription: "Sumérgete en la riqueza cultural del Sudeste Asiático: desde los templos dorados de Tailandia hasta las selvas y playas de Bali.",
    image: "/src/assets/img/category/asia.webp",
    features: ["Gastronomía exótica", "Templos budistas", "Mercados nocturnos", "Naturaleza frondosa"]
  },
  {
    id: "andes",
    title: "Cumbres de los Andes",
    description: "Trekking de alta intensidad, lagunas turquesa y cultura viva.",
    fullDescription: "Despierta sobre las nubes recorriendo la gran cordillera sudamericana. Senderismo de alta montaña y pueblos llenos de tradición.",
    image: "/src/assets/img/category/cumbres-andes.webp",
    features: ["Senderismo y trekking", "Montañas majestuosas", "Cultura andina", "Aire puro"]
  },
  {
    id: "europa-low-cost",
    title: "Europa Low-Cost",
    description: "Trenes nocturnos, hostales con historia y capitales vibrantes.",
    fullDescription: "Recorre las capitales europeas optimizando tu presupuesto. Museos icónicos, vida nocturna y rutas ferroviarias escénicas.",
    image: "/src/assets/img/category/europa-low-cost.webp",
    features: ["Pases de tren", "Hostales con encanto", "Tours a pie", "Vida nocturna"]
  },

  /* {
    id: "islas",
    title: "Islas Paradisíacas",
    description: "Descubre las islas más hermosas y cristalinas del mundo.",
    fullDescription: "Explora archipiélagos vírgenes, bungalows sobre el agua, arrecifes de coral y las playas de arena blanca más impresionantes del planeta.",
    image: "/src/assets/img/populares/Islas/01.webp",
    features: ["Resorts de lujo", "Buceo y esnórquel", "Atardeceres inolvidables", "Playas privadas"]
  },
  {
    id: "casas-subterraneas",
    title: "Casas Subterráneas",
    description: "Vive una experiencia única en alojamientos bajo tierra y cuevas.",
    fullDescription: "Descubre la fascinante arquitectura subterránea y troglodita. Hospédate en cuevas históricas adaptadas con todas las comodidades modernas.",
    image: "/src/assets/img/populares/Casas-sub/05.webp",
    features: ["Hoteles en cuevas", "Clima natural perfecto", "Arquitectura milenaria", "Vistas espectaculares"]
  },
  {
    id: "lugares-historicos",
    title: "Lugares Históricos",
    description: "Explora los monumentos y maravillas antiguas más interesantes.",
    fullDescription: "Viaja en el tiempo recorriendo ciudadelas incas, monumentos romanos, ciudades talladas en roca y estructuras legendarias declaradas Patrimonio de la Humanidad.",
    image: "/src/assets/img/populares/Lugares/01.webp",
    features: ["Patrimonio de la Humanidad", "Guías expertos", "Cultura milenaria", "Fotografía épica"]
  }, */
];

export const getCategoryById = (id) => categoriesData.find((cat) => cat.id === id);
