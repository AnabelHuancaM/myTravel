
function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container">
            <a className="navbar-brand logo-text" href="#">
                <img src="./Logo.svg" className='me-3' alt="myTravel" width="50" height="50"/>
                MyTravel
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Categorías</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Destinos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    ); 
}

export default Navbar;