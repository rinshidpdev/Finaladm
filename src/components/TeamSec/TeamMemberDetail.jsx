// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './TeamMemberDetail.css';

// const TeamMemberDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { member } = location.state || {};

//   if (!member) {
//     return (
//       <div className="member-detail-error">
//         <h2>Member not found</h2>
//         <button onClick={() => navigate('/team')} className="back-button">
//           Back to Team
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="member-detail-page">
//       {/* Back Button */}
//       <button className="back-btn" onClick={() => navigate(-1)}>
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M19 12H5M12 19l-7-7 7-7"/>
//         </svg>
//         Back
//       </button>

//       <div className="member-detail-container">
//         {/* Left Side - Image */}
//         <div className="member-image-section">
//           <div className="image-wrapper">
//             <img src={member.image} alt={member.name} className="detail-member-image" />
//             <div className="image-overlay">
//               <div className="social-links">
//                 <a href={member.email} className="social-link email">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                     <polyline points="22,6 12,13 2,6"/>
//                   </svg>
//                 </a>
//                 <a href={member.linkedin} className="social-link linkedin">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
//                     <rect x="2" y="9" width="4" height="12"/>
//                     <circle cx="4" cy="4" r="2"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Details */}
//         <div className="member-info-section">
//           <div className="member-header">
//             <h1 className="member-detail-name">{member.name}</h1>
//             <p className="member-detail-role">{member.role}</p>
//             <div className="member-experience">
//               <span className="experience-badge">{member.experience} Experience</span>
//             </div>
//           </div>

//           <div className="member-about">
//             <h3 className="section-title">About</h3>
//             <p className="about-text">{member.about}</p>
//           </div>

//           <div className="member-skills">
//             <h3 className="section-title">Expertise</h3>
//             <div className="skills-grid">
//               {member.skills.map((skill, index) => (
//                 <span key={index} className="skill-tag">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="contact-section">
//             <h3 className="section-title">Get In Touch</h3>
//             <div className="contact-info">
//               <a href={`mailto:${member.email}`} className="contact-item">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                   <polyline points="22,6 12,13 2,6"/>
//                 </svg>
//                 {member.email}
//               </a>
//             </div>
//           </div>

//           <div className="cta-section">
//             <button className="contact-btn">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
//               </svg>
//               Let's Connect
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamMemberDetail;

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TeamMemberDetail.css';
import HowItWorks from '../HowItWorks/HowItWorks';

const TeamMemberDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { member } = location.state || {};

  // Disable smooth scrolling when component mounts
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.style.scrollBehavior = '';
      document.body.style.scrollBehavior = '';
    };
  }, []);

  if (!member) {
    return (
      <div className="member-detail-error">
        <h2>Member not found</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          Back to Team
        </button>
      </div>
    );
  }

  return (
    <div className="member-detail-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back
      </button>

      <div className="member-detail-container">
        {/* Left Side - Image */}
        <div className="member-image-section">
          <div className="image-wrapper">
            <img 
              src={member.detailImage || member.image} 
              alt={member.name} 
              className="detail-member-image"
            />
            <div className="image-overlay">
              <div className="social-links">
                <a href={`mailto:${member.email}`} className="social-link email">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="member-info-section">
          <div className="member-header">
            <h1 className="member-detail-name">{member.name}</h1>
            <p className="member-detail-role">{member.role}</p>
            <div className="member-experience">
              <span className="experience-badge">{member.experience} Experience</span>
            </div>
          </div>

          <div className="member-about">
            <h3 className="section-title">About</h3>
            <p className="about-text">{member.about}</p>
          </div>

          <div className="member-skills">
            <h3 className="section-title">Expertise</h3>
            <div className="skills-grid">
              {member.skills?.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="contact-section">
            {/* <h3 className="section-title">Get In Touch</h3> */}
            {/* <div className="contact-info">
              <a href={`mailto:${member.email}`} className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {member.email}
              </a>
            </div> */}
          </div>

          <div className="cta-section">
            {/* <button className="contact-btn" onClick={() => window.open(`mailto:${member.email}`, '_blank')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Let's Connect
            </button> */}
          
          </div>
        </div>
      </div>
        <HowItWorks/>
    </div>
  );
};

export default TeamMemberDetail;

