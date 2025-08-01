import React, { useEffect, useRef } from 'react';
import './WhyChooseBranding.css';
import Typed from 'typed.js';
import m1 from '../../assets/m1.png';
import m2 from '../../assets/m2.png';
import m3 from '../../assets/m3.png';
import m4 from '../../assets/m4.png';
import m5 from '../../assets/m5.png';
import Galaxy from './Galaxy';

const SocialMedia = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['success', 'engagement', 'influence', 'growth'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const features = [
    {
      id: 1,
      title: "Wider Reach",
      subtitle: "Connect with the World",
      description:
        "Platforms like Facebook, Instagram, LinkedIn, and TikTok host billions of users daily. Whether you're aiming globally or targeting a niche demographic, social media gives you unmatched power to reach the right people at the right time—helping you build brand awareness and stay competitive in a digital-first world.",
      image: m2,
      imageAlt: "Brand consistency mockup",
      layout: "left",
    },
    {
      id: 2,
      title: "Targeted Advertising",
      subtitle: "Reach Who Matters Most",
      description:
        "Social platforms offer advanced targeting tools that let you reach people based on age, location, interests, behaviors, and more. This precision ensures your content connects with those most likely to engage, improving campaign performance and maximizing ROI by cutting wasteful ad spend.",
      image: m3,
      imageAlt: "Brand differentiation 3D design",
      layout: "right",
    },
    {
      id: 3,
      title: "Boosts Website Traffic and SEO",
      subtitle: "Turn Shares into Searches",
      description:
        "By sharing direct links to your site, social media channels become a consistent traffic source. Increased engagement through likes, shares, and comments also enhances your visibility, contributing to higher SEO rankings and more backlinks—fueling both brand discovery and organic growth.",
      image: m4,
      imageAlt: "Branding strategy diagram",
      layout: "left",
    },
    {
      id: 4,
      title: "Brand Awareness & Loyalty",
      subtitle: "Familiar Faces Build Trusted Brands",
      description:
        "Frequent, value-driven posts build brand recognition, while meaningful engagement shows you care. By responding to comments and feedback, you create emotional connections that foster loyalty—turning followers into advocates and customers into community members.",
      image: m5,
      imageAlt: "Pump neon sign",
      layout: "right",
    },
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
          zIndex: -1,
        }}
        transparent={true}
        hueShift={240}
        glowIntensity={0.4}
        density={1.2}
        speed={1.1}
        mouseRepulsion={true}
        twinkleIntensity={0.6}
        rotationSpeed={0.1}
      />

      <div className="branding-page-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <div className="branding-container">
          <div className="branding-overlay"></div>
          <div className="branding-content">
            <div className="branding-left">
              <div className="branding-badge">Future SMM</div>
              <h1 className="branding-title">Social Media Marketing is</h1>
              <h1 className="branding-subtitle">is</h1>
              <h1 className="branding-highlight" style={{ color: '#00ccff' }}>
                <span ref={typedRef}></span>
              </h1>
              <p className="branding-description">Is your brand getting scrolled, posted, or shared?</p>
            </div>
            <div className="branding-right">
              <div className="branding-image-container">
                <img src={m1} alt="Neon sign" className="branding-image" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="why-choose-branding">
          <div className="why-choose-header">
            <h2 className="why-choose-title">Why Choose Social Media Marketing?</h2>
            <p className="why-choose-description">
              Social media marketing is essential for modern businesses and brands because it offers unique advantages that traditional marketing channels can't match.
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

export default SocialMedia;
