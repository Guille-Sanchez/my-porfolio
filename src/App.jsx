import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ProjectsGrid from './components/projects-grid/ProjectsGrid'
import './homepage.css'
import './App.css'

function App () {
  return (
    <div className='homepage'>
      <Header />

      <main>
        <ProjectsGrid />
      </main>

      <Footer />
    </div>
  )
}

export default App
