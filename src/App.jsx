import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ProjectsGrid from './components/projects-grid/ProjectsGrid'
import './homepage.css'
import AboutMe from './components/aboutMe/AboutMe'
import { DarkModeProvider } from '../src/context/darkMode'

function App () {
  return (
    <DarkModeProvider>
      <Header />

      <main>
        <AboutMe />
        <ProjectsGrid />
      </main>

      <Footer />
    </DarkModeProvider>
  )
}

export default App
