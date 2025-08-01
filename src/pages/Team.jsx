// import React from 'react';
// import Spline from '@splinetool/react-spline';
// import TeamSec from '../components/TeamSec/TeamSec';
// import Faq from '../components/FAQ/Faq';

// const Team = () => {
//   const styles = {
//     pageContainer: {
//       width: '100%'
//     },
    
//     heroSection: {
//       height: '100vh',
//       position: 'relative',
//       overflow: 'hidden'
//     },
    
//     splineContainer: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       zIndex: 1,
//       // Allow hover interactions but prevent scroll capture
//       pointerEvents: 'auto',
//       userSelect: 'none'
//     },
    
//     textOverlay: {
//       position: 'absolute',
//       top: '50%',
//       left: '50px',
//       transform: 'translateY(-50%)',
//       zIndex: 2,
//       color: '#ffffff',
//       maxWidth: '600px',
//       pointerEvents: 'auto'
//     },
    
//     contactLabel: {
//       fontSize: '14px',
//       color: '#888888',
//       marginBottom: '20px',
//       textTransform: 'uppercase',
//       letterSpacing: '2px',
//       fontWeight: '400'
//     },
    
//     heroTitle: {
//       fontSize: 'clamp(2.5rem, 5vw, 4rem)',
//       fontWeight: '300',
//       lineHeight: '1.2',
//       margin: '0 0 30px 0',
//       textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
//       color: '#ffffff'
//     },
    
//     titleHighlight: {
//       fontStyle: 'italic',
//       color: '#ffffff'
//     },
    
//     heroDescription: {
//       fontSize: '16px',
//       color: '#cccccc',
//       lineHeight: '1.6',
//       marginBottom: '30px',
//       opacity: 0.9,
//       textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
//     },
    
//     ctaText: {
//       fontSize: '14px',
//       color: '#ffffff',
//       textTransform: 'uppercase',
//       letterSpacing: '1px',
//       fontWeight: '500',
//       marginTop: '20px',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       display: 'inline-block',
//       padding: '10px 0',
//       borderBottom: '2px solid transparent'
//     },
    
//     contentSection: {
//       position: 'relative',
//       zIndex: 3,
//       width: '100%'
//     }
//   };

//   const scrollToTeam = () => {
//     document.querySelector('#team-section').scrollIntoView({ 
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div style={styles.pageContainer}>
//       {/* Enhanced CSS for hiding watermark and managing interactions */}
//       <style jsx>{`
       
//         [class*="watermark"], 
//         [class*="spline-watermark"],
//         [class*="Watermark"],
//         .spline-watermark,
//         div[style*="position: absolute"][style*="bottom: 16px"][style*="right: 16px"],
//         div[style*="position: absolute"][style*="bottom"][style*="right"],
//         div[style*="position: absolute"][style*="bottom: 10px"],
//         div[style*="position: absolute"][style*="right: 10px"],
//         iframe + div[style*="position: absolute"],
//         canvas + div[style*="position: absolute"],
//         canvas ~ div[style*="position: absolute"],
//         iframe ~ div[style*="position: absolute"] {
//           display: none !important;
//           visibility: hidden !important;
//           opacity: 0 !important;
//           pointer-events: none !important;
//         }
        
       
//         div[style*="font-family: Inter"] {
//           display: none !important;
//         }
        
        
//         div[style*="font-size: 12px"][style*="position: absolute"],
//         div[style*="font-size: 11px"][style*="position: absolute"] {
//           display: none !important;
//         }
        
//         .spline-container {
//           pointer-events: auto !important;
//         }
        
//         .spline-container canvas {
//           pointer-events: auto !important;
//         }
        
//         .spline-container iframe {
//           pointer-events: auto !important;
//         }
        
       
//         .spline-container * {
//           -webkit-user-select: none !important;
//           -moz-user-select: none !important;
//           -ms-user-select: none !important;
//           user-select: none !important;
//         }
        
       
//         body {
//           overflow: auto !important;
//         }
        
       
//         html {
//           scroll-behavior: smooth;
//         }
        
       
//         [data-spline-watermark] {
//           display: none !important;
//         }
        
//         div[style*="bottom"][style*="right"][style*="position: absolute"] * {
//           display: none !important;
//         }
//       `}</style>

//       <section style={styles.heroSection}>
//         {/* Full-Screen Spline with hover enabled but scroll disabled */}
//         <div style={styles.splineContainer} className="spline-container">
//           <Spline 
//             scene="https://prod.spline.design/Vt8mBL1VqcMTyFpd/scene.splinecode"
//             style={{
//               width: '100%',
//               height: '100%'
//             }}
//             onWheel={(e) => {
//               // Prevent Spline from capturing wheel events for smooth page scrolling
//               e.stopPropagation();
//             }}
//           />
//         </div>
        
//         <div style={styles.textOverlay}>
//           <div style={styles.contactLabel}>// MEET OUR TEAM</div>
          
//           <h1 style={styles.heroTitle}>
//             Get To Know <span style={styles.titleHighlight}>Our</span> Team
//           </h1>
          
//           <p style={styles.heroDescription}>
//             Looking for exceptional talent and creativity? Meet our team of dedicated professionals 
//             who bring innovation, expertise, and passion to every project we undertake.
//           </p>
          
//           <span 
//             style={styles.ctaText}
//             onClick={scrollToTeam}
//             onMouseEnter={(e) => {
//               e.target.style.opacity = '0.7';
//               e.target.style.borderBottomColor = '#ffffff';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.opacity = '1';
//               e.target.style.borderBottomColor = 'transparent';
//             }}
//           >
//             Discover Our Experts
//           </span>
//         </div>
//       </section>
      
      
//       <div id="team-section" style={styles.contentSection}>
//         <TeamSec/>
//         <Faq/>
//       </div>
//     </div>
//   );
// };

// export default Team;

import React from 'react'
import HeroTeam from '../components/TeamSec/HeroTeam'
import TeamSec from '../components/TeamSec/TeamSec'
import Faq from '../components/FAQ/Faq'

const Team = () => {
  return (
    <>
   <HeroTeam/>

  <TeamSec/>

                 
    <Faq/>
    </>
  )
}

export default Team