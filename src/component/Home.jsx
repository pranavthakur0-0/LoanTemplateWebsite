
import Navbar from "./Navbar.jsx"
import "./Home.css"
import Landingpage from "./Home/Landingpage.jsx"
import Homecomponent2   from "./Home/Homecomponenttwo.jsx"
import Homecomponent3   from "./Home/Homecomponentthree.jsx"
import TypesofLoan from "./Home/TypesofLoan.jsx"

import Homecomponent4   from "./Home/Homecomponentfour.jsx"
import Homecomponent5   from "./Home/Homecomponentfive.jsx"
import Homecomponent6   from "./Home/Homecomponentsix.jsx"
import Footer from "./Footer.jsx"

function Home() {
    return (
      <>
            <Navbar></Navbar>
            <Landingpage />
            <Homecomponent2 />
            <Homecomponent3 />
            <TypesofLoan />

            <Homecomponent4 />
            <Homecomponent5 />
            <Homecomponent6 />
            <Footer></Footer>

      </>
    );
  }
  
  export default Home;
  