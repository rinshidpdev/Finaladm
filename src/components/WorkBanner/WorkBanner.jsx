// import React from 'react';
// import ball from '../../assets/ball.png';     
// import grass from '../../assets/work-bg-2.png';   
// import person from '../../assets/man-second.png'; 

// const WorkBanner = () => {
//   // 1. Container: gradient background
//   const containerStyle = {
//     position: 'relative',
//     width: '100%',
//     height: '100vh',
//     overflow: 'hidden',
//     background: 'linear-gradient(180deg, #E96083 0%, #E79684 80%, #F7B56C 100%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

 
//   const textStyle = {
//     position: 'absolute',
//     bottom: '7%',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     fontSize: '7vw',
//     fontWeight: 800,
//     color: 'transparent',
//     WebkitTextStroke: '3px rgba(255,255,255,0.77)',
//     textStroke: '3px rgba(255,255,255,0.77)',
//     letterSpacing: '7px',
//     zIndex: 1,
//     userSelect: 'none',
//     pointerEvents: 'none'
//   };


//   const grassStyle = {
//     position: 'absolute',
//     top: '36%',
//     left: '50%',
//     width: '370px',
//     height: '555px',
//     transform:
//       'translate(-50%, -50%) rotateX(40deg) rotateZ(19deg) skewY(5deg)',
//     boxShadow: '0 42px 110px 0 rgba(80,50,23,0.25)',
//     zIndex: 5,
//     objectFit: 'cover'
//   };

 
//   const personStyle = {
//     position: 'absolute',
//     top: '49%',
//     left: '60%',
//     width: '345px',
//     height: '298px',
//     transform:
//       'translate(-55%, -46%) rotateZ(28deg) skewY(-3deg) scale(1.05)',
//     zIndex: 10,
//     filter: 'drop-shadow(0 14px 46px rgba(0,0,0,0.18))'
//   };

//   const ballStyle = {
//     position: 'absolute',
//     top: '9%',
//     left: '26%',
//     width: '63px',
//     height: '63px',
//     zIndex: 24,
//     transform: 'rotate(-23deg) scale(0.98)',
//     filter: 'drop-shadow(0 2px 9px rgba(255,255,255,0.22))'
//   };


//   const smokeStyle = {
//     position: 'absolute',
//     top: '59%',
//     left: '61%',
//     width: '101px',
//     height: '60px',
//     zIndex: 9,
//     background: 'radial-gradient(rgba(255,219,138,0.65) 40%, transparent 85%)',
//     opacity: 0.87,
//     filter: 'blur(10px) drop-shadow(0 0px 18px #edbe6f)',
//     borderRadius: '50%',
//     pointerEvents: 'none'
//   };

//   return (
//     <div style={containerStyle}>
//       {/* WORK text at the very back */}
//       <div style={textStyle}>WORK</div>

//       {/* Grass field (vertical, under person) */}
//       <img src={grass} alt="Grass Field" style={grassStyle} />

//       {/* Smoked/fiery trail behind the hand */}
//       <div style={smokeStyle}></div>

//       {/* Person flying / diving for catch */}
//       <img src={person} alt="Player Diving" style={personStyle} />

//       {/* Flying baseball */}
//       <img src={ball} alt="Baseball" style={ballStyle} />

//       {/* Animate components */}
//       <style>{`
//         @keyframes smokeFlicker {
//           0%, 100% { opacity: 0.93; filter: blur(11px);}
//           40% { opacity: 0.71; filter: blur(17px);}
//           60% { opacity: 1; filter: blur(6px);}
//         }
//         @keyframes ballMove {
//           0%,100% { transform: rotate(-23deg) scale(0.98) translateY(0); }
//           40% { transform: rotate(-16deg) scale(1.09) translateY(-9px);}
//           58% { transform: rotate(-28deg) scale(1.01) translateY(10px);}
//         }
//         @keyframes personFloat {
//           0%,100% { transform: translate(-55%, -46%) rotateZ(28deg) skewY(-3deg) scale(1.05) translateY(0);}
//           51% { transform: translate(-55%, -46%) rotateZ(28deg) skewY(-3deg) scale(1.05) translateY(-13px);}
//         }
//       `}</style>
//       {/* Animate smoke, ball, person */}
//       <style>{`
//         img[alt="Player Diving"] { animation: personFloat 4.5s cubic-bezier(.57,-0.02,.31,1.13) infinite;}
//         img[alt="Baseball"] { animation: ballMove 4.4s ease-in-out infinite;}
//         div[style*="radial-gradient"] {animation: smokeFlicker 2.8s ease-in-out infinite;}
//       `}</style>
//     </div>
//   );
// };

