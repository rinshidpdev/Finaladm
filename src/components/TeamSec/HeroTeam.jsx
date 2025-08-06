
import React from 'react';
import d from '../../assets/cable11.png'
import fl1 from '../../assets/fly1.png'
import fl2 from '../../assets/fly2.png'
import hand from '../../assets/hand1112.png'
import pattern from '../../assets/pattern1.png'
import robo from '../../assets/robo-hand.png'

const HeroTeam = () => {
  return (
    <div className="contact-banner">
     
      
      {/* Overlay for better text readability */}
      <div className="overlay"></div>
      
      {/* Flying Butterflies - ADD YOUR BUTTERFLY IMAGES HERE */}
      <div className="butterflies-container">
        <div className="butterfly butterfly-1">
          <img src={fl1} alt="Butterfly 1" />
        </div>
        
        <div className="butterfly butterfly-2">
          <img src={fl2} alt="Butterfly 2" />
        </div>
      </div>

      {/* 3D Geometric Elements Container */}
      <div className="geometric-container">
        
        {/* 3D Geometric Ring/Torus - ADD YOUR 3D RING IMAGE HERE */}
        <div className="geometric-ring">
          <img src={d} alt="3D Geometric Ring" />
        </div>
        
        {/* Robotic Hand - ADD YOUR ROBOT HAND IMAGE HERE */}
        <div className="robotic-hand">
          <img src={robo} alt="Robotic Hand" />
        </div>
        
        {/* Human Hand - ADD YOUR HUMAN HAND IMAGE HERE */}
        <div className="human-hand">
          <img src={hand} alt="Human Hand" />
        </div>
        
        {/* Red Cubes - ADD YOUR RED CUBES IMAGE HERE */}
        <div className="red-cubes">
          <img src={pattern} alt="Red Cubes" />
        </div>
        
      </div>

      {/* CONTACT Text - Thick Outline Style */}
      <div className="contact-text">
        <h1>TEAM</h1>
      </div>

      <style jsx>{`
        .contact-banner {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: linear-gradient(180deg, #f472b6 0%, #fbbf24 100%);
        }
        
        /* Background Image */
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .background-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        /* Overlay */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          z-index: 2;
        }
        
        /* Flying Butterflies Container */
        .butterflies-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 3;
        }
        
        .butterfly {
          position: absolute;
        }
        
        .butterfly img {
          width: auto;
          height: auto;
          max-width: 60px;
          max-height: 60px;
          object-fit: contain;
        }
        
        .butterfly-1 {
          top: 20%;
          left: -100px;
          animation: flyLeftToRight1 8s infinite linear;
        }
        
        .butterfly-2 {
          top: 15%;
          left: -120px;
          animation: flyLeftToRight2 10s infinite linear;
          animation-delay: -3s;
        }
        
        /* Geometric Container */
        .geometric-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          width: 400px;
          height: 400px;
        }
        
        /* 3D Geometric Ring */
        .geometric-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        
        .geometric-ring img {
          width: auto;
          height: auto;
          max-width: 400px;
          max-height: 400px;
          object-fit: contain;
        }
        
        /* Robotic Hand */
        .robotic-hand {
          position: absolute;
          top: 23%;
          left: 44%;
          z-index: 3;
        }
        
        .robotic-hand img {
          width: auto;
          height: auto;
          max-width: 180px;
          max-height: 180px;
          object-fit: contain;
        }
        
        /* Human Hand - ONLY ADDED ANIMATION HERE */
        .human-hand {
          position: absolute;
          top: 4%;
          left: 100%;
          z-index: 3;
          animation: handFloat 3s ease-in-out infinite;
        }
        
        .human-hand img {
          width: auto;
          height: auto;
          max-width: 280px;
          max-height: 140px;
          object-fit: contain;
        }
        
        /* Red Cubes */
        .red-cubes {
          position: absolute;
          top: 60%;
          right: 65%;
          z-index: 2;
        }
        
        .red-cubes img {
          width: auto;
          height: auto;
          max-width: 300px;
          max-height: 120px;
          object-fit: contain;
        }
        
        /* CONTACT Text - Thick Outline Style */
        .contact-text {
         font-size: 11vw;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 3px rgba(255,255,255,0.8);
  text-stroke: 3px rgba(255,255,255,0.8);
  letter-spacing: 6px;
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
        }
        
        .contact-text h1 {
         margin: 0;
  font: inherit;
  color: inherit;
  letter-spacing: inherit;
        }
        
        /* Hand Floating Animation - ONLY NEW ADDITION */
        @keyframes handFloat {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-15px);
          }
        }
        
        /* Butterfly Flying Animations */
        @keyframes flyLeftToRight1 {
          0% { 
            transform: translateX(-100px) translateY(0px) rotate(0deg); 
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          25% { 
            transform: translateX(25vw) translateY(-20px) rotate(5deg); 
          }
          50% { 
            transform: translateX(50vw) translateY(10px) rotate(-3deg); 
          }
          75% { 
            transform: translateX(75vw) translateY(-15px) rotate(4deg); 
          }
          90% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(calc(100vw + 100px)) translateY(0px) rotate(0deg); 
            opacity: 0;
          }
        }
        
        @keyframes flyLeftToRight2 {
          0% { 
            transform: translateX(-120px) translateY(0px) rotate(0deg); 
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          25% { 
            transform: translateX(30vw) translateY(15px) rotate(-8deg); 
          }
          50% { 
            transform: translateX(55vw) translateY(-25px) rotate(6deg); 
          }
          75% { 
            transform: translateX(80vw) translateY(8px) rotate(-4deg); 
          }
          90% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(calc(100vw + 120px)) translateY(0px) rotate(0deg); 
            opacity: 0;
          }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-banner {
            height: 400px;
          }
          
          .contact-text h1 {
            font-size: 3.5rem;
            -webkit-text-stroke: 3px #ffffff;
            text-stroke: 3px #ffffff;
          }
          
          .geometric-container {
            width: 300px;
            height: 300px;
          }
          
          .geometric-ring img {
            max-width: 180px;
            max-height: 180px;
          }
          
          .robotic-hand img {
            max-width: 80px;
            max-height: 80px;
          }
          
          .human-hand img {
            max-width: 70px;
            max-height: 70px;
          }
          
          .red-cubes img {
            max-width: 60px;
            max-height: 60px;
          }
          
          .butterfly img {
            max-width: 40px;
            max-height: 40px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-text h1 {
            font-size: 2.5rem;
            -webkit-text-stroke: 2px #ffffff;
            text-stroke: 2px #ffffff;
          }
          
          .geometric-container {
            width: 250px;
            height: 250px;
          }

        }
          
        /* Fix unwanted horizontal scroll */
        * {
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          width: 100%;
        }

      `}</style>
    </div>
  );
};

export default HeroTeam;