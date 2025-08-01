import React ,{useEffect} from "react";
import Orb from "../TeamSec/Orb"; // Your Orb component (the code you posted)
import "./HeroTeam.css";  // Styles (see below)
import Typed from 'typed.js';
export default function HeroTeam() {
   useEffect(() => {
      const typed = new Typed("#typed-highlight", {
        strings: ["OUR TEAM",'MEET OUR TEAM'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 300,
        loop: true,
        showCursor: true,
      });
  
      return () => typed.destroy(); // Cleanup on unmount
    }, []);
  return (
    <div className="orb-hero-wrapper">
      <h1 className="orb-hero-title"> <span id="typed-highlight"></span></h1>
      <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor:'black' }}>
  <Orb
    hoverIntensity={3.77}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>
    </div>
  );
}