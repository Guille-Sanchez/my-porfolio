import { createContext, useState } from 'react'

export const DarkmodeContext = createContext()

export function DarkModeProvider ({ children }) {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <DarkmodeContext.Provider value={{
      darkMode,
      setDarkMode
    }}
    >
      <div className={`homepage${darkMode ? '-darkmode' : ''}`}>
        {children}
      </div>
    </DarkmodeContext.Provider>
  )
}
