import { IconGithub, IconGmail, IconLinkedin } from '../../assets/icons'
import './footer.css'

function Footer () {
  return (
    <footer>
      <nav id='contact-me'>
        <ul aria-label='secondary navigation group - social media'>
          <li><a href='mailto:guillesafran@gmail.com'>{IconGmail}</a></li>
          <li><a href='https://github.com/Guille-Sanchez'>{IconGithub}</a></li>
          <li><a href='https://www.linkedin.com/in/guillermo-sanchez-52a616268/'>{IconLinkedin}</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
