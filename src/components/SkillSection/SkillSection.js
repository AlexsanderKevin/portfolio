import React, { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './SkillSection.module.css'

const skills = [
  {name: 'JavaScript', sub: 'js'},
  {name: 'Node', sub: 'js'},
  {name: 'Express', sub: 'js'},
  {name: 'CSS', sub: 'css'},
  {name: 'Bootstrap', sub: 'css'},
  {name: 'React', sub: 'js'},
  {name: 'Sequelize', sub: 'js'},
  {name: 'NPM', sub: 'js'},
  {name: 'SASS', sub: 'css'},
  {name: 'Tailwind', sub: 'css'},
  {name: 'JQuery', sub: 'js'},
  {name: 'TypeScript', sub: 'js'},
  {name: 'Next', sub: 'js'},
  {name: 'GIT', sub: ''},
  {name: 'HTML', sub: ''},
]

const SkillSection = () => {
  const [ activeJs, setActiveJs ] = useState(true)
  const [ activeCss, setActiveCss ] = useState(true)

  return (
    <section id='skills' className={`container section-container fade-in-left ${styles.skillSection}`}>
      <SectionHeader position='center'>My Skills</SectionHeader>

      <div className={styles.skillContainer}>
        <div className={`${styles.skillGrid}`}>
          <div 
            onClick={() => setActiveJs(false)}
            className={`
              ${styles.skill} 
              ${styles.javascript}
              ${activeJs ? styles.active : ''}
            `}
          >JavaScript</div>

          <div 
            onClick={() => setActiveCss(false)}
            className={`
              ${styles.skill} 
              ${styles.css}
              ${activeCss ? styles.active : ''}
            `}
          >CSS</div>

          {skills.map(skill => {
              switch (skill.sub) {
                case 'js': return !activeJs ? <div className={styles.skill} key={skill.name} data-sub={skill.sub}>{skill.name}</div> : null
                case 'css': return !activeCss ? <div className={styles.skill} key={skill.name} data-sub={skill.sub}>{skill.name}</div> : null
                default: return  <div className={styles.skill} key={skill.name} data-sub={skill.sub}>{skill.name}</div>
              }
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillSection
