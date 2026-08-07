import { useParams, Link } from "react-router-dom";
import { getDestinationById } from "../../data/destinationsData";
import { getCategoryById } from "../../data/categoriesData";
import Banner from "../../components/common/Banner";

function DestinationDetailPage() {
  const { id } = useParams();
  const destination = getDestinationById(id);

  if (!destination) {
    return (
      <div className="container section text-center py-5">
        <h2>Destino no encontrado</h2>
        <p className="text-muted">El destino que estás buscando no existe o fue movido.</p>
        <Link to="/" className="btn btn-primary rounded-pill px-4 mt-3">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  const category = getCategoryById(destination.categoryId);

  return (
    <div className="destination-detail-page pb-5">
      {/* Banner / Cabecera */}
      <Banner
        bgImage={destination.img}
        height="380px"
        overlayGradient="linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)"
        className="align-items-end p-4 p-md-5 text-start"
      >
        {category && (
          <Link 
            to={`/categoria/${category.id}`} 
            className="badge bg-success text-decoration-none mb-2 px-3 py-2 text-uppercase"
          >
            {category.title}
          </Link>
        )}
        <h1 className="display-4 fw-bold mb-2">{destination.title}</h1>
        <p className="fs-5 mb-0 text-white-50">
          <i className="bi bi-geo-alt-fill text-danger me-2"></i>
          {destination.location}
        </p>
      </Banner>

      <div className="container my-5">
        <div className="row g-4">
          {/* Contenido Principal */}
          <div className="col-lg-8">
            <div className="d-flex flex-wrap gap-3 mb-4">
              <span className="badge bg-light text-dark border p-2 px-3 fs-6">
                <i className="bi bi-star-fill text-warning me-1"></i> {destination.rating} / 5.0
              </span>
              <span className="badge bg-light text-dark border p-2 px-3 fs-6">
                <i className="bi bi-clock me-1 text-primary"></i> {destination.duration}
              </span>
            </div>

            <h3 className="section-title fs-4">Descripción del Destino</h3>
            <p className="fs-5 text-secondary leading-relaxed mb-4">
              {destination.fullDescription}
            </p>

            <h4 className="fw-bold mb-3 mt-4">Actividades y Puntos de Interés</h4>
            <div className="row g-3 mb-4">
              {destination.highlights?.map((highlight, index) => (
                <div key={index} className="col-md-6">
                  <div className="p-3 border rounded-3 bg-white d-flex align-items-center">
                    <i className="bi bi-compass text-success fs-4 me-3"></i>
                    <span className="fw-semibold text-dark">{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar de Reserva / Precio */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 sticky-top" style={{ top: "100px" }}>
              <div className="border-bottom pb-3 mb-3">
                <small className="text-muted text-uppercase">Precio desde</small>
                <div className="d-flex align-items-baseline gap-2">
                  <h2 className="fw-bold text-success mb-0">${destination.price}</h2>
                  <span className="text-muted">/ persona</span>
                </div>
              </div>

              <ul className="list-unstyled text-muted small mb-4">
                <li className="mb-2"><i className="bi bi-check2 text-success me-2"></i> Cancelación gratuita hasta 48h antes</li>
                <li className="mb-2"><i className="bi bi-check2 text-success me-2"></i> Guía turístico certificado en español</li>
                <li className="mb-2"><i className="bi bi-check2 text-success me-2"></i> Traslados locales incluidos</li>
              </ul>

              <button className="btn btn-success btn-lg w-100 rounded-pill mb-3">
                Reservar Experiencia
              </button>

              <Link to="/" className="btn btn-outline-secondary w-100 rounded-pill">
                <i className="bi bi-arrow-left me-2"></i> Volver a la lista
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetailPage;
