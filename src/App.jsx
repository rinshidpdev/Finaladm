import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Cube from './components/Cube/Cube'
import ServiceSection from './components/ServiceSction/ServiceSection'
import ScrollCards from './components/ScrollCards/ScrollCards'
import AboutSec from './components/AboutSec/AboutSec'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Branding from './components/WhyChooseBranding/Branding'
import SocialMedia from './components/WhyChooseBranding/SocialMedia'
import Web from './components/WhyChooseBranding/Web'
import WebDesigning from './components/WhyChooseBranding/WebDesigning'
import SEO from './components/WhyChooseBranding/SEO'
import ADS from './components/WhyChooseBranding/ADS'
import PhotoGraphy from './components/WhyChooseBranding/PhotoGraphy'
import VideoGraphy from './components/WhyChooseBranding/VideoGraphy'
import ScrollToTop from './components/ScrollToTop'
import TeamMemberDetail from './components/TeamSec/TeamMemberDetail';
import Team from './pages/Team';



const App = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<AboutUs/>}/>
   <Route path='/contact' element={<ContactUs/>}/>
   <Route path='/services/branding' element={<Branding/>}/>
   <Route path='/services/socialmedia-marketing' element={<SocialMedia/>}/>
   <Route path='/services/web-development' element={<Web/>}/>
   <Route path='/services/web-designing' element={<WebDesigning/>}/>
   <Route path='/services/seo' element={<SEO/>}/>
   <Route path='/services/paid-ads' element={<ADS/>}/>
   <Route path='/services/photo-graphy' element={<PhotoGraphy/>}/>
   <Route path='/services/video-graphy' element={<VideoGraphy/>}/>
   <Route path='/team-member/:id' element={<TeamMemberDetail/>}/>
   <Route path='/team' element={<Team/>}/>
  

   </Routes>
   <Footer/>


    </>
  )
}

export default App