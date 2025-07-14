import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import './main.css'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
