import "./Homecomponent3.css";
import {MdVerified } from "react-icons/md";

function Homecomponent3() {
  return (
    <>
      <div className="main-Homecomponent3">
        <div className="main-Homecomponent3-header">About Us</div>
        <div className="main-Homecomponent3-wrapper">
          <div className="main-Homecomponent3-part-one">
            <div className="main-Homecomponent3-part-one-heading">
              We are here to <br /> manage your finance with{" "}
              <div className="main-home-4-part-one-heading-back">
                Experience
              </div>
            </div>
            <div className="main-Homecomponent3-part-one-slider"></div>
            <div className="main-Homecomponent3-part-one-text">
              The argument in favor of using filler text goes something like
              this: If you use real content in the design process, anytime you
              reach a review point you’ll end up reviewing and negotiating the
              content itself and not the design.
            </div>
            <div className="main-Homecomponent3-part-one-links-wrapper">
              <div className="main-Homecomponent3-part-one-links">
                <div className="main-Homecomponent3-part-one-links-icon">
               <MdVerified className="MdVerified"/> <span> Looking for pre-owned car loans.</span>
                </div>
                <div className="main-Homecomponent3-part-one-links-icon">         
                <MdVerified className="MdVerified"/><span> Need a simple process to finance your purchase.</span>
                </div>
                <div className="main-Homecomponent3-part-one-links-icon">
                <MdVerified className="MdVerified"/><span>Need better loan repayment plans.</span>
                </div>
                <div className="main-Homecomponent3-part-one-links-icon">
                <MdVerified className="MdVerified"/><span>Need to make an immediate down payment.</span>
                </div>

                <div className="main-Homecomponent3-part-one-links-icon">
                <MdVerified className="MdVerified"/><span>Need better used car loan interest rates.</span>
                </div>
              </div>
            </div>

            <div className="main-Homecomponent3-part-one-contact">
              Call to ask any question <b>540-325-1523</b> or{" "}
              <b> 540-328-1265</b>
            </div>
          </div>
          <div className="main-Homecomponent3-part-two"></div>
        </div>
      </div>
    </>
  );
}

export default Homecomponent3;
