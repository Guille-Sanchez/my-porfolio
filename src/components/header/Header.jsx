import './header.css'
import { IconSun, IconMoon } from '../../assets/icons.jsx'
import { useContext } from 'react'
import { DarkmodeContext } from '../../context/darkMode'

function Header () {
  const { darkMode, setDarkMode } = useContext(DarkmodeContext)
  return (
    <header>
      <div className={`dark-mode${darkMode ? '-active' : '-inactive'}`}>
        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? IconSun : IconMoon}
        </button>
      </div>
      <nav>
        <ul aria-label='primary navigation group' className={`dark-mode${darkMode ? '-active' : '-inactive'}`}>
          <li><a href='#about-me'>About me</a></li>
          <li><a href='#my-projects'>Projects</a></li>
          <li><a href='#contact-me'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
