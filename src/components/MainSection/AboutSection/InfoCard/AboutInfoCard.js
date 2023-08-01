import React from 'react'
import styles from './SkillInfoCard.module.css'
import aboutStyles from './AboutInfoCard.module.css'
import BustMini from '../../../Ilustrations/BustMini/BustMini'

const AboutInfoCard = ({ active, setTarget }) => {

  const handleClick = event => {
    const targetId = event.target.getAttribute('id')
    const clickedOutside = targetId === 'about-infocard-overlay' || targetId === 'about-infocard-frame'
    if (clickedOutside) setTarget(null)
  }

  if (!active) return null
  return (
    <div 
      id='about-infocard-overlay' 
      className={styles.background}
      onClick={handleClick}
    >
      <div className='grid-container'>
        <div id='about-infocard-frame' className={`glass-card ${styles.infoCard} ${aboutStyles.aboutInfoCard}`}>
          <div className={styles.cardHeader}>
            <h1 className={`title`}>Who am I</h1>
          </div>

          <div className={`${aboutStyles.aboutCardBody}`}>
            <BustMini active={true} height='170' width='150'/>

            <ul className={`${aboutStyles.aboutDetails}`}>
              <li>09/03/2002</li>
              <li>Brazil</li>
              <li>Front-end</li>
            </ul>

            <section className={`${aboutStyles.bio}`}>
              <h2>Kevin Alexsander de Jesus</h2>
              <p>I work with software development since May 2022 and I am passionate about technology and design and always seek to improve my skills. </p>
              <p>I believe that the combination of technical knowledge and design skills is fundamental to build high-quality applications.</p>
              <p>I am excited to apply these skills to a successful career in front-end. Contact me to exchange ideas about technology and programming!</p>
            </section>

            <section className={aboutStyles.buttonContainer}>
              <button onClick={() => setTarget(null)} ><i className='pi pi-arrow-circle-left'></i></button>
              <a className='anchor-main' href={'https://www.linkedin.com/in/kevin-alexsander-1610b91ab/'} target='blank'>Connect with me<i className='pi pi-external-link' style={{marginLeft: '.5rem'}}></i></a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInfoCard
