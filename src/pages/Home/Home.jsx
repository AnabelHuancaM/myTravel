import Hero from '../../components/Hero.jsx';
import FeatureCard from '../../components/cards/FeatureCard.jsx';
import CategoryCard from '../../components/cards/CategoryCard.jsx';
import PlaceCard from '../../components/cards/PlaceCard.jsx';
import AboutUs from '../../components/AboutUs.jsx';
import CTA from '../../components/common/CTA.jsx';

import { categoriesData } from '../../data/categoriesData.js';
import { destinationsData } from '../../data/destinationsData.js';

function Home() {
  const Presupuesto = {
    title: "Presupuesto Inteligente", 
    description: "Viaja más por menos. Optimizamos cada centavo para que el viaje dure lo que tú quieras.",
    icono: "bi-cash-coin"
  };
  
  const Comunidad = {
    title: "Comunidad Viajera", 
    description: "No viajas solo. Te conectamos con grupos que comparten tu misma hambre de mundo.",
    icono: "bi-backpack"
  };

  const Rutas = {
    title: "Rutas personalizadas", 
    description: "Únete a rutas auténticas, duerme bajo las estrellas y descubre rincones que no salen en las postales.",
    icono: "bi-geo-alt"
  };

  return (
    <>
      <Hero />
      <section className='section bg-grad'>
        <div className='container'>
          <h2 className='section-title'>Características</h2>
          <div className='row g-4'>
            <div className='col-md-4 mb-3'>
              <FeatureCard title={Presupuesto.title} description={Presupuesto.description} icono={Presupuesto.icono} />
            </div>

            <div className='col-md-4 mb-3'>
              <FeatureCard title={Comunidad.title} description={Comunidad.description} icono={Comunidad.icono} />
            </div>

            <div className='col-md-4 mb-3'>
              <FeatureCard title={Rutas.title} description={Rutas.description} icono={Rutas.icono} />
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className='section'>
        <div className='container'>
          <h2 className='section-title'>Categorías</h2>
          <div className='row g-4'>
            {categoriesData.map((category) => (
              <div className='col-md-4 mb-3' key={category.id}>
                <CategoryCard 
                  id={category.id}
                  title={category.title} 
                  description={category.description}
                  card={category.card}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinos Populares */}
      <section className='section bg-light py-5'>
        <div className='container'>
          <h2 className='section-title'>Destinos populares</h2>

          <ul className="nav nav-underline mb-4" role="tablist">
            <li className="nav-item">
              <button className="nav-link active" id="tab-all" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">Todos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="tab-islas" data-bs-toggle="tab" data-bs-target="#islas" type="button" role="tab" aria-controls="islas" aria-selected="false">Islas</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="tab-casas" data-bs-toggle="tab" data-bs-target="#casas" type="button" role="tab" aria-controls="casas" aria-selected="false">Casas subterráneas</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="tab-lugares" data-bs-toggle="tab" data-bs-target="#lugares" type="button" role="tab" aria-controls="lugares" aria-selected="false">Lugares históricos</button>
            </li>
          </ul>

          <div className='tab-content'>
            {/* Todos */}
            <div className='tab-pane fade show active' id='all' role='tabpanel' aria-labelledby='tab-all'>
              <div className='row g-3'>
                {destinationsData.map((dest) => (
                  <div className='col-sm-6 col-md-4 col-lg-3' key={`all-${dest.id}`}>
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
            </div>

            {/* Islas */}
            <div className='tab-pane fade' id='islas' role='tabpanel' aria-labelledby='tab-islas'>  
              <div className='row g-4'>
                {destinationsData
                  .filter((dest) => dest.categoryId === 'islas')
                  .map((dest) => (
                    <div className='col-sm-6 col-md-4 col-lg-3' key={`islas-${dest.id}`}>
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
            </div>

            {/* Casas subterráneas */}
            <div className='tab-pane fade' id='casas' role='tabpanel' aria-labelledby='tab-casas'>
              <div className='row g-4'>
                {destinationsData
                  .filter((dest) => dest.categoryId === 'casas-subterraneas')
                  .map((dest) => (
                    <div className='col-sm-6 col-md-4 col-lg-3' key={`casas-${dest.id}`}>
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
            </div>
         
            {/* Lugares históricos */}
            <div className='tab-pane fade' id='lugares' role='tabpanel' aria-labelledby='tab-lugares'>  
              <div className='row g-4'>
                {destinationsData
                  .filter((dest) => dest.categoryId === 'lugares-historicos')
                  .map((dest) => (
                    <div className='col-sm-6 col-md-4 col-lg-3' key={`lugares-${dest.id}`}>
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
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
      
      <CTA />
    </>
  );
}

export default Home;