import React from 'react'
import styles from './SkillInfoCard.module.css'

const AboutInfoCard = ({ active }) => {

  if (!active) return null
  return (
    <div id='skill-infocard-overlay' className={styles.background}>
      <div className={`glass-card ${styles.infoCard}`}>
        <div className={styles.cardHeader}>Who am I</div>
      </div>
    </div>
  )
}

export default AboutInfoCard
