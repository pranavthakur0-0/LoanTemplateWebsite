import { Link } from "react-router-dom";
import "./TypesofLoan.css";
function TypesofLoan() {
  return (
    <>
      <div className="main-TypesofLoan">
        <h1>Loans That we <span className="main-home-4-part-one-heading-back">Offer</span> </h1>
        <div className="main-TypesofLoan-wrapper">
          <div className="main-TypesofLoan-box">
            <div className="main-TypesofLoan-box-heading">
            Top Up loan
            <p>Our Top-up Loan is designed to cater to the immediate financial need of the existing used car loan
customer of AS Financial ...</p>
            </div>
            <Link style={{textDecoration: "none"}} to="./about">
            <div className="main-TypesofLoan-box-read-more"> Read More</div>
            </Link>
          </div>
      
          <div className="main-TypesofLoan-box">
      
          <div className="main-TypesofLoan-box-heading">
          Refinance Loan
          <p>Avail finance against your existing car with AS Financial Services and you will enjoy a competitive
                rate of interest on your car payment ...</p>
            </div>
            <Link style={{textDecoration: "none"}} to="./about">
            <div className="main-TypesofLoan-box-read-more"> Read More</div>
            </Link>
          </div>

          <div className="main-TypesofLoan-box"></div>
        </div>
      </div>
    </>
  );
}

export default TypesofLoan;
