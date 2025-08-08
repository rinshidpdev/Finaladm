

// import React, { useState,useEffect } from 'react';
// import './ScrollCards.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import img1 from '../../assets/seo.png'; // Replace with your images
// import img2 from '../../assets/cont.png';
// import img3 from '../../assets/brand.png';
// import img4 from '../../assets/web.png';
// import img5 from '../../assets/social.png';

// const images = [
//   { src: img1, title: 'Search Engine Optimization' },
//   { src: img2, title: 'Content Creation' },
//   { src: img3, title: 'Branding' },
//   { src: img4, title: 'Web Development' },
//   { src: img5, title: 'Social Media Marketing' },
// ];

// const ScrollCards = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   // Auto-slide every 3.5 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleSlides = () => {
//     const slides = [];
//     for (let i = 0; i < 3; i++) {
//       slides.push(images[(currentIndex + i) % images.length]);
//     }
//     return slides;
//   };

//   return (
//     <div className="carousel-container">
//       <button className="nav-button left" onClick={prevSlide}>
//         <FaChevronLeft />
//       </button>

//       <div className="carousel-slides">
//         {getVisibleSlides().map((img, index) => (
//           <div className="carousel-card" key={index}>
//             <img src={img.src} alt={img.title} />
//             <h3>{img.title}</h3>
//             <button className="carousel-btn">Show More</button>
//           </div>
//         ))}
//       </div>

//       <button className="nav-button right" onClick={nextSlide}>
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };






// export default ScrollCards


// import React, { useRef, useEffect, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import img1 from '../../assets/seo.png';
// import img2 from '../../assets/cont.png';
// import img3 from '../../assets/brand.png';
// import img4 from '../../assets/web.png';
// import img5 from '../../assets/social.png';
// import './ScrollCards.css';

// gsap.registerPlugin(ScrollTrigger);

// const ArrowLeft = () => (
//   <svg viewBox="0 0 24 24">
//     <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
//   </svg>
// );

// const ArrowRight = () => (
//   <svg viewBox="0 0 24 24">
//     <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
//   </svg>
// );

// const images = [
//   { src: img1, title: 'Search Engine Optimization' },
//   { src: img2, title: 'Content Creation' },
//   { src: img3, title: 'Branding' },
//   { src: img4, title: 'Web Development' },
//   { src: img5, title: 'Social Media Marketing' },
//   { src: img5, title: 'Photography' },
//   { src: img5, title: 'Videography' },
// ];

// const ScrollCards = () => {
//   const horizontalSection = useRef(null);
//   const scrollContainer = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const tl = useRef(null);

//   useEffect(() => {
//     const section = horizontalSection.current;
//     const container = scrollContainer.current;
//     if (!section || !container) return;

//     const maxScroll = container.scrollWidth - section.offsetWidth;

//     tl.current = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: 'top top',
//         end: () => `+=${maxScroll}`,
//         pin: true,
//         scrub: 1,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           const index = Math.round(progress * (images.length - 1));
//           setActiveIndex(index);
//         },
//       },
//     });

//     tl.current.to(container, {
//       x: -maxScroll,
//       ease: 'none',
//     });

//     return () => {
//       tl.current?.scrollTrigger?.kill();
//       tl.current?.kill();
//     };
//   }, []);

//   const scrollToIndex = (index) => {
//     const clampedIndex = Math.max(0, Math.min(index, images.length - 1));
//     const progress = clampedIndex / (images.length - 1);

//     if (tl.current) {
//       gsap.to(tl.current, {
//         totalProgress: progress,
//         duration: 1,
//         ease: 'power2.out',
//         onUpdate: () => {
//           setActiveIndex(clampedIndex);
//         },
//       });
//     }
//   };

//   const handleDotClick = (index) => {
//     scrollToIndex(index);
//   };

//   const prevSlide = () => {
//     scrollToIndex(activeIndex - 1);
//   };

//   const nextSlide = () => {
//     scrollToIndex(activeIndex + 1);
//   };

//   return (
//     <section ref={horizontalSection} className="scroll-horizontal-section">
//       <button onClick={prevSlide} className="carousel-arrow prev" disabled={activeIndex <= 0}>
//         <ArrowLeft />
//       </button>
//       <button onClick={nextSlide} className="carousel-arrow next" disabled={activeIndex >= images.length - 1}>
//         <ArrowRight />
//       </button>

//       <div ref={scrollContainer} className="scroll-horizontal-track">
//         {images.map((img, i) => (
//           <div className="carousel-card" key={i}>
//             <img src={img.src} alt={img.title} />
//             <h3>{img.title}</h3>
//             <button className="carousel-btn">Show More</button>
//           </div>
//         ))}
//       </div>

//       <div className="carousel-dots">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             className={`carousel-dot ${i === activeIndex ? 'active' : ''}`}
//             onClick={() => handleDotClick(i)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ScrollCards;

import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../assets/s1.png';
import img2 from '../../assets/p2.png';
import img3 from '../../assets/brand.png';
import img4 from '../../assets/w3.png';
import img5 from '../../assets/w1.png';
import img6 from '../../assets/m42.jpeg';
import img7 from '../../assets/ph6.jpg';
import img8 from '../../assets/v1.jpg';
import './ScrollCards.css';

gsap.registerPlugin(ScrollTrigger);

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
);

const images = [
  { src: img1, title: 'Search Engine Optimization', route: '/services/seo' },
  { src: img2, title: 'Paid ads', route: '/services/paid-ads' },
  { src: img3, title: 'Branding', route: '/services/branding' },
  { src: img4, title: 'Web Development', route: '/services/web-development' },
  { src: img5, title: 'Web Designing', route: '/services/web-designing' },
  { src: img6, title: 'Social Media Marketing', route: '/services/socialmedia-marketing' },
  { src: img7, title: 'Photography', route: '/services/photo-graphy' },
  { src: img8, title: 'Videography', route: '/services/video-graphy' },
];

const ScrollCards = () => {
  const navigate = useNavigate(); // Add this hook
  const horizontalSection = useRef(null);
  const scrollContainer = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const tl = useRef(null);

  useEffect(() => {
    const section = horizontalSection.current;
    const container = scrollContainer.current;
    if (!section || !container) return;

    const maxScroll = container.scrollWidth - section.offsetWidth;

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${maxScroll}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.round(progress * (images.length - 1));
          setActiveIndex(index);
        },
      },
    });

    tl.current.to(container, {
      x: -maxScroll,
      ease: 'none',
    });

    return () => {
      tl.current?.scrollTrigger?.kill();
      tl.current?.kill();
    };
  }, []);

  const scrollToIndex = (index) => {
    const clampedIndex = Math.max(0, Math.min(index, images.length - 1));
    const progress = clampedIndex / (images.length - 1);

    if (tl.current) {
      gsap.to(tl.current, {
        totalProgress: progress,
        duration: 1,
        ease: 'power2.out',
        onUpdate: () => {
          setActiveIndex(clampedIndex);
        },
      });
    }
  };

  const handleDotClick = (index) => {
    scrollToIndex(index);
  };

  const prevSlide = () => {
    scrollToIndex(activeIndex - 1);
  };

  const nextSlide = () => {
    scrollToIndex(activeIndex + 1);
  };

  // Add this function to handle navigation
  const handleShowMore = (route) => {
    navigate(route);
  };

  return (
    <section ref={horizontalSection} className="scroll-horizontal-section">
      <button onClick={prevSlide} className="carousel-arrow prev" disabled={activeIndex <= 0}>
        <ArrowLeft />
      </button>
      <button onClick={nextSlide} className="carousel-arrow next" disabled={activeIndex >= images.length - 1}>
        <ArrowRight />
      </button>

      <div ref={scrollContainer} className="scroll-horizontal-track">
        {images.map((img, i) => (
          <div className="carousel-card" key={i}>
            <img src={img.src} alt={img.title} />
            <h3>{img.title}</h3>
            <button 
              className="carousel-btn" 
              onClick={() => handleShowMore(img.route)}
            >
              Show More
            </button>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default ScrollCards;