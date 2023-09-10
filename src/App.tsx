import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import './main.css'
import { gsap, Power3 } from 'gsap'

function App() {
  // Declare the type of tl explicitly
  let tl: gsap.core.Timeline = gsap.timeline()
  let ease = Power3.easeOut

  return (
    <div>
      <Navbar timeline={tl} ease={ease} />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
