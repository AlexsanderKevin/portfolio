import React, { useState } from 'react'
import styles from './SkillSection.module.css'
import { ReactComponent as PlanetHtml } from '../../../assets/svg/planets/planet-html.svg'
import { ReactComponent as PlanetGit } from '../../../assets/svg/planets/planet-git.svg'
import { ReactComponent as SystemJavascrip } from '../../../assets/svg/planets/system-javascript.svg'
import { ReactComponent as SystemCss } from '../../../assets/svg/planets/system-css.svg'

const SkillSection = () => {
  return (
    <section id='skills' className={`container section-container fade-in-left ${styles.skillSection}`}>
      <PlanetHtml className={styles.planetHtml}/>
      <PlanetGit className={styles.planetGit}/>
      <SystemJavascrip className={styles.systemJavascrip}/>
      <SystemCss className={styles.systemCss}/>
    </section>
  )
}

export default SkillSection
