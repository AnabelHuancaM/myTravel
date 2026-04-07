
function CategoryCard (props) {
    const { title, description } = props;

    const categories = [
        {    
            title: "Sudeste Asiático Express",
            description: "Templos, comida callejera y el caos más hermoso del mundo.",
            image: "sudeste-asiatico.webp"
        },
        {    
            title: "Cumbres de los Andes",
            description: "Despierta sobre las nubes. Trekking de alta intensidad y cultura viva.",
            image: "cumbres-andes.webp"
        },
        {    
            title: "Europa Low-Cost",
            description: "Trenes nocturnos, hostales con historia y las capitales más vibrantes.",
            image: "europa-low-cost.webp"
        },
    ];

  return (
    <div className="card card_category">
        <img src="src/assets/img/category/asia.webp" className="card-img" alt="..." />
        <div className="card-img-overlay">
        <h5 className="">{title}</h5>
        <p className="">{description}</p>
        </div>
    </div>
    ); 
}

export default CategoryCard;