// export default WorkBanner;
import React, { useEffect, useRef } from 'react';
import ball from '../../assets/ball.png';
import grass from '../../assets/work-bg-2.png';
import person from '../../assets/man-second.png';
import meteor from '../../assets/fire-ball-2.png';

const WorkBanner = () => {
  const meteorRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (meteorRef.current) {
        meteorRef.current.classList.add('meteor-animate');
      }
    }, 250);
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '100vw',
    minHeight: '100vh',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #E96083 0%, #E79684 80%, #F7B56C 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  };

  const textStyle = {
    position: 'absolute',
    bottom: '8%',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: 'clamp(3rem, 12vw, 10rem)',
    fontWeight: 900,
    color: 'transparent',
    WebkitTextStroke: 'clamp(2px, 0.4vw, 3px) rgba(255,255,255,0.77)',
    textStroke: 'clamp(2px, 0.4vw, 3px) rgba(255,255,255,0.77)',
    letterSpacing: 'clamp(3px, 1.5vw, 20px)',
    zIndex: 3,
    userSelect: 'none',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  };

  const grassStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'clamp(250px, 30vw, 370px)',
    height: 'clamp(375px, 45vw, 555px)',
    transform: 'translate(-50%, -50%) rotateX(40deg) rotateZ(19deg) skewY(5deg)',
    boxShadow: '0 clamp(15px, 3vw, 42px) clamp(40px, 8vw, 110px) 0 rgba(80,50,23,0.25)',
    zIndex: 5,
    objectFit: 'cover'
  };

  const personStyle = {
    position: 'absolute',
    top: '50%',
    left: '62%',
    width: 'clamp(200px, 25vw, 345px)',
    height: 'clamp(173px, 22vw, 298px)',
    transform: 'translate(-50%, -35%) rotateZ(28deg) skewY(-3deg) scale(1.05)',
    zIndex: 10,
    filter: 'drop-shadow(0 clamp(5px, 1vw, 14px) clamp(15px, 3vw, 46px) rgba(0,0,0,0.18))'
  };

  const ballStyle = {
    position: 'absolute',
    top: '25%',
    left: '28%',
    width: 'clamp(35px, 4.5vw, 63px)',
    height: 'clamp(35px, 4.5vw, 63px)',
    zIndex: 24,
    transform: 'rotate(-23deg) scale(0.98)',
    filter: 'drop-shadow(0 2px 9px rgba(255,255,255,0.22))'
  };

  const smokeStyle = {
    position: 'absolute',
    top: '67%',
    left: '61%',
    width: 'clamp(60px, 7.5vw, 101px)',
    height: 'clamp(36px, 4.5vw, 60px)',
    zIndex: 9,
    background: 'radial-gradient(rgba(255,219,138,0.65) 40%, transparent 85%)',
    opacity: 0.87,
    filter: 'blur(10px) drop-shadow(0 0px 18px #edbe6f)',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)'
  };

  const meteorStyle = {
    position: 'absolute',
    bottom: '-110px',
    left: '3%',
    width: 'clamp(70px, 9vw, 120px)',
    height: 'clamp(47px, 6vw, 80px)',
    zIndex: 6,
    opacity: 1,
    transition: 'none'
  };

  return (
    <div style={containerStyle}>
      <style>{`
        /* Base animations */
        @keyframes smokeFlicker {
          0%, 100% { opacity: 0.93; filter: blur(11px); }
          40% { opacity: 0.71; filter: blur(17px); }
          60% { opacity: 1; filter: blur(6px); }
        }

        @keyframes ballRotate {
          0% { transform: rotate(0deg) scale(0.98); }
          100% { transform: rotate(360deg) scale(0.98); }
        }

        @keyframes personFloat {
          0%,100% { transform: translate(-50%, -35%) rotateZ(28deg) skewY(-3deg) scale(1.05) translateY(0); }
          51% { transform: translate(-50%, -35%) rotateZ(28deg) skewY(-3deg) scale(1.05) translateY(-13px); }
        }

        /* Meteor animation */
        .meteor-animate {
          opacity: 1 !important;
          transition:
            left 2.1s cubic-bezier(.29,1.15,.18,0.98),
            bottom 2.3s cubic-bezier(.22,0.89,0.38,1.06),
            transform 1.57s cubic-bezier(.52,0.14,0.41,1.01);
          left: 61.2% !important;
          bottom: 45% !important;
          transform: rotate(-12deg) scale(1.06) !important;
        }

        /* Apply animations to elements */
        .person-mobile { animation: personFloat 4.5s cubic-bezier(.57,-0.02,.31,1.13) infinite; }
        .ball-mobile { animation: ballRotate 1.8s linear infinite; }
        .smoke-mobile { animation: smokeFlicker 2.8s ease-in-out infinite; }

        /* Tablet responsiveness */
        @media (max-width: 1024px) {
          .meteor-animate {
            left: 60.5% !important;
            bottom: 43% !important;
          }
          .person-mobile {
            left: 63% !important;
          }
          .ball-mobile {
            left: 26% !important;
            top: 23% !important;
          }
          .smoke-mobile {
            left: 62% !important;
            top: 68% !important;
          }
        }

        /* Mobile landscape and small tablets */
        @media (max-width: 768px) {
          .meteor-animate {
            left: 60% !important;
            bottom: 42% !important;
          }
          .person-mobile {
            left: 65% !important;
            top: 52% !important;
          }
          .ball-mobile {
            left: 25% !important;
            top: 22% !important;
          }
          .smoke-mobile {
            left: 63% !important;
            top: 70% !important;
          }
        }

        /* Mobile portrait */
        @media (max-width: 480px) {
          .meteor-animate {
            left: 58% !important;
            bottom: 40% !important;
          }
          .person-mobile {
            left: 68% !important;
            top: 55% !important;
          }
          .ball-mobile {
            left: 22% !important;
            top: 20% !important;
          }
          .smoke-mobile {
            left: 65% !important;
            top: 72% !important;
          }
          .text-mobile {
            bottom: 32% !important;
            right:10% !important;
            font-size: clamp(2.5rem, 10vw, 6rem) !important;
          }
        }

        /* Small mobile devices */
        @media (max-width: 375px) {
          .person-mobile {
            left: 70% !important;
            top: 58% !important;
          }
          .ball-mobile {
            left: 20% !important;
            top: 18% !important;
          }
          .smoke-mobile {
            left: 67% !important;
            top: 74% !important;
          }
          .meteor-animate {
            left: 56% !important;
            bottom: 38% !important;
          }
        }

        /* Very small mobile devices */
        @media (max-width: 320px) {
          .person-mobile {
            left: 72% !important;
            top: 60% !important;
          }
          .ball-mobile {
            left: 18% !important;
            top: 16% !important;
          }
          .smoke-mobile {
            left: 69% !important;
            top: 76% !important;
          }
          .meteor-animate {
            left: 54% !important;
            bottom: 36% !important;
          }
          .text-mobile {
            bottom: 3% !important;
            font-size: clamp(2rem, 8vw, 4rem) !important;
            letter-spacing: clamp(2px, 1vw, 8px) !important;
          }
        }

        /* Large desktop screens */
        @media (min-width: 1400px) {
          .meteor-animate {
            left: 62% !important;
            bottom: 47% !important;
          }
        }

        /* Extra large screens */
        @media (min-width: 1920px) {
          .meteor-animate {
            left: 62.5% !important;
            bottom: 48% !important;
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

        /* Prevent image dragging */
        img {
          user-drag: none;
          -webkit-user-drag: none;
          user-select: none;
          -webkit-user-select: none;
          pointer-events: none;
        }
      `}</style>

      <div style={textStyle} className="text-mobile">WORK</div>
      <img src={grass} alt="Grass Field" style={grassStyle} />
      <div style={smokeStyle} className="smoke-mobile"></div>
      <img src={person} alt="Player Diving" style={personStyle} className="person-mobile" />
      <img src={ball} alt="Baseball" style={ballStyle} className="ball-mobile" />
      <img ref={meteorRef} src={meteor} alt="Meteor" style={meteorStyle} draggable={false} />
    </div>
  );
};

export default WorkBanner;