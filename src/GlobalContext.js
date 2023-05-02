import React, { createContext, useCallback, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalStorage = ({children}) => {
  const [ top, setTop ] = useState(window.scrollY)
  const [ header, setHeader ] = useState(null)
  const [ footer, setFooter ] = useState(false)

  const handleScroll = useCallback(() => {
    setHeader( window.scrollY < top ? true : false )
    console.log(top, window.scrollY)
    setTop( window.scrollY )
  }, [top])

  document.removeEventListener('scroll', handleScroll)
  document.addEventListener('scroll', handleScroll)

  useEffect(() => {
    // console.log(top, header)
  }, [top, header])

  return (
    <GlobalContext.Provider value={{ top, header, setHeader, footer, setFooter }}>
      {children}
    </GlobalContext.Provider>
  )
}
