import React, { createContext, useCallback, useEffect, useState } from 'react'
import debounce from './helper/Debounce'

export const GlobalContext = createContext()

export const GlobalStorage = ({children}) => {
  const [ top, setTop ] = useState(window.scrollY)
  const [ header, setHeader ] = useState(null)
  const [ footer, setFooter ] = useState(false)

  useEffect(() => {
    const debounceSetTop = debounce(() => {setTop(window.scrollY)}, 50)

    document.addEventListener('scroll', debounceSetTop)
  }, [])

  return (
    <GlobalContext.Provider value={{ top, header, setHeader, footer, setFooter }}>
      {children}
    </GlobalContext.Provider>
  )
}
