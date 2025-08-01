import React from 'react';
import './ServiceSection.css';
import girl from '../../assets/girl.png'

const ServiceSection = () => {
  return (
    <div className="service-section">
      <div className="service-left" data-aos="fade-right">
        <img
          src={girl}
          alt="Team Working"
          className="main-image"
        />
        <h1>
          Crafting Winning <br /> Strategies With <br />
          <span>ADM Agency</span>
        </h1>
        <p>
          When you choose ADM Agency, you’re choosing a team that works hard,
          thinks big, and delivers real results. We’re committed to being the
          leading digital marketing agency in Dubai — and we’re ready to prove it.
        </p>
      </div>

      <div className="service-right" data-aos="fade-left">
        <div className="service-box hover-bg">
          <div className="number">01.</div>
          <div className="content">
            <h3>ANALYZE</h3>
            <p>
               We begin with a deep dive into your business, audience, and market landscape to uncover insights that shape impactful strategies
            </p>
          </div>
        </div>

        <div className="service-box hover-bg">
          <div className="number">02.</div>
          <div className="content">
            <h3>DESIGN</h3>
            <p>
             With strategy in place, our creative team designs engaging visuals and digital assets that reflect your brand and resonate with your audience.

            </p>
          </div>
        </div>

        <div className="service-box hover-bg">
          <div className="number">03.</div>
          <div className="content">
            <h3>MARKET</h3>
            <p>
             From SEO and social media to performance campaigns, we launch precision-targeted efforts that place your brand where it matters most — ahead of the competition.
            </p>
          </div>
        </div>
        
      </div>
      <div className="cont" data-aos="zoom-in-right">
          <h1>Fuel Business Growth with ADM Agency</h1>
           <h2> <span>from</span>  ADM Agency</h2>
           <p>ADM Agency is more than a marketing service — we’re your creative growth partner. As a full-service creative digital marketing agency in Dubai, we deliver digital solutions that increase visibility, enhance brand presence, and boost performance across every platform</p>
        </div>
    </div>
    
  );
};

export default ServiceSection;
