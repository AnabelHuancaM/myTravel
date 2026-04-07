
function Footer() {
  return (
   <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h4 className='footer-title'>MyTravel</h4>
            <p className='footer-text'>Tu compañero de aventuras, donde cada ruta es una historia por descubrir.</p>
          </div>

          <div className='col-md-4'>
            <h4 className='footer-title'>Producto</h4>
            <p className='footer-text'>¿Tienes preguntas o quieres compartir tu experiencia? Contáctanos en <a href='mailto:info@mytravel.com'>info@mytravel.com</a></p>
          </div>

          <div className='col-md-4'>
            <h4 className='footer-title'>Ubicación</h4>
            <p className='footer-text'>Av. José Pardo 801 Miraflores - Lima, Perú.</p>
          </div>

        </div>
      </div>
    </footer>
    ); 
}

export default Footer;