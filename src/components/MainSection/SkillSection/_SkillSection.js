import React, { useCallback, useContext, useState } from 'react'
import styles from './SkillSection.module.css'
import { ReactComponent as PlanetHtml } from '../../../assets/svg/planets/planet-html.svg'
import { ReactComponent as PlanetGit } from '../../../assets/svg/planets/planet-git.svg'
import { ReactComponent as SystemJavascrip } from '../../../assets/svg/planets/system-javascript.svg'
import { ReactComponent as SystemCss } from '../../../assets/svg/planets/system-css.svg'
import { GlobalContext } from '../../../GlobalContext'

const SkillSection = () => {
  const { section } = useContext(GlobalContext)

  return (
    <section id='skills' className={`
      container 
      section-container 
      fade-in-left 
      ${styles.skillSection}
      ${section === 1 ? styles.active : ''}
    `}>
      <PlanetHtml className={styles.planetHtml}/>
      <PlanetGit className={styles.planetGit}/>
      <SystemJavascrip className={styles.systemJavascrip}/>
      <SystemCss className={styles.systemCss}/>
    </section>
  )
}

export default SkillSection
