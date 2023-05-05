import React, { useContext } from 'react'
import Bg1 from './Bg-1/Bg1'
import Bg2 from './Bg-2/Bg2'
import { GlobalContext } from '../../GlobalContext'

const Background = () => {
  const storage = useContext(GlobalContext)

  switch (storage.section) {
    case 0: return <Bg1/>
    case 1: return <Bg2/>
    default: return null
  }
}

export default Background
