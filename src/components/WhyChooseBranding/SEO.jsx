import React, { useEffect } from 'react';
import './WhyChooseBranding.css';
import Typed from 'typed.js';
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import s4 from '../../assets/s4.png';
import s5 from '../../assets/s5.png';
import s6 from '../../assets/s6.png';
import Galaxy from './Galaxy';

const SEO = () => {
  useEffect(() => {
    const typed = new Typed('#typed-highlight', {
      strings: ["relevance", "trust", "growth", "impact", "loyalty", "visibility"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  const features = [
    {
      id: 1,
      title: "Predictive SEO Analysis",
      subtitle: "Rank Before the Rush",
      description: "Predictive SEO analysis uses AI and data modeling to forecast what users will search for before they search for it...",
      image: s2,
      imageAlt: "Brand consistency mockup",
      layout: "left"
    },
    {
      id: 2,
      title: "On-Page SEO",
      subtitle: "Optimize with Foresight, Not Hindsight",
      description: "On-page SEO is about optimizing your content for both users and search engines...",
      image: s3,
      imageAlt: "Brand differentiation 3D design",
      layout: "right"
    },
    {
      id: 3,
      title: "Off-Page SEO",
      subtitle: "Build Authority Before the Spotlight Hits",
      description: "Off-page SEO focuses on building your site's reputation and digital authority...",
      image: s4,
      imageAlt: "Branding strategy diagram",
      layout: "left"
    },
    {
      id: 4,
      title: "Technical SEO",
      subtitle: "Strong Foundations. Seamless Performance.",
      description: "Technical SEO forms the foundation of your website's performance...",
      image: s5,
      imageAlt: "Pump neon sign",
      layout: "right"
    },
    {
      id: 5,
      title: "Local SEO",
      subtitle: "Be Found Before They Ask",
      description: "Local SEO converts high-intent traffic into real-world action...",
      image: s6,
      imageAlt: "Pump neon sign",
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
        hueShift={140}
        glowIntensity={0.3}
        density={0.9}
        speed={0.8}
        mouseRepulsion={true}
        twinkleIntensity={0.3}
        rotationSpeed={0.05}
      />

      <div className="branding-page-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <div className="branding-container">
          <div className="branding-overlay"></div>
          <div className="branding-content">
            <div className="branding-left">
              <div className="branding-badge">Next-Gen SEO Solution</div>
              <h1 className="branding-title">Search Engine Optimization</h1>
              <h1 className="branding-subtitle">is</h1>
              <h1 className="branding-highlight">
                <span id="typed-highlight"></span>
              </h1>
              <p className="branding-description">
                What if your SEO strategy could predict trends before they happen?
              </p>
            </div>
            <div className="branding-right">
              <div className="branding-image-container">
                <img src={s1} alt="Neon sign" className="branding-image" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Branding Section */}
        <div className="why-choose-branding">
          <div className="why-choose-header">
            <h2 className="why-choose-title">Why Choose Predictive SEO?</h2>
            <p className="why-choose-description">
              At ADM, we don't just optimize websites — we empower them to anticipate. Our AI-driven predictive SEO uses advanced algorithms, search data modeling, and machine learning to identify emerging keywords, rising topics, and shifting user intent before they peak.
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

export default SEO;
