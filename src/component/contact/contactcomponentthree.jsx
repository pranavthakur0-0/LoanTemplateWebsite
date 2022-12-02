import axios from "axios";
import { useState } from "react";
import "./Contactcomponent3.css"

function Contactcomponent3() {

    const [info, setinfo] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });

      const callapi = async (e) => {
        e.preventDefault();
         axios.post('http://localhost:4000', {
          email: info.useremail,
          subject: "Contact us",
          firstname: info.firstname,
          lastname: info.lastname,
          contactmsg: info.message,
        });
      };

  const handlechange = (e) => {
    
    setinfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
    console.log(info);
  };

  const handlesubmit =  (e) => 
  {  
    e.preventDefault();
    callapi(e);
    e.target.reset();
  }
    
    return (
      <>
        <div className="main-container3">
            <div className="main-container3-one">
                <h1>Fill the form. <br />It's easy.</h1>
                <div className="main-container3-one-form">
                    <form className="form-class" onSubmit={handlesubmit}>
                        <span>
                        <input id="name" name="firstname" type="text" placeholder="First Name"            onChange={handlechange} />
                        <input id="name" name="lastname" type="text" placeholder="Last Name"             onChange={handlechange}/>
                        </span>
                        <input id="email" name="email" type="text" placeholder="eg : info@gmail.com"            onChange={handlechange} />
                        <textarea name="message" cols="50" rows="10" placeholder="Write your message"            onChange={handlechange}></textarea>
                        <button type="submit" className="Contact-submit">Send Message</button>
                    </form>
                </div>

            </div>
            <div className="main-container3-line"></div>
            <div className="main-container3-two">
            <h1>Let's talk about everything.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti itaque similique magni. Magni, laboriosam perferendis maxime!</p>
            </div>
            
        </div>
      </>
    );
  }
  
  export default Contactcomponent3;
  