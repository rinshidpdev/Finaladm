import React, { useEffect, useRef } from 'react';
import './WhyChooseBranding.css';
import Typed from 'typed.js';
import d1 from '../../assets/d1.jpg';
import d2 from '../../assets/d2.jpg';
import d3 from '../../assets/d3.jpg';
import d4 from '../../assets/d4.jpg';
import d5 from '../../assets/d5.jpg';
import Galaxy from './Galaxy';

const WebDesigning = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'clarity',
        'impact',
        'conversion',
        'usability',
        'speed',
        'emotion',
        'interaction',
        'experience',
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const features = [
    {
      id: 1,
      title: "Conversion Driven UI",
      subtitle: "Designs that Convert, Not Just Impress",
      description: "We don't design for vanity—we design for action. Our user interfaces are crafted to guide visitors through a seamless journey from landing to conversion. Every element—from button placement and color psychology to layout hierarchy and micro-interactions—is intentionally built to increase conversions.",
      image: d2,
      imageAlt: "Conversion UI design",
      layout: "left"
    },
    {
      id: 2,
      title: "Made to Feel Effortless",
      subtitle: "UX Grounded in Human Behavior",
      description: "We design with empathy, usability, and natural flow at the core. By leveraging behavioral psychology and user research, we create intuitive paths aligned with how real people think, browse, and decide. Every touchpoint is thoughtfully structured to eliminate friction and enhance flow.",
      image: d3,
      imageAlt: "User-centered design",
      layout: "right"
    },
    {
      id: 3,
      title: "Responsive by Default",
      subtitle: "Flawless Experience on Any Device",
      description: "Responsiveness is never an afterthought—it's built from the start. Using fluid grids, adaptive components, and mobile-first principles, we ensure your site looks and feels amazing on every screen size—smartphone, tablet, or desktop.",
      image: d4,
      imageAlt: "Responsive web preview",
      layout: "left"
    },
    {
      id: 4,
      title: "Built for Visual Impact",
      subtitle: "Motion, Color, and Typography That Captivate",
      description: "We blend bold aesthetics with strategic creativity to make your brand stand out. Through animation, color theory, and expressive typography, we craft an experience that resonates emotionally and visually—creating a lasting impression from the first glance.",
      image: d5,
      imageAlt: "Creative design showcase",
      layout: "right"
    }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Galaxy Background */}
      <Galaxy 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
        transparent={true}
        hueShift={0} // red/orange theme
        glowIntensity={0.35}
        density={1.0}
        speed={0.7}
        mouseRepulsion={true}
        twinkleIntensity={0.4}
        rotationSpeed={0.07}
      />

      <div className="branding-page-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <div className="branding-container">
          <div className="branding-overlay"></div>
          <div className="branding-content">
            <div className="branding-left">
              <div className="branding-badge">Intelligent Web Design</div>
              <h1 className="branding-title">Web Designing</h1>
              <h1 className="branding-subtitle">is</h1>
              <h1 className="branding-highlight">
                <span ref={typedRef}></span>
              </h1>
              <p className="branding-description">
                What if your website actually drove sales, not just traffic?
              </p>
            </div>
            <div className="branding-right">
              <div className="branding-image-container">
                <img src={d1} alt="Neon sign" className="branding-image" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Branding Section */}
        <div className="why-choose-branding">
          <div className="why-choose-header">
            <h2 className="why-choose-title">Why Do Users Stay Longer on Our Websites?</h2>
            <p className="why-choose-description">
              Beyond aesthetics, our designs are rooted in psychology, interaction, and clarity to convert casual visits into long connections.
            </p>
          </div>

          <div className="why-choose-features">
            {features.map((feature) => (
              <div key={feature.id} className={`feature-item ${feature.layout}`}>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <h4 className="feature-subtitle">{feature.subtitle}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="feature-image-container">
                  <img src={feature.image} alt={feature.imageAlt} className="feature-image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesigning;
