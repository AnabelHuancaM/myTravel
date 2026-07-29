import { useNavigate } from "react-router-dom";

function PlaceCard({ id, img, title, description, price = 0, location }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/destino/${id}`);
    }
  };

  return (
    <div 
      className="place-card h-100 d-flex flex-column justify-content-between"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }}
    >
      <div>
        <div className="overflow-hidden rounded mb-3" style={{ height: "180px" }}>
          <img 
            src={img} 
            className="w-100 h-100" 
            alt={`Imagen de ${title}`}
            style={{ objectFit: "cover" }} 
          />
        </div>
        <h5 className="mb-1">{title}</h5>
        {location && <small className="text-muted d-block mb-2">
          <i className="bi bi-geo-alt-fill destino-map me-1"></i>{location}</small>}
        <p className="small">{description}</p>
      </div>

      <div className="d-flex align-items-center justify-content-between pt-2">
        <h5 className="fw-bold text-dark fs-5">${price}</h5>

        {/* <button type="button" className="btn btn-outline-success btn-sm rounded-pill px-3">
          Ver detalle
        </button> */}
      </div>
    </div>
  );
}

export default PlaceCard;