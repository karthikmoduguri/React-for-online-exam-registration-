import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../css/Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Logo & About */}
          <div className="footer-about">
            <h2>ExamPortal</h2>
            <p>Your one-stop platform for all competitive exam registrations & updates.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="footer-contact">
            <h3>Connect With Us</h3>
            <p>Email: support@examportal.com</p>
            <p>Phone: +91 98765 43210</p>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ExamPortal. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
