import React, { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './SkillSection.module.css'

const skills = {
  javascript: [ 'JavaScript', 'Node', 'Express', 'React', 'Sequelize', 'NPM', 'JQuery', 'TypeScript', 'Next' ],
  css: [ 'CSS', 'Bootstrap', 'SASS', 'Tailwind' ],
  other: [ 'html', 'GIT' ]
}

const SkillSection = () => {
  const [ activeJs, setActiveJs ] = useState(true)
  const [ activeCss, setActiveCss ] = useState(true)

  return (
    <section id='skills' className={`container section-container fade-in-left ${styles.skillSection}`}>
      <SectionHeader position='center'>My Skills</SectionHeader>

      <div className={styles.skillContainer}>
        <div className={`${styles.skillGrid}`}>

          <div className={`${styles.javascriptGrid} ${activeJs ? styles.active : ''}`}>
            {skills.javascript.map( (skill, index) => (
              <div 
                onClick={index === 0 ? () => setActiveJs(!activeJs) : null}
                className={`${styles.skill}`} 
                key={skill}
              >{ skill }</div>
            ))}
          </div>

          <div className={`${styles.cssGrid} ${activeCss ? styles.active : ''}`}>
            {skills.css.map( (skill, index) => (
              <div 
                onClick={index === 0 ? () => setActiveCss(!activeCss) : null}
                className={`${styles.skill}`} 
                key={skill}
              >{ skill }</div>
            ))}
          </div>

          {skills.other.map( skill => {
            return(
              <div className={`${styles.skill}`} style={{backgroundColor: '#FF8058'}} key={skill}>{ skill }</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillSection
