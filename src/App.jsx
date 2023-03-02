import './homepage.css'

function App () {
  return (
    <div className='homepage'>
      <header>
        <nav aria-label='primary'>
          <ul>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Welcome to my porfolio!</h1>
      </main>

      <footer>
        <nav aria-label='secondary'>
          <ul>
            <li>WhatsApp</li>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default App
