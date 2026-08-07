import { useParams, Link } from "react-router-dom";
import { getCategoryById } from "../../data/categoriesData";
import { getDestinationsByCategory } from "../../data/destinationsData";
import PlaceCard from "../../components/cards/PlaceCard";
import Banner from "../../components/common/Banner";

function CategoryDetailPage() {
  const { id } = useParams();
  const category = getCategoryById(id);

  if (!category) {
    return (
      <div className="container section text-center py-5">
        <h2>Categoría no encontrada</h2>
        <p className="text-muted">La categoría que buscas no existe o ha sido movida.</p>
        <Link to="/" className="btn btn-primary rounded-pill px-4 mt-3">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  const categoryDestinations = getDestinationsByCategory(id);
  const galleryImages = category.gallery || [];

  return (
    <div className="category-detail-page pb-5">
      <Banner
        bgImage={category.banner}
        overlayGradient="linear-gradient(180deg, #FDFDFD 0%, #ffffff15 100%)"
        className=""
      >
        <span className="badge bg-success mb-2 px-3 py-2 text-uppercase fs-6">Categoría</span>
        <h1 className="display-4 fw-bold mb-2">{category.title}</h1>
        <p className="lead" style={{ maxWidth: "700px" }}>
          {category.description}
        </p>
      </Banner>

      <div className="container my-5">
        <section className='section'>
          <div className="row g-4">
            <div className="col-lg-8">
              <h3 className="section-title fs-4">Sobre esta categoría</h3>
              <p className="">{category.fullDescription}</p>

              <h3 className="section-title fs-4">Lo más destacado </h3>
                <ul className="list-unstyled mb-0">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-center text-secondary">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
            </div>

            <div className="col-lg-4">
              <img src={category.card} alt={category.title} className="img-fluid rounded shadow" />
            </div>
          </div>
        </section>

        <section className='section'>
          <h3 className="section-title fs-4 mb-5">Destinos en {category.title}</h3>
          <ul className="nav nav-underline mb-4" role="tablist">
            <li className="nav-item">
              <button className="nav-link active" id="tab-all" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">Todos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="tab-islas" data-bs-toggle="tab" data-bs-target="#islas" type="button" role="tab" aria-controls="islas" aria-selected="false">Islas</button>
            </li>
          </ul>

          {categoryDestinations.length > 0 ? (
            <div className="row g-4">
              {categoryDestinations.map((dest) => (
                <div key={dest.id} className="col-sm-6 col-md-4 col-lg-3">
                  <PlaceCard 
                    id={dest.id}
                    img={dest.img}
                    title={dest.title}
                    description={dest.description}
                    price={dest.price}
                    location={dest.location}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">Próximamente agregaremos más destinos a esta categoría.</p>
          )}

        </section>

        <section className='section'>
          <h3 className="section-title fs-4">Galería</h3>
          <div className="row g-4">
            {galleryImages.map((imgUrl, idx) => (
              <div key={idx} className="col-md-4">
                <div className="overflow-hidden rounded-3 shadow-sm" style={{ height: "450px" }}>
                  <img 
                    src={imgUrl} 
                    alt={`Galería ${category.title} ${idx + 1}`}
                    className="img-galery"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-5 text-center">
          <Link to="/" className="btn btn-outline-secondary rounded-pill px-4 py-2">
            <i className="bi bi-arrow-left me-2"></i> Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetailPage;
