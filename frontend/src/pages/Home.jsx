import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLater from '../components/NewsLater'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Hero />
    <LatestCollection />
    <BestSeller />
    <OurPolicy />
    <NewsLater />
    </div>
  )
}

export default Home
