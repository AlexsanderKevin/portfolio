import React, { useContext } from 'react'
import styles from './IntroSection.module.css'
import Resume from '../../../assets/Resume.pdf'
import { ReactComponent as BustoSVG } from '../../../assets/svg/busto.svg'
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
        {/* <BustoSVG className={styles.BustoSVG}/> */}
        <Bust active={section === 0}/>
      </div>
      <div className={`glass-card ${styles.infoCard}`}>
        <p><strong>Hi, my name is</strong></p>
        <h1 className='title'>Kevin Alexsander</h1>
        <h2 className='title-secondary title breathing'>I do pretty stuff on the computer</h2>
        <p className={` ${styles.mainParagraph} `}>I'm a software developer specializing in <strong>building and designing front-end</strong> (and ocasionally back-end) applications.</p>
        <a 
          className='button-main fill-bg' 
          href={Resume}
          download='Resume'
        >
          Resume
        </a>
      </div>
    </section>
  )
}

export default IntroSection
