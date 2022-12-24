
import Navbar from "./Navbar.jsx"
import Aboutcomponent1   from "./about/aboutcomponentone.jsx"
import Aboutcomponent2   from "./about/aboutcomponenttwo.jsx"
import Aboutcomponent3   from "./about/aboutcomponentthree.jsx"
import Aboutcomponent4 from "./about/aboutcomponentfour.jsx"
import Footer from "./Footer.jsx"

function About() {
    return (
      <>
            <Navbar></Navbar>
            <Aboutcomponent1></Aboutcomponent1>
            <Aboutcomponent2></Aboutcomponent2>
            <Aboutcomponent3></Aboutcomponent3>
            <Aboutcomponent4></Aboutcomponent4>
            <div id="carousel-inner"></div>
            <Footer></Footer>
      </>
    );
  }
  
  export default About;
  