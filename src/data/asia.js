const images = import.meta.glob("../assets/img/**/*.{png,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
});


export const asia = [
  {
    id: "angor-wat",
    title: "Angkor Wat",
    location: "Siem Reap, Camboya",
    description: "Majestuoso complejo de templos y legado del Imperio Jemer",
    price: 230,
    img: "/src/assets/img/populares/Islas/03.webp",
    categoryId: "historicos",
  },
];

export const getCategoryById = (id) => asia.find((cat) => cat.id === id);
