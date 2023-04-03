import { useContext } from 'react'
import { IconGithub, IconGmail, IconLinkedin } from '../../assets/icons'
import { DarkmodeContext } from '../../context/darkMode'
import './footer.css'

function Footer () {
  const { darkMode } = useContext(DarkmodeContext)
  return (
    <footer>
      <nav id='contact-me'>
        <ul
          aria-label='secondary navigation group - social media'
          className={`dark-mode${darkMode ? '-active' : '-inactive'}`}
        >
          <li><a href='mailto:guillesafran@gmail.com'>{IconGmail}</a></li>
          <li><a href='https://github.com/Guille-Sanchez'>{IconGithub}</a></li>
          <li><a href='https://www.linkedin.com/in/guillermo-sanchez-developer/'>{IconLinkedin}</a></li>
        </ul>
      </nav>
      <p><em>Guillermo Sanchez</em></p>
    </footer>
  )
}

export default Footer
