import { useId } from 'react'
import './projectGrid.css'
function ProjectsGrid () {
  // screenshots iphone 12/13 mini
  const myProjects = [
    {
      body: 'This project features a controlled form for a greater user experience as well as some sorting mechanisms.',
      id: 1,
      image: '../../screenshots/buscador-de-peliculas.png',
      title: 'Movie Search Website',
      url: 'https://buscador-de-peliculas-chicho.netlify.app/'
    }, {
      body: 'Insert a url and shorten it! This website saves your shortened-link on local-storage so you never lose it.',
      id: 2,
      image: '../../screenshots/url-shortener.png',
      title: 'Url Shortener',
      url: 'https://url-shortener-vite-app.netlify.app/'
    }, {
      body: 'Bored? This website gives you a random piece of art and tries to guess the artist nationality',
      id: 3,
      image: '../../screenshots/get-art-piece.png',
      title: 'Get Art Piece',
      url: 'https://art-from-the-art-institute-of-chicago.netlify.app/'
    }, {
      body: 'Manage homepage website. This project presents small details which put together bring a good user experience',
      id: 3,
      image: '../../screenshots/manage.png',
      title: 'Get Art Piece',
      url: 'https://glittering-lamington-b0ab80.netlify.app/'
    }
  ]
  const projectId = useId()
  return (
    <section>
      <h2>Projects</h2>
      <div className='project-grid'>
        {myProjects.map((project, index) => {
          return (
            <div key={`${projectId}-${index}`} className='card'>
              <p className='title'>{project.title}</p>
              <img src={project.image} alt={project.title} />
              <p className='body'>{project.body}</p>
              <div className='btn-group'>
                <a href='https://github.com/Guille-Sanchez/buscador-de-peliculas'>Repository</a>
                <a href='https://buscador-de-peliculas-chicho.netlify.app/'>Live Demo</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsGrid
