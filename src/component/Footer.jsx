
import "./Footer.css"

function Footer() {

    return (
      <>
            <div className="main-footer">
                <hr />
                <div className="main-footer-wrapper">

                <div className="main-footer-wrapper-menu footer-address">
                        <h2>
                        Registered office address
                        </h2>
                   
                        <p>Registered office address: CrypTopin Towers,Creative India Limited [CIN no. U104448], Opposite Bill Statue Tower, Drive-In Road, NY 380054. USA.</p>
                        <p>In case of any query, please Mail trade@cryptopin.com Or (011) 65444 00025</p>
                        </div>

                    <div className="main-footer-wrapper-menu">
                        <h2>Menu</h2>
                        <ul> 
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        </ul>
                        <br />
                        <h2>Legal</h2>
                        <ul> 
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        </ul>
                    </div>

                    <div className="main-footer-wrapper-email-box">
                        <h1>
                        Subscribe to our newsletter
                        </h1>
                        <p>Tempus quam pellentesque nec nam aliqu sem leo a diam sollicitudin tempor.</p>
                        <input type="email" className="main-footer-wrapper-email-box-input" maxLength="256" name="email" data-name="Email" placeholder="your@email.com" id="email" required=""></input>
                        <button className="main-footer-wrapper-email-box-input input-button">Subscribe</button>
             
                </div>
                </div>
                        
                        <br /><br />
                <hr />
                <h3>
                Copyright © Company 2022
                </h3>
               
            </div>
      </>
    );
  }
  
  export default Footer;