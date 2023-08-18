import React, { useContext } from 'react'
import styles from './IntroSection.module.css'
import Resume from '../../../assets/resume-kevin-alexsander.pdf'
import { GlobalContext } from '../../../GlobalContext'
import Bust from '../../Ilustrations/Bust/Bust'

const IntroSection = () => {
  const { section } = useContext(GlobalContext)

  return (
    <section 
      id='home'
      className={`
        grid-container 
        section-container 
        ${styles.introSection}
        ${section === 0 ? styles.active : ''}
      `}
    >
      <div className={styles.svgContainer}>
        <Bust active={section === 0}/>
      </div>
      <div className={`glass-card ${styles.infoCard}`}>
        <p><strong>Hi, my name is</strong></p>
        <h1 className='title'>Kevin Alexsander</h1>
        <h2 className='title-secondary title breathing'>I do pretty stuff on the computer</h2>
        <p className={` ${styles.mainParagraph} `}>I'm a software developer specializing in <strong>building and designing front-end</strong> (and ocasionally back-end) applications.</p>
        <a 
          href={Resume}
          download='resume-kevin-alexsander'
          className='anchor-main'
        >
          Resume
          <i className='pi pi-download' style={{marginLeft: '.5rem'}}></i>
        </a>
      </div>
    </section>
  )
}

export default IntroSection
