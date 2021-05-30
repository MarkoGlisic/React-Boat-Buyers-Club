import './footer.css';
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-elements">
          <div className="logo-container-footer">
            <img src={logo} alt="logo" />
            <h3 className="logo-text">Just a boat rental company</h3>
          </div>
          <div className="location-and-info">
            <p>Belgrade</p>
            <p>11000, Serbia</p>
            <p className="company-footer-email">email@email.com</p>
          </div>
          <div className="social-media-btn">
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="policy"> 
          
            <p>Markiz © 2021 All Rights Reserved Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
