import React from "react"
import EmailForm from "../../components/EmailJsForm/EmailForm"
import LocationMap from "../../components/LocationMap/LocationMap"
import "../../index.css"
import "./contact.css"

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Whether you have a question about us,
            our products, pricing, or anything else, our team is ready to answer
            all your questions.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <h3>Email Us</h3>
            <EmailForm />
          </div>

          <div className="contact-map">
            <h3>Find Us</h3>
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
