import { useState } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import FeatureCard from './components/cards/FeatureCard'
import CategoryCard from './components/cards/CategoryCard'
import PlaceCard from './components/cards/PlaceCard'
import CTA from './components/common/CTA'
import AboutUs from './components/home/AboutUs'
import Hero from './components/home/Hero'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Hero />

    <section className='section bg-grad'>
      <div className='container'>
        <h2 className='section-title'>Características</h2>
        <div className='row'>
          <div className='col-md-4 mb-3'>
            <FeatureCard title="Presupuesto Inteligente" description="Viaja más por menos. Optimizamos cada centavo para que el viaje dure lo que tú quieras." />
          </div>

          <div className='col-md-4 mb-3'>
            <FeatureCard title="Comunidad Viajera" description="No viajas solo. Te conectamos con grupos que comparten tu misma hambre de mundo." />
          </div>

          <div className='col-md-4 mb-3'>
            <FeatureCard title="Rutas personalizadas" description="Únete a rutas auténticas, duerme bajo las estrellas y descubre rincones que no salen en las postales." />
          </div>
        </div>
      </div>
    </section>

    <section className='section'>
      <div className='container'>
        <h2 className='section-title'>Categorías</h2>
        <div className='row'>
          <div className='col-md-4 mb-3'>
            <CategoryCard title="Islas" description="Descubre las islas más hermosas del mundo." />
          </div>
          <div className='col-md-4 mb-3'>
            <CategoryCard title="Casas subterráneas" description="Vive una experiencia única en casas subterráneas." />
          </div>
          <div className='col-md-4 mb-3'>
            <CategoryCard title="Lugares históricos" description="Explora los lugares históricos más interesantes." />
          </div>

        </div>
      </div>
    </section>

      <section className='section'>
        <div className='container'>
          <h2 className='section-title'>Destinos populares</h2>
            <ul className="nav nav-underline mb-5" role="tablist">
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
              <div className='tab-pane fade show active' id='all' role='tabpanel' aria-labelledby='tab-all'>
                <div className='row'>
                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Islas/01.webp" title="Santorini" 
                    description="Vistas al mar Egeo, atardeceres icónicos  Santorini, Grecia" price={320} />
                  </div>
                    
                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Islas/02.webp" title="Bora Bora" 
                    description="Bungalows sobre el agua y aguas cristalinas Polinesia Francesa" price={540} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Islas/03.webp" title="Bali" 
                    description="Templos, selva y cultura vibrante Bali, Indonesia" price={210} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Islas/04.webp" title="Maldivas" 
                    description="Vistas al mar Egeo, atardeceres icónicos  Santorini, Grecia" price={600} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Casas-sub/05.webp" title="Capadocia" 
                    description="Hoteles en cuevas y paisajes surrealistas Capadocia, Turquía" price={180} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Casas-sub/06.webp" title="Coober Pedy" 
                    description="Vida bajo tierra en el desierto Australia del Sur" price={140} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Casas-sub/07.jpg" title="Matmata" 
                    description="Casas trogloditas tradicionales Matmata, Túnez" price={120} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Casas-sub/08.jpg" title="Setenil de las Bodegas" 
                    description="Viviendas bajo formaciones rocosas Cádiz, España" price={160} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Lugares/01.webp" title="Maccu Picchu" 
                    description="Ruinas incas entre montañas Cusco, Perú" price={280} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Lugares/02.webp" title="Petra" 
                    description="Ciudad tallada en roca rosada Ma'an, Jordania" price={260} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Lugares/03.webp" title="Coliseo Romano" 
                    description="Icono del Imperio romano Roma, Italia" price={190} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Lugares/04.webp" title="Chichén Itzá" 
                    description="Pirámides mayas monumentales Yucatán, México" price={170} />
                  </div>
                </div>
              </div>

              <div className='tab-pane fade' id='islas' role='tabpanel' aria-labelledby='tab-islas'>  
                <div className='row'>
                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Islas/01.webp" title="Santorini" 
                    description="Vistas al mar Egeo, atardeceres icónicos  Santorini, Grecia" price={320} />
                  </div>
                    
                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Islas/02.webp" title="Bora Bora" 
                    description="Bungalows sobre el agua y aguas cristalinas Polinesia Francesa" price={540} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Islas/03.webp" title="Bali" 
                    description="Templos, selva y cultura vibrante Bali, Indonesia" price={210} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Islas/04.webp" title="Maldivas" 
                    description="Vistas al mar Egeo, atardeceres icónicos  Santorini, Grecia" price={600} />
                  </div>
                </div>
              </div>

              <div className='tab-pane fade' id='casas' role='tabpanel' aria-labelledby='tab-casas'>
                <div className='row'>
                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Casas-sub/05.webp" title="Capadocia" 
                    description="Hoteles en cuevas y paisajes surrealistas Capadocia, Turquía" price={180} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Casas-sub/06.webp" title="Coober Pedy" 
                    description="Vida bajo tierra en el desierto Australia del Sur" price={140} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Casas-sub/07.jpg" title="Matmata" 
                    description="Casas trogloditas tradicionales Matmata, Túnez" price={120} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Casas-sub/08.jpg" title="Setenil de las Bodegas" 
                    description="Viviendas bajo formaciones rocosas Cádiz, España" price={160} />
                  </div>
                </div>
              </div>
           
              <div className='tab-pane fade' id='lugares' role='tabpanel' aria-labelledby='tab-lugares'>  
                <div className='row'>
                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Lugares/01.webp" title="Maccu Picchu" 
                    description="Ruinas incas entre montañas Cusco, Perú" price={280} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Lugares/02.webp" title="Petra" 
                    description="Ciudad tallada en roca rosada Ma'an, Jordania" price={260} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Lugares/03.webp" title="Coliseo Romano" 
                    description="Icono del Imperio romano Roma, Italia" price={190} />
                  </div>

                  <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                    <PlaceCard img="src/assets/img/populares/Lugares/04.webp" title="Chichén Itzá" 
                    description="Pirámides mayas monumentales Yucatán, México" price={170} />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <AboutUs />
      

      <CTA />
      <Footer />
    </>
  )
}

export default App
