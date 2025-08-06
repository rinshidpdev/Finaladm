// import React from 'react';
// import './ContactBanner.css';

// const ContactBanner = () => {
//   return (
//     <div className="contact-banner">
//       <div className="background-text">TOUCH</div>
//       <div className="content-wrapper">
//         <div className="contact-content">
//           <div className="section-label">// CONTACT US</div>
//           <h1 className="main-heading">
//             <span className="get-in-touch">Get In Touch</span>
//             <span className="with-text"> WITH </span>
//             <span className="agency-text">ADM Agency</span>
//           </h1>
//           <p className="description">
//             Looking for a reliable <strong>digital marketing agency in Dubai?</strong> At ADM Agency, we're here to 
//             help you elevate your brand, grow your online presence, and deliver results that matter.
//           </p>
//           <p className="services-text">
//             Whether you're interested in our <strong>branding services</strong>, <strong>website development</strong>, or full-scale 
//             <strong> digital marketing solutions</strong>, we're just one message away.
//           </p>
//         </div>
//         <div className="play-button-container">
//           <div className="play-button">
//             <div className="play-icon">▶</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactBanner;

import React from 'react';
import man from '../../assets/beach-man-4.png';
import rocket from '../../assets/fly1.png';
import drone from '../../assets/fly2.png';
import platform from '../../assets/e6.png';

const ContactBanner = () => {
  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fingerOpacity {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes rocketMove {
          0%, 50%, 100% { transform: rotate(-12deg) scale(1.14) translateX(0); }
          25% { transform: rotate(-12deg) scale(1.14) translateX(15px);}
          75% { transform: rotate(-12deg) scale(1.14) translateX(-15px);}
        }

        @keyframes droneMove {
          0%, 50%, 100% { transform: rotate(4deg) scale(1.05) translateY(0);}
          25% { transform: rotate(4deg) scale(1.05) translateY(12px);}
          75% { transform: rotate(4deg) scale(1.05) translateY(-12px);}
        }

        @keyframes fallIn {
  0% {
    transform: translate(-50%, 150%) scale(1.2); /* coming from bottom */
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}


        @media (max-width: 768px) {
          .blog-text {
            font-size: 16vw !important;
            -webkit-text-stroke: 2px rgba(255,255,255,0.8);
          }

          .platform {
            width: 35vw !important;
          }

          .girl {
            width: 50vw !important;
          }

          .rocket, .drone {
            width: 14vw !important;
          }

          .blue-circle {
            width: 9vw !important;
          }
        }

        @media (max-width: 480px) {
          .blog-text {
            font-size: 20vw !important;
            letter-spacing: 2px !important;
          }

          .platform {
            width: 40vw !important;
          }

          .girl {
            width: 60vw !important;
          }

          .rocket, .drone {
            width: 18vw !important;
          }

          .blue-circle {
            width: 10vw !important;
          }
        }
      `}</style>

      {/* OUTLINE TEXT */}
      <div className="blog-text" style={styles.blogText}>CONTACT</div>

      {/* MAN */}
      <div className="girl" style={styles.person}>
        <img src={man} alt="Person" style={styles.fullImage} />
      </div>

      {/* PLATFORM */}
      <div className="platform" style={styles.platform}>
        <img src={platform} alt="Platform" style={styles.fullImage} />
      </div>

      {/* ROCKET */}
      <div className="rocket" style={styles.rocket}>
        <img src={rocket} alt="Rocket" style={styles.fullImage} />
      </div>

      {/* DRONE */}
      <div className="drone" style={styles.drone}>
        <img src={drone} alt="Drone" style={styles.fullImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(180deg, #FFE08A 0%, #F87E58 85%, #E44C75 100%)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1000px',
  },
  blogText: {
    fontSize: '11vw',
    fontWeight: 'bold',
    color: 'transparent',
    WebkitTextStroke: '3px rgba(255,255,255,0.8)',
    textStroke: '3px rgba(255,255,255,0.8)',
    letterSpacing: '6px',
    position: 'absolute',
    top: '72%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    pointerEvents: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },
  person: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 15,
    width: '35vw',
    height: 'auto',
    filter: 'drop-shadow(0 8px 25px rgba(90,0,90,0.12))',
    pointerEvents: 'none',
    animation: 'fallIn 1.8s ease-out forwards',
  },
  platform: {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotateX(24deg) rotateZ(-14deg)',
    zIndex: 10,
    width: '26vw',
    height: 'auto',
    boxShadow: '0 32px 48px 0 rgba(50,20,60,0.22)',
  },
  rocket: {
    position: 'absolute',
    top: '36%',
    left: '15%',
    width: '3vw',
    zIndex: 11,
    animation: 'rocketMove 4s ease-in-out infinite',
    transform: 'rotate(-12deg) scale(1.14)'
  },
  drone: {
    position: 'absolute',
    top: '36%',
    right: '15%',
    width: '3vw',
    zIndex: 10,
    animation: 'droneMove 4s ease-in-out infinite',
    transform: 'rotate(4deg) scale(1.05)'
  },
  fullImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  }
};

export default ContactBanner;
