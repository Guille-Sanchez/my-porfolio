import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ProjectsGrid from './components/projects-grid/ProjectsGrid'
import './homepage.css'
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'

function App () {
  return (
    <div className='homepage'>
      <Header />

      <main>
        <AboutMe />
        <ProjectsGrid />
      </main>

      <Footer />
    </div>
  )
}

export default App
