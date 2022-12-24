import apply from '../images/word.png'
import comparison from '../images/comparison.svg'
import sucess from '../images/sucess.svg'
import "./TypesofLoan.css";
function TypesofLoan() {
  return (
    <>
        <div className="main-TypesofLoan">
        <h1>Our Loan <span className="main-home-4-part-one-heading-back">Process</span> </h1>
        <div className="main-container-typeloan">
          <div className="typeloan-logo-content-box">
            <div className="typeloan-logo-content-box-logo">
              <span><img src={apply} alt="apply-icon" /></span>
             
            </div>
            <div className="typeloan-logo-content-box-border"></div>
            <div className="typeloan-logo-content-box-content">
            <h2>Apply</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur obcaecati aliquid non, possimus eveniet quos</p>

          </div>
          </div>

          <div className="typeloan-logo-content-box">
            <div className="typeloan-logo-content-box-logo">
              <span className='comparison'><img src={comparison} alt="compare-icon" /></span>
             
            </div>
            <div className="typeloan-logo-content-box-border"></div>
            <div className="typeloan-logo-content-box-content">
            <h2>Compare</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur obcaecati aliquid non, possimus eveniet quos</p>

          </div>
          </div>



          <div className="typeloan-logo-content-box">
            <div className="typeloan-logo-content-box-logo">
              <span className='succeed'><img src={sucess} alt="succeed-icon" /></span>
             
            </div>
            <div className="typeloan-logo-content-box-border"></div>
            <div className="typeloan-logo-content-box-content">
            <h2>Succeed</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur obcaecati aliquid non, possimus eveniet quos</p>

          </div>
          </div>


        </div>

        </div>
    </>
  );
}

export default TypesofLoan;
