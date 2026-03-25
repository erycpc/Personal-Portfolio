import NavBar from "./components/NavBar"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"

// styles
import './styles/NavBar.css'
import './styles/Home.css'
import './styles/AboutMe.css'
import './styles/Skills.css'



function App() {
  return (
    <>
    <NavBar />
    <Home />
    <AboutMe />
    <Skills />
    </>
  )
}

export default App
