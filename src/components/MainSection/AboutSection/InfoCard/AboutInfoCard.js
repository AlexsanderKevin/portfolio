import React from 'react'
import styles from './SkillInfoCard.module.css'
import aboutStyles from './AboutInfoCard.module.css'
import BustMini from '../../../Ilustrations/BustMini/BustMini'

const AboutInfoCard = ({ active }) => {

  if (!active) return null
  return (
    <div id='skill-infocard-overlay' className={styles.background}>
      <div className={`glass-card ${styles.infoCard} ${aboutStyles.aboutInfoCard}`}>
        <div className={styles.cardHeader}>
          <h1 className={`title`}>Who am I</h1>
        </div>
        <div className={`${styles.cardBody} ${styles.aboutCardBody}`}>
          <BustMini active={true}/>
        </div>
      </div>
    </div>
  )
}

export default AboutInfoCard
