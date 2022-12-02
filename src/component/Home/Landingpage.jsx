import "./Landingpage.css"
import {Link} from "react-router-dom";
import {Link as Lin} from 'react-scroll'
import { useEffect } from 'react';



function Landingpage() {

function parallax(e)
{
  let nn = (e.pageX*-1/20);
  let mm = (e.pageY*-1/20);
  const shape = document.querySelectorAll("#div");
  const heightt = document.querySelector(".main-landing-page-container");
 if(e.pageY <= heightt.offsetHeight)
  {
  for (let i = 0; i < shape.length; i++) {
    if(i===0)
    {
      shape[i].style.transform=`translateX(${nn}px) translateY(${mm}px)`;
    }
   else if(i===1)
    {
      let x = Math.abs(nn);
      shape[i].style.transform=`translateX(${-x}px) translateY(${nn*1.3}px)`;
    }
 else
    {
      let x = Math.abs(nn)*0.7;
      shape[i].style.transform=`translate3d( ${x}px ,  ${nn}px,  ${nn}px)`;
      ;
    }
   
  }
  }
 
}

useEffect(()=>
{
 document.addEventListener('mousemove', (e) =>parallax(e), true);
  return () => {
   document.removeEventListener('mousemove',(e) => parallax(e), true);
  };
});

    return (
      <>
        <div className="main-landing-page-container">
          <div className="main-landing-page-container-one">
            <div className="main-landing-page-container-heading">
            <h1>Our finance can give more possiblities of business.</h1>
            </div>
            <div className="main-landing-page-container-slider">
           
           </div>
           <div className="main-landing-page-container-text">
           The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach 
           </div>
           <div className="main-landing-page-container-link">
               <div className="Landingpage-link"> <Link className="Landingpage-link-text">Let's Start Now.</Link></div> 
           </div>
           <div className="main-landing-page-container-scroller">
           <Lin  to="component2" spy={true} smooth={true}>
            <div className="mouse"></div>
            </Lin>

            </div>

            </div>
            <div className="main-landing-page-container-two">
              <div className="landing-shape landingshape-one" id="div"></div>
              <div className="landing-shape landingshape-two" id="div"></div>
              <div className="landing-shape landingshape-three" id="div"></div>

            </div>
            
          


        </div>
      </>
    );
  }
  
  export default Landingpage;
  