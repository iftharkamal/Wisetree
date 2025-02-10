import React from 'react'
import HeroSection from './HeroSection'
import HeroSectionText from './HeroSectionText'

const Home = () => {
  return (
    <div className="p-4 lg:p-6 font-[var(--font-primary)]">
      <HeroSection/>
      <HeroSectionText/>
    </div>
  )
}

export default Home
