import React from "react";
import "./NewAbout.css";
import lap from '../../assets/lap.png'
import gang from '../../assets/gangs.jpg'
import devolop from '../../assets/devlop.jpg'

const NewAbout = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <div className="about-header-bg">
        
          {/* <img src={devolop} alt="About Us Banner" className="header-img" /> */}
        </div>
        {/* <h1 className="about-title">About Us</h1> */}
      </div>

      {/* Main Info Section */}
      <div className="about-main">
        <div className="about-image-section">
          {/* Main image, replace 'main-img.jpg' as needed */}
          <img src={lap} alt="Laptops and workspace" className="about-main-img"  data-aos="fade-right" />
        </div>

        <div className="about-info-section"  data-aos="fade-left">
          <h2>
            Where Ideas Take Flight -<br />
            Elevate Your Online Experience with Our Web Services!
          </h2>
          <p className="about-desc">
            Welcome to ADM, a dynamic online platform brought to you by ThinkWebHub Pvt. Ltd., your premier destination for superior online web services...
          </p>
          <div className="about-stats">
            <div>
              <span className="about-stat-number">400+</span>
              <span className="about-stat-label">five-star ratings!</span>
            </div>
            <div>
              <span className="about-retention">98% client retention!</span>
            </div>
          </div>
          <ul className="about-features">
            <li>We provide a range of top-lor digital services under one roof.</li>
            <li>Our team of professionals brings a wealth of industry experience.</li>
            <li>We are dedicated to delivering superior quality in every project.</li>
          </ul>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="who-we-are-section">
        <h2  data-aos="zoom-in">Who We Are</h2>
        <p  data-aos="zoom-in">
          ADM is your go-to destination for exceptional online web services. We are a team of passionate experts, dedicated to crafting cutting-edge solutions...
        </p>
        {/* Team photo, replace 'team-img.jpg' accordingly */}
        <div className="who-we-are-team-img-section">
          <img src={gang} alt="Our Team" className="team-img" data-aos="fade-up" />
        </div>
        <div className="mission-vision-row" data-aos="fade-up">
          <div className="about-mission">
            <h3>Our Mission</h3>
            <p>
              At ADM, our mission is clear – to be your trusted partner in the digital realm, guiding you through the complexities of the online landscape...
            </p>
          </div>
          <div className="about-vision">
            <h3>Our Vision</h3>
            <p>
              At ADM, our vision is to be a catalyst for your digital success. We aspire to empower businesses and individuals with innovative online solutions...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAbout;
