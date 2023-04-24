import React from 'react'
import styles from './SectionHeader.module.css'

const SectionHeader = ({ children, position }) => {
  return (
    <>
      <div className={`${styles.headerContainer} ${styles[position]} `}>
        {position === 'center' || position === 'right' ? <div></div> : null}
        <h1 className={`title title-secondary`}>{ children }</h1>
        {position === 'center' || position === 'left' ? <div></div> : null}
      </div>
    </>
  )
}

export default SectionHeader
