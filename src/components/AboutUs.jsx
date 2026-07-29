function AboutUs () {

  return (
    <section className='section'>
        <div className='container'>
          <h2 className='section-title'>Sobre nosotros</h2>
          <div className='row ai-center'>
            <div className='col-lg-6'>
              <p>
                Descubre el mundo como nunca antes
                <br /><br />
                Viajar no es solo moverse de un lugar a otro; es coleccionar momentos, sabores, paisajes y emociones que se quedan contigo para siempre. En nuestra plataforma de viajes, convertimos cada destino en una experiencia inolvidable, diseñada a tu medida.
                <br /><br />
                Explora ciudades vibrantes, playas paradisíacas y rincones ocultos con la confianza de contar con recomendaciones expertas, ofertas exclusivas y una planificación sencilla. Desde escapadas de fin de semana hasta aventuras alrededor del mundo, te acompañamos en cada paso: inspiración, reserva y viaje.
                <br /><br />
                Nuestro objetivo es simple: hacer que viajar sea fácil, accesible y emocionante. Compara precios, encuentra alojamientos únicos, descubre actividades auténticas y crea itinerarios personalizados en minutos.
                El mundo está lleno de historias esperando ser vividas. 
                </p>
            </div>

            <div className='col-lg-6'>
              <img src="/hero.webp" alt="Destino" className='img-fluid rounded-3'/>
            </div>

          </div>
        </div>
      </section>
    ); 
}

export default AboutUs;