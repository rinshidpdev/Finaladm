import React, { useState, useEffect, useRef } from "react";
// Import your client logo images here:
import logo1 from '../../assets/client1.png';
import logo2 from '../../assets/client2.png';
import logo3 from '../../assets/client3.png';
import logo4 from '../../assets/client4.png';
import logo5 from '../../assets/client6.png';
import logo6 from '../../assets/client9.png';



const testimonials = [
  {
    text: "ADM should be a big part of your marketing plan and team!",
    name: "Dr. Sawsan Abdul Salam",
    position: "Director",
    logo: logo1,
  },
  {
    text: "Thanks a lot for the help ADM Team. You did an amazing job.",
    name: "Hanna Shamas",
    position: "CEO",
    logo: logo2,
  },
  {
    text: "We are really impressed with their new ideas and amazing concepts.",
    name: "Jackie Kakiza",
    position: "Founder",
    logo: logo3,
  },
  {
    text: "Their strategic thinking and creativity are unparalleled.",
    name: "Michael Johnson",
    position: "Marketing Head",
    logo: logo4,
  },
  {
    text: "Amazing service and professional team. They delivered more than expected!",
    name: "Sophia Williams",
    position: "Project Manager",
    logo: logo5,
  },
  {
    text: "Their passion and expertise are evident in everything they do.",
    name: "David Brown",
    position: "Business Owner",
    logo: logo6,
  },
];

const Testimonial = () => {
  const [cardsPerScreen, setCardsPerScreen] = useState(3);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateCardsPerScreen = () => {
      if (window.innerWidth <= 717) {
        setCardsPerScreen(1);
      } else if (window.innerWidth <= 963) {
        setCardsPerScreen(2);
      } else {
        setCardsPerScreen(3);
      }
    };

    updateCardsPerScreen();
    window.addEventListener("resize", updateCardsPerScreen);
    return () => window.removeEventListener("resize", updateCardsPerScreen);
  }, []);

  useEffect(() => {
    if (testimonials.length <= cardsPerScreen) return;
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentPosition((prev) => {
          const nextPos = prev + 1;
          return nextPos >= testimonials.length ? 0 : nextPos;
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerScreen, isTransitioning]);

  useEffect(() => {
    const transitionEndHandler = () => setIsTransitioning(false);
    const container = carouselRef.current;
    if (container) {
      container.addEventListener('transitionend', transitionEndHandler);
      return () => {
        container.removeEventListener('transitionend', transitionEndHandler);
      };
    }
  }, []);

  // Duplicate testimonials for seamless looping effect
  const renderCards = () => {
    const displayItems = [...testimonials, ...testimonials];
    return displayItems.map((testimonial, i) => (
      <div 
        key={i} 
        style={{ 
          flex: `0 0 ${100 / cardsPerScreen}%`,
          padding: "15px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ 
          background: "#fff", 
          color: "#000", 
          padding: "40px", 
          borderRadius: "15px", 
          boxShadow: "0px 6px 12px rgba(0,0,0,0.08)",
          minHeight: "370px",
          height: "100%",
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between" 
        }}>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>{testimonial.text}</p>
          <div>
            <hr style={{ border: "0.5px solid #ddd" }} />
            <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
              <div style={{ flex: 1, textAlign: "left" }}>
                <strong>{testimonial.name}</strong>
                <p style={{ fontSize: "16px", color: "#555", marginBottom:'30px' }}>{testimonial.position}</p>
              </div>
              <img src={testimonial.logo} alt="Logo" style={{ width: "90px", height: "90px", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{
      width: "100vw",
      minHeight: "500px",
     
      color: "#fff", 
      textAlign: "center", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      padding: "80px 0", 
      overflow: "hidden"
    }}>
      <h2 style={{ fontSize: "42px", marginBottom: "15px" }}>Loved by the best</h2>
      <p style={{ fontSize: "20px", marginBottom: "40px" }}>Here are just some of the people we've helped</p>
      <div style={{ width: "80%", maxWidth: "1200px", overflow: "hidden" }}>
        <div 
          ref={carouselRef}
          style={{
            display: "flex",
            transform: `translateX(-${currentPosition * (100 / cardsPerScreen)}%)`,
            transition: "transform 0.8s cubic-bezier(.4,1.07,.55,.92)",
            width: "100%",
            willChange: "transform"
          }}
        >
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
