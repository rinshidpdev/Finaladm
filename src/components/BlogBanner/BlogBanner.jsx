

// import React from 'react';
// import girl from '../../assets/Untitled-1.png';
// import rocket from '../../assets/e1.png';
// import drone from '../../assets/e5.png';
// import platform from '../../assets/e6.png';

// const BlogBanner = () => {
//   // Container with background and 3D perspective
//   const containerStyle = {
//     position: 'relative',
//     width: '100%',
//     height: '100vh',
//     background: 'linear-gradient(180deg, #FFE08A 0%, #F87E58 85%, #E44C75 100%)',
//     overflow: 'hidden',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     perspective: '1000px', // for 3D rotation
//   };

//   // "BLOG" text at the very back
//   const blogTextStyle = {
//     fontSize: '11vw',
//     fontWeight: 'bold',
//     color: 'transparent',
//     WebkitTextStroke: '3px rgba(255,255,255,0.8)',
//     textStroke: '3px rgba(255,255,255,0.8)',
//     letterSpacing: '6px',
//     position: 'absolute',
//     top: '76%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     zIndex: 1,
//     pointerEvents: 'none',
//     userSelect: 'none'
//   };

//   // Platform (tilted, in the middle)
//   const platformStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%) rotateX(24deg) rotateZ(-14deg)',
//     zIndex: 5,
//     width: '520px',
//     height: '320px',
//     boxShadow: '0 32px 48px 0 rgba(50,20,60,0.22)',
//   };

//   // Person emerging from the platform (slightly forward, top-centered)
//   const personStyle = {
//     position: 'absolute',
//     top: '17%',
//     left: '52%',
//     transform: 'translate(-50%, -15%)',
//     zIndex: 15,
//     width: '250px',
//     height: '340px',
//     filter: 'drop-shadow(0 8px 25px rgba(90,0,90,0.12))',
//   };

//   const personImageStyle = {
//     width: '100%',
//     height: '100%',
//     objectFit: 'contain'
//   };

//   // Rocket (left, overlapped, rotated)
//   const rocketStyle = {
//     position: 'absolute',
//     top: '12%',
//     left: '27%',
//     transform: 'rotate(-12deg) scale(1.14)',
//     width: '110px',
//     height: '86px',
//     zIndex: 11,
//   };

//   // Drone (right, slightly up, depth)
//   const droneStyle = {
//     position: 'absolute',
//     top: '18%',
//     right: '19%',
//     width: '110px',
//     height: '80px',
//     zIndex: 10,
//     transform: 'rotate(4deg) scale(1.05)',
//   };

//   return (
//     <div style={containerStyle}>
//       {/* BLOG Text -- always behind */}
//       <div style={blogTextStyle}>BLOG</div>
//       {/* Platform with tilt */}
//       <div style={platformStyle}>
//         <img
//           src={platform}
//           alt="Platform"
//           style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//         />
//       </div>
//       {/* Person emerging from the platform */}
//       <div style={personStyle}>
//         <img
//           src={girl}
//           alt="Person"
//           style={personImageStyle}
//         />
//       </div>
//       {/* Rocket on the left */}
//       <div style={rocketStyle}>
//         <img
//           src={rocket}
//           alt="Rocket"
//           style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//         />
//       </div>
//       {/* Drone on the right */}
//       <div style={droneStyle}>
//         <img
//           src={drone}
//           alt="Drone"
//           style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default BlogBanner;

// import React from 'react';
// import girl from '../../assets/Untitled-1.png';
// import rocket from '../../assets/e1.png';
// import drone from '../../assets/e5.png';
// import platform from '../../assets/e6.png';
// import fingerBlue from '../../assets/e3.png'; // your blue glow/circle

// const BlogBanner = () => {
//   const containerStyle = {
//     position: 'relative',
//     width: '100%',
//     height: '100vh',
//     background: 'linear-gradient(180deg, #FFE08A 0%, #F87E58 85%, #E44C75 100%)',
//     overflow: 'hidden',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     perspective: '1000px',
//   };

//   const blogTextStyle = {
//     fontSize: '11vw',
//     fontWeight: 'bold',
//     color: 'transparent',
//     WebkitTextStroke: '3px rgba(255,255,255,0.8)',
//     textStroke: '3px rgba(255,255,255,0.8)',
//     letterSpacing: '6px',
//     position: 'absolute',
//     top: '68%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     zIndex: 1,
//     pointerEvents: 'none',
//     userSelect: 'none'
//   };

//   const platformStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%) rotateX(24deg) rotateZ(-14deg)',
//     zIndex: 5,
//     width: '520px',
//     height: '320px',
//     boxShadow: '0 32px 48px 0 rgba(50,20,60,0.22)'
//   };

//   const personStyle = {
//     position: 'absolute',
//     top: '17%',
//     left: '52%',
//     transform: 'translate(-50%, -15%)',
//     zIndex: 15,
//     width: '250px',
//     height: '340px',
//     filter: 'drop-shadow(0 8px 25px rgba(90,0,90,0.12))',
//     pointerEvents: 'none'
//   };

//   const personImageStyle = {
//     width: '100%',
//     height: '100%',
//     objectFit: 'contain'
//   };

//   const blueCircleStyle = {
//     position: 'absolute',
//     top: '11%',      // adjust so it sits just above/person's finger
//     left: '51%',     // adjust horizontally to align above finger touch
//     width: '68px',
//     height: '68px',
//     zIndex: 20,
//     pointerEvents: 'none',
//     animation: 'fingerOpacity 4s infinite'
//   };

