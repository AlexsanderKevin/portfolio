import React from 'react'
import styles from './IntroSection.module.css'

const IntroSection = () => {
  return (
    <section 
      className={`container section-container ${styles.introSection}`}
    >
      <p><strong>Hi, my name is</strong></p>
      <h1 className='title-main'>Kevin Alexsander</h1>
      <h2 className='title-secondary'>I do pretty stuff on the computer</h2>
      <p className={` ${styles.mainParagraph} `}>I'm a software developer specializing in <strong>building and designing front-end</strong> (and ocasionally back-end) applications.</p>
      <a 
        className='button-main fill-bg'
        href='https://github.com/AlexsanderKevin'
        target='blank'
      >Check out my GitHub!</a>
    </section>
  )
}

export default IntroSection
