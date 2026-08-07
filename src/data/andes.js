const images = import.meta.glob("../assets/img/**/*.{png,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
});

export const andes = [
  {
    id: "huaraz-laguna-69",
    title: "Laguna 69 & Huaraz",
    location: "Ancash, Perú",
    description: "Aguas turquesas e imponentes glaciares en el corazón de la Cordillera Blanca.",
    fullDescription: "Uno de los trekkings más espectaculares de los Andes peruanos. Disfruta de paisajes de alta montaña y la majestuosidad de la Cordillera Blanca.",
    price: 190,
    img: images["../assets/img/category/andes/naturaleza/01.jpg"],
    categoryId: "andes",
    duration: "4 días / 3 noches",
    rating: 4.9,
    highlights: ["Trekking a Laguna 69", "Parque Nacional Huascarán", "Nevado Pastoruri", "Laguna Llanganuco"]
  },
  {
    id: "torres-del-paine",
    title: "Torres del Paine",
    location: "Magallanes, Chile",
    description: "Picos de granito, glaciares milenarios y estepas patagónicas de ensueño.",
    fullDescription: "Vive la aventura definitiva en la Patagonia chilena recorriendo macizos rocosos, glaciares navegables y el emblemático circuito de trekking.",
    price: 450,
    img: images["../assets/img/category/andes/naturaleza/02.jpg"],
    categoryId: "andes",
    duration: "6 días / 5 noches",
    rating: 5.0,
    highlights: ["Base Torres del Paine", "Glaciar Grey", "Valle del Francés", "Navegación por el Lago Pehoé"]
  },
  {
    id: "salar-de-uyuni",
    title: "Salar de Uyuni",
    location: "Potosí, Bolivia",
    description: "El desierto de sal más grande del mundo y su legendario efecto espejo.",
    fullDescription: "Un viaje surrealista a través del vasto salar andino, rodeado de desiertos de colores, géiseres, lagunas de flamencos y cielos estrellados inigualables.",
    price: 310,
    img: images["../assets/img/category/andes/naturaleza/03.jpg"],
    categoryId: "andes",
    duration: "4 días / 3 noches",
    rating: 4.8,
    highlights: ["Efecto espejo en temporada de lluvia", "Isla Incahuasi y cactus gigantes", "Laguna Colorada y flamencos", "Hotel de Sal"]
  },
]
 
export const getAndesDestinationById = (id) => andes.find((and) => and.id === id);