import React from 'react'
import styles from './IntroSection.module.css'
import Resume from '../../assets/Resume.pdf'

const IntroSection = () => {
  return (
    <section 
      className={`
        container 
        section-container 
        fade-in-left
        ${styles.introSection}
      `}
    >
      <p><strong>Hi, my name is</strong></p>
      <h1 className='title-main title'>Kevin Alexsander</h1>
      <h2 className='title-secondary title breathing'>I do pretty stuff on the computer</h2>
      <p className={` ${styles.mainParagraph} `}>I'm a software developer specializing in <strong>building and designing front-end</strong> (and ocasionally back-end) applications.</p>
      <a 
        className='button-main fill-bg' 
        href={Resume}
        download='Resume'
      >
        Resume
      </a>
    </section>
  )
}

export default IntroSection
