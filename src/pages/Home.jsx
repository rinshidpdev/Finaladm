import React from 'react'
import HeroPage from '../components/Hero/Hero'
import Cube from '../components/Cube/Cube'
import ServiceSection from '../components/ServiceSction/ServiceSection'
import ScrollCards from '../components/ScrollCards/ScrollCards'
import Clients from '../components/ClientsLogo/Clients'
import './Home.css'
import GlobalVideoBackground from '../components/GlobalVideoBackground/GlobalVideoBackground'
import Testimonial from '../components/Testimonial/Testimonial'



const Home = () => {
  return (
    <>
    
    <GlobalVideoBackground/>
    <HeroPage />
    <Cube/>
    <ServiceSection/>
    <section style={{ width: '100%', overflow: 'hidden' }}>
  <ScrollCards />
</section>

    <Clients/>
    {/* <Testimonial/> */}
    

    </>
  )
}

export default Home

// import React from 'react'
// import HeroPage from '../components/Hero/Hero'
// import Cube from '../components/Cube/Cube'
// import ServiceSection from '../components/ServiceSction/ServiceSection'
// import ScrollCards from '../components/ScrollCards/ScrollCards'
// import Clients from '../components/ClientsLogo/Clients'
// import './Home.css'
// import video from '../assets/bg-video.mp4'

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Background Video */}
//       <div className="video-background">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="background-video"
//         >
//           <source src={video} type="video/mp4" />
          
//           Your browser does not support the video tag.
//         </video>
//         <div className="video-overlay"></div>
//       </div>

//       {/* Content */}
//       <div className="content-wrapper">
//         <HeroPage/>
//         <Cube/>
//         <ServiceSection/>
//         <section style={{ width: '100%', overflow: 'hidden' }}>
//           <ScrollCards />
//         </section>
//         <Clients/>
//       </div>
//     </div>
//   )
// }

// export default Home