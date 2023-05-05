import React, { createContext,  useEffect, useState } from 'react'
import debounce from './helper/Debounce'

export const GlobalContext = createContext()

export const GlobalStorage = ({children}) => {
  const [ top, setTop ] = useState(window.scrollY)
  const [ header, setHeader ] = useState(null)
  const [ footer, setFooter ] = useState(false)
  const [ section, setSection ] = useState(0)

  useEffect(() => {
    const debounceSetTop = debounce(() => {setTop(window.scrollY)}, 50)
    document.addEventListener('scroll', debounceSetTop)
  }, [])

  useEffect(() => {
    if (top < 700) setSection(0)
    else if (top < 1400) setSection(1)

    const pageHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    setFooter((top + windowHeight) >= pageHeight )
    
  }, [top])

  return (
    <GlobalContext.Provider value={{ top, header, setHeader, footer, setFooter, section }}>
      {children}
    </GlobalContext.Provider>
  )
}
