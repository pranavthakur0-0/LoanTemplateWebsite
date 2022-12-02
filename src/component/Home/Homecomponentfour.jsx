import { useEffect, useRef } from "react";
import "./Homecomponent4.css"
import data from  "./Homecomponent4data.json"

function Homecomponent4() {

  const inputRef = useRef();
  
  const scrollHandler = () => {
    if(inputRef.current.getBoundingClientRect().top<2)
    {
      inputRef.current.style.position = "sticky";
      inputRef.current.style.top = 0;
    }
    else
    {
      inputRef.current.style.position = 'relative';
      inputRef.current.style.top = '';
    }

  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

    return (
      <>
          <div className="main-home-4">
            <div className="main-home-4-part-one" ref={inputRef}>
                  <div className="main-home-4-part-one-heading">
                  What Our Clients Say 
                  <div className="main-home-4-part-one-heading-back">
                  About Us
                  </div>
         
                  </div>
                  <div className="main-home-4-part-one-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem odit optio. Dolores distinctio odit perspiciatis officiis.

                  </div>
            </div>
            <div className="main-home-4-part-two">
              
            {data.testimonial.map((data)=>
                {
                  return  <div key={data.id} className={`main-home-4-part-two-box part-testimonial${data.id}`}>
                    <div className="main-home-4-part-two-box-icon-name">
                    <div className="main-home-4-part-two-box-icon"></div>
                    <div className="main-home-4-part-two-box-name">{data.name}</div>

                    </div>
                    <div className="main-home-4-part-two-box-text">
                      {data.text}
                    </div>


                  </div>
                })}
             

              
            </div>
          </div>
      

      </>
    );
  }
  
  export default Homecomponent4;