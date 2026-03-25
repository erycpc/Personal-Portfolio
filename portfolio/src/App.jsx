import NavBar from "./components/NavBar"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

// styles
import './styles/NavBar.css'
import './styles/Home.css'
import './styles/AboutMe.css'
import './styles/Skills.css'
import './styles/Projects.css'
import './styles/Contact.css'



function App() {
  return (
    <>
    <NavBar />
    <Home />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default App
