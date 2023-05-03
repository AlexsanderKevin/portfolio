import React, { createContext, useCallback, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalStorage = ({children}) => {
  const [ top, setTop ] = useState(window.scrollY)
  const [ header, setHeader ] = useState(null)
  const [ footer, setFooter ] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {setTop(window.scrollY)})
  }, [])

  return (
    <GlobalContext.Provider value={{ top, header, setHeader, footer, setFooter }}>
      {children}
    </GlobalContext.Provider>
  )
}
