import './App.css'
import React from 'react'
import Navbar from './assets/components/navbar/Navbar'
import Hero from './assets/components/hero/Hero'
import Pillow from './assets/components/pillow/Pillow'
import Trending from './assets/components/trending/Trending'
import Testimonials from './assets/components/testimonials/Testimonials'
import Services from './assets/components/services/Services'
import Contact from './assets/components/contact/Contact'
import Footer from './assets/components/footer/Footer'

function App() {

  return (
     <div>
      <Navbar /> 
      <Hero />
      <Trending />
      <Pillow />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
     </div>
      
  )
}

export default App
