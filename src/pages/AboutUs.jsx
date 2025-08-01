import React from 'react'
import AboutSec from '../components/AboutSec/AboutSec'
import TeamSec from '../components/TeamSec/TeamSec'
import AboutCeo from '../components/AboutCeo/AboutCeo'
import Faq from '../components/FAQ/Faq'
import NewAbout from '../components/NewAb/NewAbout'
import SplashCursor from '../components/SplashCursor/SplashCursor'
import HowItWorks from '../components/HowItWorks/HowItWorks'
const AboutUs = () => {
  return (
    <>
    <SplashCursor />
    <AboutSec/>
   <NewAbout/>
    <AboutCeo/>
    <HowItWorks/>
    <Faq/>
    </>
  )
}

export default AboutUs