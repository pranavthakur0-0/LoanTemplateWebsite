

import { useEffect } from "react";
import "./Simpleprocess.css";
function Simpleprocess() {


function changer(e)
  {
    let x = document.getElementsByClassName("main-simple-process")[0].getBoundingClientRect().y;
    if(x > -880 && x < 0)
    {
      x = Math.abs(x)
     document.getElementById("circle-mover").style.transform = `translateY(${x}px)`; 
    }
  }



useEffect(()=>
{
 document.addEventListener("scroll", (e) =>changer(e), true);
  return () => {
   document.removeEventListener("scroll",(e) => changer(e), true);
  };
});


  return (
    <>
      <div className="main-simple-process">

        <h1>Easy Application <span className="main-home-4-part-one-heading-back">Process</span></h1>
        
        
      <div className="main-simple-process-container"> 
      <div className="main-simple-process-container-line">
        <span id="circle-mover"></span>
      </div>
<div className="main-simple-process-container-line-content-wrapper">

      <div className="main-simple-process-container-line-content">
          <div className="main-simple-process-container-line-content-one">
              <div className="main-simple-process-one" id="simple-process">
                sadfasdfadsfsdaf
              </div>
              <div className="main-simple-process-three" id="simple-process">
                sadfasdfadsfsdaf
              </div>
          </div>
        </div>

        <div className="main-simple-process-container-line-content">
          <div className="main-simple-process-container-line-content-two">
          <div className="main-simple-process-two" id="simple-process">
                sadfasdfadsfsdaf
              </div>
              <div className="main-simple-process-four" id="simple-process">
                sadfasdfadsfsdaf
              </div>
          </div>
        </div>
      </div>
    
</div>
           
      
            </div>
    </>
  );
}

export default Simpleprocess;
