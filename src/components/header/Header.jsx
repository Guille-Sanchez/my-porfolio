import './header.css'
import { IconSun, IconMoon } from '../../assets/icons.jsx'

function Header () {
  return (
    <header className='heading'>
      <div className='dark-mode'>
        {IconSun}
        {IconMoon}
      </div>
      <nav>
        <ul aria-label='primary navigation group'>
          <li><a href='#about-me'>About me</a></li>
          <li><a href='#my-projects'>Projects</a></li>
          <li><a href='#contact-me'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
