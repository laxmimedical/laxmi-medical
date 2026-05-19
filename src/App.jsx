import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import LoadingScreen from './components/LoadingScreen.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import Products from './components/products/Products.jsx'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence mode="wait">
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* Noise grain overlay for premium feel */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor */}
      {/* <Cursor /> */}

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Main site */}
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Services />
          <WhyChooseUs />
          <About />
          <Testimonials />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  )
}

export default App