//   const rocketStyle = {
//     position: 'absolute',
//     top: '12%',
//     left: '27%',
//     width: '110px',
//     height: '86px',
//     zIndex: 11,
//     animation: 'rocketMove 4s ease-in-out infinite',
//     transform: 'rotate(-12deg) scale(1.14)' // base transform, will be combined with animation
//   };

//   const droneStyle = {
//     position: 'absolute',
//     top: '18%',
//     right: '19%',
//     width: '110px',
//     height: '80px',
//     zIndex: 10,
//     animation: 'droneMove 4s ease-in-out infinite',
//     transform: 'rotate(4deg) scale(1.05)'
//   };

//   return (
//     <div style={containerStyle}>
//       <style>{`
//         @keyframes fingerOpacity {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         @keyframes rocketMove {
//           0%, 50%, 100% { transform: rotate(-12deg) scale(1.14) translateX(0); }
//           25% { transform: rotate(-12deg) scale(1.14) translateX(15px);}
//           75% { transform: rotate(-12deg) scale(1.14) translateX(-15px);}
//         }
//         @keyframes droneMove {
//           0%, 50%, 100% { transform: rotate(4deg) scale(1.05) translateY(0);}
//           25% { transform: rotate(4deg) scale(1.05) translateY(12px);}
//           75% { transform: rotate(4deg) scale(1.05) translateY(-12px);}
//         }
//       `}</style>
//       {/* BLOG Text -- always behind */}
//       <div style={blogTextStyle}>BLOG</div>
//       {/* Platform with tilt */}
//       <div style={platformStyle}>
//         <img
//           src={platform}
//           alt="Platform"
//           style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//         />
//       </div>
//       {/* Blue circle above finger, with appear/disappear animation */}
//       <img src={fingerBlue} alt="Blue Circle" style={blueCircleStyle} />
//       {/* Person emerging from the platform */}
//       <div style={personStyle}>
//         <img
//           src={girl}
//           alt="Person"
//           style={personImageStyle}
//         />
//       </div>
//       {/* Rocket on the left, animated */}
//       <div style={rocketStyle}>
//         <img
//           src={rocket}
//           alt="Rocket"
//           style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//         />
//       </div>
//       {/* Drone on the right, animated */}
//       <div style={droneStyle}>
//         <img
//           src={drone}
//           alt="Drone"
//           style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default BlogBanner;

import React from 'react';
import girl from '../../assets/Untitled-1.png';
import rocket from '../../assets/e1.png';
import drone from '../../assets/e5.png';
import platform from '../../assets/e6.png';
import fingerBlue from '../../assets/e3.png';

const BlogBanner = () => {
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

        @media (max-width: 768px) {
          .blog-text {
            font-size: 16vw !important;
            -webkit-text-stroke: 2px rgba(255,255,255,0.8);
          }

          .platform {
            width: 70vw !important;
          }

          .girl {
            width: 34vw !important;
            top: 22% !important;
          }

          .rocket, .drone {
            width: 14vw !important;
          }

          .blue-circle {
            width: 9vw !important;
            top:40vw !important;
            right:15vw !important;
          }
        }

        @media (max-width: 480px) {
          .blog-text {
            font-size: 20vw !important;
            letter-spacing: 2px !important;
          }

          .platform {
            width: 90vw !important;
          }

          .girl {
            width: 40vw !important;
            top: 34% !important;
          }

          .rocket, .drone {
            width: 18vw !important;
           
          }
            .rocket{
            right:20vw !important;
            
            }

          .blue-circle {
            width: 10vw !important;
            top:40%
          }
        }
      `}</style>

      <div className="blog-text" style={styles.blogText}>BLOG</div>

      {/* PLATFORM */}
      <div className="platform" style={styles.platform}>
        <img src={platform} alt="Platform" style={styles.fullImage} />
      </div>

      {/* GIRL */}
      <div className="girl" style={styles.person}>
        <img src={girl} alt="Person" style={styles.fullImage} />
      </div>

      {/* BLUE CIRCLE */}
      <img className="blue-circle" src={fingerBlue} alt="Finger Glow" style={styles.blueCircle} />

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
    top: '68%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    pointerEvents: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },
  platform: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotateX(24deg) rotateZ(-14deg)',
    zIndex: 5,
    width: '30vw',
    height: 'auto',
    boxShadow: '0 32px 48px 0 rgba(50,20,60,0.22)',
  },
  person: {
    position: 'absolute',
    top: '20%',
    left: '53%',
    transform: 'translate(-50%, -15%)',
    zIndex: 15,
    width: '15vw',
    height: 'auto',
    filter: 'drop-shadow(0 8px 25px rgba(90,0,90,0.12))',
    pointerEvents: 'none',
  },
  blueCircle: {
    position: 'absolute',
    top: '11%',
    left: '54%',
    transform: 'translateX(-50%)',
    width: '4.2vw',
    zIndex: 20,
    pointerEvents: 'none',
    animation: 'fingerOpacity 4s infinite'
  },
  rocket: {
    position: 'absolute',
    top: '36%',
    left: '25%',
    width: '6vw',
    zIndex: 11,
    animation: 'rocketMove 4s ease-in-out infinite',
    transform: 'rotate(-12deg) scale(1.14)'
  },
  drone: {
    position: 'absolute',
    top: '36%',
    right: '25%',
    width: '8vw',
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

export default BlogBanner;

