import React, { FC } from "react";
import "./footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Information</h3>
        <ul>
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Social Media</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contacts</h3>
        <ul>
          <li>Email</li>
          <li>Phone</li>
          <li>Location</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Jobs</h3>
        <ul>
          <li>Careers</li>
          <li>Internships</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
