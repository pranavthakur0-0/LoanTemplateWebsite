import "./Contactcomponent2.css"
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


function Contactcomponent2() {

    
    return (
      <>
                <div className="main-contact-container">
        <div className="main-contact-container-text">
            <h1>  Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe laboriosam quis vero voluptate molestias aliquid voluptas, non quam nihil qui quaerat voluptatibus quod!</p>
          
        </div>
        <div className="main-contact-container-info">
            <div className="main-contact-container-info-box">
                <div className="main-contact-container-info-box-content">
           <BsPhone className="BsPhone" /> 
           <a href="tel:123456789">+91 123456789</a>
           
            
                </div>
                <div className="main-contact-container-info-box-content">
              <HiOutlineMail className="HiOutlineMail"/> 
              <a href= "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqkJnFMZmgBMKPlBSMKgvFkRCLSNqKVdpKLmMKfhQJpWVFllpHFRftVwxmSXkvLMfrCxD"  target="_blank" rel="noreferrer">support@coin.com</a> 
            
                </div>

            </div>
            </div>
                </div>
      </>
    );
  }
  
  export default Contactcomponent2;
  