import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"

import "../../index.css"
import "./footer.css"

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
          <li>
            <FontAwesomeIcon icon={faFacebookF} /> Facebook
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contacts</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> Phone
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Location
          </li>
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
  )
}

export default Footer
