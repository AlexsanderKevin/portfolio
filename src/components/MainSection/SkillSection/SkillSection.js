import React from 'react'
import styles from './SkillSection.module.css'

const SkillSection = () => {
  return (
    <section
      id='skills'
      className={`
        container
        section-container
      `}
    >
      <div className={styles.planetarySystem}>
        <div className={`${styles.orbit} ${styles.orbit3}`}>
          <div className={`glass-card ${styles.planet}`}></div>
          <div className={`glass-card ${styles.planet}`}></div>

          <div className={`${styles.orbit} ${styles.orbit2}`}>
            <div className={`glass-card ${styles.planet}`}></div>
            <div className={`glass-card ${styles.planet}`}></div>
            <div className={`glass-card ${styles.planet}`}></div>
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
