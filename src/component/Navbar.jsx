
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
      <>
      <div className="main-navbar-container">
        <div className="main-navbar-logo">
        </div>
        <div className="main-navbar-links">
            <nav>
                <NavLink className={({ isActive }) => isActive? "main-navbar-active main-navbar-links-decor":'main-navbar-links-decor'} to="/"  >Home  <span className="slider-navbar"></span> </NavLink>
                <NavLink className={({ isActive }) => isActive? "main-navbar-active main-navbar-links-decor": 'main-navbar-links-decor'}  to="/about" >About<span className="slider-navbar"></span></NavLink>
                <NavLink className={({ isActive }) => isActive? "main-navbar-active main-navbar-links-decor": 'main-navbar-links-decor'}  to="/contact" >Contact <span className="slider-navbar"></span></NavLink>
            </nav>


        </div>

      </div>
      </>
    );
  }
  
  export default Navbar;
  