import React, { useContext } from 'react'
import styles from './Footer.module.css'
import { GlobalContext } from '../../GlobalContext'

const Footer = () => {
  const context = useContext(GlobalContext)

  return (
    <footer
      className={`
        grid-container
        ${styles.footer}
        ${context.footer ? styles.active : ''}
      `}
    >
      <p>Designed, Developed and Illustrated by Kevin Alexsander de Jesus.
      <br/>
      - 2023 -</p>
    </footer>
  )
}

export default Footer
