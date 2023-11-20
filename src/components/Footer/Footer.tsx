import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './footer.css';

type FooterLinkItemProps = {
  href: string;
  icon: any;
  children: React.ReactNode;
};

const FooterLinkItem: React.FC<FooterLinkItemProps> = ({ href, icon, children }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={String(children)}>
      <FontAwesomeIcon icon={icon} /> {children}
    </a>
  </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <FooterLinkItem href="https://facebook.com" icon={faFacebookF}>
            Facebook
          </FooterLinkItem>
          <FooterLinkItem href="https://twitter.com" icon={faTwitter}>
            Twitter
          </FooterLinkItem>
          <FooterLinkItem href="https://instagram.com" icon={faInstagram}>
            Instagram
          </FooterLinkItem>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <FooterLinkItem href="mailto:info@example.com" icon={faEnvelope}>
            Email
          </FooterLinkItem>
          <FooterLinkItem href="tel:+123456789" icon={faPhone}>
            Phone
          </FooterLinkItem>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Location
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Opportunities</h4>
        <ul>
          <li>Careers</li>
          <li>Internships</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
