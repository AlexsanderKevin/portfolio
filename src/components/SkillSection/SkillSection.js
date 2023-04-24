import React, { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './SkillSection.module.css'

const skills = {
  javascript: [ 'JavaScript', 'Node', 'Express', 'React', 'Sequelize', 'NPM', 'JQuery', 'TypeScript', 'Next' ],
  css: [ 'CSS', 'Bootstrap', 'SASS', 'Tailwind' ],
  other: [ 'html', 'css' ]
}

const SkillSection = () => {
  return (
    <section id='skills' className={`container section-container fade-in-left ${styles.skillSection}`}>
      <SectionHeader position='center'>My Skills</SectionHeader>

      <div className={styles.skillContainer}>
        <div className={`${styles.skillGrid}`}>

          <div className={`${styles.javascriptGrid}`}>
            {skills.javascript.map( skill => {
              return(
                <div className={`${styles.skill}`} key={skill}>{ skill }</div>
              )
            })}
          </div>

          <div className={`${styles.cssGrid}`}>
            {skills.css.map( skill => {
              return(
                <div className={`${styles.skill}`} key={skill}>{ skill }</div>
              )
            })}
          </div>

          {skills.other.map( skill => {
            return(
              <div className={`${styles.skill}`} key={skill}>{ skill }</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillSection
