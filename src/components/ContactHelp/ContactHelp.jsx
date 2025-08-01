import React from 'react';
import './ContactHelp.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa';

const contactCards = [
  {
    icon: <FaPhoneAlt />,
    title: '+971 543060098',
    desc: 'Feel free to call us for any inquiries or support you need.',
    action: 'Call Us Now',
    link: 'tel:+971543060098',
  },
  {
    icon: <FaEnvelope />,
    title: 'hello@admagency.ae',
    desc: 'Send us your queries or project details by email.',
    action: 'Send Email',
    link: 'mailto:hello@admagency.ae',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Office 603, DNI Building - Port Saeed - Dubai',
    desc: 'Visit us at our Dubai office for face-to-face consultation.',
    action: 'Visit Us Now',
    link: 'https://www.google.com/maps/place/DNI+Building+-+Port+Saeed+-+Dubai',
  },
  {
    icon: <FaWhatsapp />,
    title: 'Chat on WhatsApp',
    desc: 'Start a WhatsApp conversation with us for quick support.',
    action: 'Start Chat',
    link: 'https://wa.me/971543060098',
  },
];

const ContactHelp = () => {
  return (
    <div className="contact-help-container">
      <div className="contact-help-header">
        <p>// HELP CENTER</p>
        <h1>
          WE ARE <span className="highlight">Here To Help</span> YOU
        </h1>
      </div>

      <div className="contact-cards">
        {contactCards.map((card, index) => (
          <a
            key={index}
            className="contact-card"
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <hr />
            <p>{card.desc}</p>
            <div className="card-action">
              {card.action} <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactHelp;
