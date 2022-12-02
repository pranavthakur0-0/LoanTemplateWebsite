import "./Homecomponent2.css"
import {data} from  "./Homecomponent2data"
function Homecomponent2() {

    
    return (
      <>
      <div className="main-home-service-section">
      <div className="home-service-section-heading" id="component2">
      Why Should you get a <br /> loan for a used <span className="main-home-4-part-one-heading-back">Car ?</span> 
      </div>
      <div className="home-service-section-text">
      Getting a used car loan is beneficial because it allows you to bring your ideal car home quickly.
Additionally, the loan balance with interest can be repaid in convenient monthly instalments.
      </div>

            <section className="home-service-section">
    
              {data.map((data)=>
                {
                    return  <div key={data.id} className="home-service-section-module">
                    <div className="home-service-section-module-icon-wrapper">
                    <div className="home-service-section-module-icon" style={{ backgroundImage: `url("${data.img}")` }}>
                      </div>
                      <div className="home-service-section-module-index">
                        0{data.id}
                      </div>
                    </div>
                  
                      <div className="home-service-section-module-heading">
                        {data.heading}
                      </div>
                      <div className="home-service-section-module-text">
                      {data.text}
                      </div>

                     </div>
                })}
    
            </section>
            </div>
      </>
    );
  }
  
  export default Homecomponent2;
  