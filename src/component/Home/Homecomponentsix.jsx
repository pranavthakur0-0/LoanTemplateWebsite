import { Link } from "react-router-dom";
import "./Homecomponentsix.css"
function Homecomponent6() {
    return (
      <>
           <div className="main-container-six">
            <div className="main-container-six-back">
                <div className="main-container-six-overlay">
                <span>Get In Touch</span>
                <Link id="main-container-six-link" to="/contact">Contact Us</Link>
                
                </div>

            </div>

           </div>
      </>
    );
  }
  
  export default Homecomponent6;
  