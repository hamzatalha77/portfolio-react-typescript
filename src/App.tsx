import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Work from './components/Work'
import './main.css'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Timeline />
      <Work />
      <Contact />
    </div>
  )
}

export default App
