// import React, { useState } from 'react';
// import './Form.css';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission here
//   };

//   return (
//     <div className="form-container">
//       <div className="form-header">
//         <h2 className="form-title">
//           LET'S TALK ABOUT YOUR <span className="highlight">Digital Goals</span>
//         </h2>
//       </div>
      
//       <div className="form-content">
//         <div className="image-section">
//           <div className="form-image">
//             <img 
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
//               alt="Team working on digital projects"
//             />
//           </div>
//           <div className="social-media-section">
//             <span className="social-label">SOCIAL MEDIA :</span>
//             <div className="social-icons">
//               <a href="#" className="social-icon facebook">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="social-icon twitter">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="social-icon youtube">
//                 <i className="fab fa-youtube"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <form onSubmit={handleSubmit} className="contact-form">
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="name">NAME :</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">PHONE :</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="087XX - XXX"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">EMAIL :</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="@example"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">MESSAGE :</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Hello There!"
//                 rows="5"
//                 required
//               ></textarea>
//             </div>

//             <button type="submit" className="submit-btn">
//               Send Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;

// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import './Form.css';

// // Register GSAP plugin
// gsap.registerPlugin(MotionPathPlugin);

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const svgRef = useRef(null);
//   const pathRef = useRef(null);
//   const planeRef = useRef(null);

//   useEffect(() => {
//     // Create a timeline with repeat for airplane animation
//     const tl = gsap.timeline({ 
//       repeat: -1,
//       defaults: { ease: "power2.inOut" } 
//     });
    
//     // Setup an alternative to drawSVG animation
//     gsap.set(pathRef.current, { 
//       strokeDasharray: pathRef.current.getTotalLength(),
//       strokeDashoffset: pathRef.current.getTotalLength(),
//       opacity: 0
//     });
    
//     // Animate the plane along the path
//     tl.fromTo(planeRef.current, {
//         scale: 0.6
//       }, {
//         duration: 4,
//         scale: 1.2,
//         motionPath: {
//           path: pathRef.current,
//           align: pathRef.current,
//           alignOrigin: [0.5, 0.5],
//           autoRotate: true
//         }
//       }, 0)
//       // Fade in the SVG
//       .to(svgRef.current, { duration: 0.7, opacity: 1 }, 0.25)
//       // Draw the path
//       .to(pathRef.current, { 
//         duration: 3.8, 
//         strokeDashoffset: 0,
//         opacity: 1
//       }, 0.28)
//       // Make the path disappear from behind
//       .to(pathRef.current, { 
//         duration: 2, 
//         strokeDashoffset: -pathRef.current.getTotalLength() * 0.94, 
//         ease: "power2" 
//       }, "-=2")
//       // Fade out the entire SVG
//       .to(svgRef.current, { duration: 0.7, opacity: 0 }, "-=0.9");
    
//     return () => tl.kill();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission here
//   };

//   return (
//     <div className="form-container">
//       <div className="form-header">
//         <h2 className="form-title">
//           LET'S TALK ABOUT YOUR <span className="highlight">Digital Goals</span>
//         </h2>
//       </div>
      
//       <div className="form-content">
//         {/* Animation Section (Left Side) */}
//         <div className="animation-section">
//           <svg 
//             ref={svgRef}
//             id="svg-stage" 
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="-40 -180 1250 1100" 
//             className="airplane-svg"
//           >
//             <path 
//               ref={pathRef}
//               className="mp" 
//               fill="none" 
//               stroke="url(#grad)" 
//               strokeWidth="4" 
//               d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
//             />
            
//             <g ref={planeRef} className="plane">
//               <path fill="url(#grad)" opacity="0.3" d="m82.8 35 215.9 94.6L79 92l3.8-57Z" />
//               <path fill="url(#grad)" d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z" />
//               <path fill="url(#grad)" opacity="0.3" d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z" />
//               <path fill="url(#grad)" d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z" />
//             </g>
            
//             <defs>
//               <linearGradient id="grad" x1="154" x2="160" y1="49" y2="132" gradientUnits="userSpaceOnUse">
//                 <stop offset="0" stopColor="rgb(255, 107, 53)" />
//                 <stop offset="1" stopColor="rgb(255, 140, 66)" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>

//         {/* Form Section (Right Side) */}
//         <div className="form-section">
//           <form onSubmit={handleSubmit} className="contact-form">
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="name">NAME :</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">PHONE :</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="087XX - XXX"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">EMAIL :</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="@example"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">MESSAGE :</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Hello There!"
//                 rows="5"
//                 required
//               ></textarea>
//             </div>

//             <button type="submit" className="submit-btn">
//               Send Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

gsap.registerPlugin(MotionPathPlugin);


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const planeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });
    
    gsap.set(pathRef.current, { 
      strokeDasharray: pathRef.current.getTotalLength(),
      strokeDashoffset: pathRef.current.getTotalLength(),
      opacity: 0
    });
    
    tl.fromTo(planeRef.current, { scale: 0.6 }, {
      duration: 4,
      scale: 1.2,
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      }
    }, 0)
    .to(svgRef.current, { duration: 0.7, opacity: 1 }, 0.25)
    .to(pathRef.current, { duration: 3.8, strokeDashoffset: 0, opacity: 1 }, 0.28)
    .to(pathRef.current, { duration: 2, strokeDashoffset: -pathRef.current.getTotalLength() * 0.94, ease: "power2" }, "-=2")
    .to(svgRef.current, { duration: 0.7, opacity: 0 }, "-=0.9");
    
    return () => tl.kill();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ztgymqj',   // Replace with your EmailJS Service ID
      'template_xn54of6',  // Replace with your EmailJS Template ID
      formData,
      'iMGHu5RwjLkaQmcUj'    // Replace with your EmailJS Public Key
    )
    .then(() => {
      toast.success('Message sent successfully!', { position: "top-right" });
      setFormData({ name: '', phone: '', email: '', message: '' }); // Reset form
    })
    .catch(() => {
      toast.error('Failed to send message. Please try again.', { position: "top-right" });
    });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2 className="form-title">
          LET'S TALK ABOUT YOUR <span className="highlight">Digital Goals</span>
        </h2>
      </div>
      
      <div className="form-content">
        <div className="animation-section">
          <svg 
            ref={svgRef}
            id="svg-stage" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-40 -180 1250 1100" 
            className="airplane-svg"
          >
            <path 
              ref={pathRef}
              className="mp" 
              fill="none" 
              stroke="url(#grad)" 
              strokeWidth="4" 
              d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
            />
            
            <g ref={planeRef} className="plane">
              <path fill="url(#grad)" opacity="0.3" d="m82.8 35 215.9 94.6L79 92l3.8-57Z" />
              <path fill="url(#grad)" d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z" />
              <path fill="url(#grad)" opacity="0.3" d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z" />
              <path fill="url(#grad)" d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z" />
            </g>
            
            <defs>
              <linearGradient id="grad" x1="154" x2="160" y1="49" y2="132" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="rgb(255, 107, 53)" />
                <stop offset="1" stopColor="rgb(255, 140, 66)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">NAME :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">PHONE :</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL :</label>
              <input
                type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE :</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello There!"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
