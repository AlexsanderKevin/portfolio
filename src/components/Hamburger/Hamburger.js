import React from 'react'
import styles from './Hamburger.module.css'

const Hamburger = ({ className, handleClick, active, ...props}) => {
  return (
    <button 
      onClick={handleClick}
      className={`
        ${className} 
        ${styles.hamburger} 
        ${active ? styles.active : ''}
      `} 
      {...props}
    >
      <div data-item='menu' className={`${styles.div1}`}></div>
      <div data-item='menu' className={`${styles.div2}`}></div>
      <div data-item='menu' className={`${styles.div3}`}></div>
    </button>
  )
}

export default Hamburger
