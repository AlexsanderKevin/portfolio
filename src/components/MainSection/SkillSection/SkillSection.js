import React, { useContext } from 'react'
import styles from './SkillSection.module.css'
import { GlobalContext } from '../../../GlobalContext'

const SkillSection = () => {
  const { section } = useContext(GlobalContext)

  return (
    <section
      id='skills'
      className={`
        container
        section-container
        ${section === 1 ? styles.active : ''}
      `}
    >
      <div className={styles.planetarySystem}>
        <div className={`${styles.orbit} ${styles.orbit3}`}>
          <div className={`glass-card ${styles.planet}`}></div>
          <div className={`glass-card ${styles.planet}`}></div>
          <div className={`glass-card ${styles.planet}`}></div>
          <div className={`glass-card ${styles.planet}`}></div>

          <div className={`${styles.orbit} ${styles.orbit2}`}>
            <div className={`glass-card ${styles.planet}`}></div>
            <div className={`glass-card ${styles.planet}`}></div>

            <div className={`${styles.orbit} ${styles.orbit1}`}>
              <div className={`glass-card ${styles.planet}`}></div>
              <div className={`glass-card ${styles.planet}`}></div>
              <div className={`glass-card ${styles.planet}`}></div>
              <div className={`glass-card ${styles.planet}`}></div>

              <div className={`glass-card ${styles.planetCenter}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
