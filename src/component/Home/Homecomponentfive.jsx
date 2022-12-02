import { useEffect, useState}  from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Homecomponent5.css";


function Homecomponent5() {

  const [direction, setdirection]  = useState(-1);

  const slideprev = () => {
    const slider = document.getElementById("carousel-inner");
    if(direction === -1)
    {
      document.getElementById("carousel-inner").appendChild(slider.firstElementChild);
      setdirection(1);
    }
    setdirection(1);
    document.getElementById("carousel").style.justifyContent = "flex-end";
    document.getElementById("carousel-inner").style.transform = "translate(33.5%)";

  };

  const slidenext = () => {
    setdirection(-1);
    document.getElementById("carousel-inner").style.transform = "translate(-33.5%)";
    document.getElementById("carousel").style.justifyContent = "flex-start";
    
  };

  const changer= ()=>{
    const slider = document.getElementById("carousel-inner");
    if(direction === -1)
    {
      slider.appendChild(slider.firstElementChild);
    }
    else if(direction === 1)
    {
      slider.prepend(slider.lastElementChild);
    }
  
      slider.style.transition = 'none';
      slider.style.transform = "translate(0%)";
      setTimeout(()=>
      {
        slider.style.transition = '0.4s ease';
      })
    }


  useEffect(()=>
  {
    document.getElementById("carousel-inner").addEventListener("transitionend" , changer)
    return (()=>
    {
      document.getElementById("carousel-inner").removeEventListener("transitionend" , changer)
    })
  })



  return (
    <>
    <h1 className="main-container-5-heading">
    Browse Our Latest&nbsp;<div className="main-home-4-part-one-heading-back">Articles</div>
    </h1>
      <div className="main-container-5">
      <div onClick={slideprev} className="article-componentfive arrow-left">
          <IoIosArrowBack />
        </div>
        <div className="carousel" id="carousel">
          <div className="carousel-inner" id="carousel-inner">
            <div className="carousel-item">
              <div className="carousel-item-wrapper">
                <div className="carousel-item-box">
                  <div className="carousel-item-box-img">
                  </div>
                  <div className="carousel-item-box-name-date">
                  Lilyan Schiller&nbsp;&nbsp; &nbsp;|&nbsp;&nbsp; &nbsp;August 24, 2022
                  </div>
                  <div className="carousel-item-box-heading">
                  First Mover Asia: Bitcoin Hovers Over $21K In Weekend Trading
                  </div>
                  <div className="carousel-item-box-text">
                  Podcasting on low-hanging fruit to identify a ballpark value added activity to beta test override process.
                  </div>

                </div>
                <div className="carousel-item-box">1</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item-wrapper">
                <div className="carousel-item-box">
                  <div className="carousel-item-box-img">
                  </div>
                  <div className="carousel-item-box-name-date">
                  Lilyan Schiller&nbsp;&nbsp; &nbsp;|&nbsp;&nbsp; &nbsp;August 24, 2022
                  </div>
                  <div className="carousel-item-box-heading">
                  First Mover Asia: Bitcoin Hovers Over $21K In Weekend Trading
                  </div>
                  <div className="carousel-item-box-text">
                  Podcasting on low-hanging fruit to identify a ballpark value added activity to beta test override process.
                  </div>

                </div>
                <div className="carousel-item-box">2</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item-wrapper">
                <div className="carousel-item-box">
                  <div className="carousel-item-box-img">
                  </div>
                  <div className="carousel-item-box-name-date">
                  Lilyan Schiller&nbsp;&nbsp; &nbsp;|&nbsp;&nbsp; &nbsp;August 24, 2022
                  </div>
                  <div className="carousel-item-box-heading">
                  First Mover Asia: Bitcoin Hovers Over $21K In Weekend Trading
                  </div>
                  <div className="carousel-item-box-text">
                  Podcasting on low-hanging fruit to identify a ballpark value added activity to beta test override process.
                  </div>
                </div>
                <div className="carousel-item-box">3</div>
              </div>
            </div>
            </div>
          </div>
          <div onClick={slidenext} className="article-componentfive arrow-right">
          <IoIosArrowForward />
        </div>
        </div>
  
    
  
    </>
  );
}

export default Homecomponent5;
