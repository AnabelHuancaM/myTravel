import { useNavigate } from "react-router-dom";

function CategoryCard({ id, title, description, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/categoria/${id}`);
    }
  };

  return (
    <div 
      className="card card_category cursor-pointer h-100" 
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }}
    >
      <img 
        src={image || "/src/assets/img/category/asia.webp"} 
        className="card-img" 
        alt={`Categoría ${title}`} 
        style={{ objectFit: "cover", height: "240px", width: "100%" }}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-end">
        <h5 className="mb-1 text-white">{title}</h5>
        <p className="card-text small mb-0">{description}</p>
      </div>
    </div>
  );
}

export default CategoryCard;