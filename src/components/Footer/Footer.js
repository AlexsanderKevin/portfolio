import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer
      className={`
        grid-container
        ${styles.mainFooter}
      `}
    >
      <p>Designed, Developed and Illustrated by Kevin Alexsander de Jesus.
      <br/>
      - 2023 -</p>
    </footer>
  )
}

export default Footer
