import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../../index.css"
import './emailForm.css';

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_5lxdcjt', 'template_76dzu8g', e.currentTarget, 'TLiQpez9SH3JdqU5d')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={sendEmail} className="email-form">
      <input 
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="email-form-input"
      />
      <input 
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="email-form-input"
      />
      <input 
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="email-form-input"
      />
      <textarea 
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="email-form-textarea"
      />
      <button type="submit" className="email-form-button">Send</button>
    </form>
  );
};

export default EmailForm;
