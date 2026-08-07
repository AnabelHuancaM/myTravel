import Banner from "./common/Banner";

function Hero() {
  return (
    <Banner 
      bgImage="/hero.webp"
      overlayGradient="linear-gradient(90deg, #FDFDFD 0%, #ffffff15 100%)"
      containerClassName="hero"
    >
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <h1 className='hero-title'>El mundo es demasiado grande para verlo desde el sofá.</h1>
          <p className='hero-text'>Únete a rutas auténticas, duerme bajo las estrellas y descubre rincones que no salen en las postales. Tu mochila, tus reglas.</p>
          <a href='#' className='btn btn-light'>Ver más <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </Banner>
  ); 
}

export default Hero;