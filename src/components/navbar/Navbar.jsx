import "./navbar.css"
import logo from "../../assets/images/logo.png"
import search from "../../assets/images/search.png"

const Navbar = () => {
  return (
    <div className="navbar-container">

      <div className="logo">
       <h1>Dr. Jesús Riaño </h1>
      </div>

      <div className="nav-items">
        <h3>Inicio</h3>
        <h3>Servicio</h3>
        <h3>Sobre Mí</h3>
        <h3>Contacto</h3>
       
      </div>


    </div>
  )
}

export default Navbar