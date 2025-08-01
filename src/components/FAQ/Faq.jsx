import React, { useState } from 'react';
import './Faq.css';
import faqImage from '../../assets/02.png'; // Use your image here

const faqData = [
  {
    question: 'What Kind Of Content Creation Do You Provide?',
    answer:
      'We craft engaging, SEO-optimized content including social media posts, blogs, ad creatives, branding material, and website copy — all part of our creative digital services in Dubai.',
  },
  {
    question: 'Do You Work With Startups Or Only Established Companies In Dubai?',
    answer:
      "We work with both! Whether you're a new business or an industry leader, we tailor strategies to your size, goals, and market.",
  },
  {
    question: 'Can You Help Rebrand My Business From Scratch?',
    answer:
      'Absolutely. We handle everything from brand identity design and messaging to digital launch strategies and ongoing marketing support.',
  },

  {
    question: "What Is ADM's Outsourcing Model In Dubai?",
    answer:
      'We provide trained digital marketing experts to work as in-house staff at your office in Dubai — with full ADM agency support and no visa or HR headaches.',
  },
  {
    question: " How do ADM’s creative digital services drive real business growth?",
    answer:
      ' Our strategies are tailored to your business goals. By combining SEO, social media, web development, and branding, we help you attract, engage, and convert the right audience — ensuring your business grows with measurable, long-term impact',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Open second by default

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-left"  data-aos="fade-right">
        <h4>ADM FAQ</h4>
        <h1>
          FREQUENTLY <br /> ASKED <span>Questions</span>
        </h1>
        <img src={faqImage} alt="faq visual" />
      </div>

      <div className="faq-right"  data-aos="fade-left">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{activeIndex === index ? '−' : '+'}</span> {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
