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
    card: images["../assets/img/category/asia/card.webp"],
    banner: images["../assets/img/category/asia/banner.jpg"],
    features: ["Gastronomía exótica", "Templos budistas", "Mercados nocturnos", "Naturaleza frondosa"]
  },
  {
    id: "andes",
    title: "Cumbres de los Andes",
    description: "Trekking de alta intensidad, lagunas turquesa y cultura viva.",
    fullDescription: "Despierta sobre las nubes recorriendo la gran cordillera sudamericana. Senderismo de alta montaña y pueblos llenos de tradición.",
    card: images["../assets/img/category/andes/card.webp"],
    banner: images["../assets/img/category/andes/banner.jpg"],
    features: ["Senderismo y trekking", "Montañas majestuosas", "Cultura andina", "Aire puro"]
  },
  {
    id: "europa-low-cost",
    title: "Europa Low-Cost",
    description: "Trenes nocturnos, hostales con historia y capitales vibrantes.",
    fullDescription: "Recorre las capitales europeas optimizando tu presupuesto. Museos icónicos, vida nocturna y rutas ferroviarias escénicas.",
    card: images["../assets/img/category/europa/card.webp"],
    banner: images["../assets/img/category/europa/banner.jpg"],
    features: ["Pases de tren", "Hostales con encanto", "Tours a pie", "Vida nocturna"]
  },
];

export const getCategoryById = (id) => categoriesData.find((cat) => cat.id === id);