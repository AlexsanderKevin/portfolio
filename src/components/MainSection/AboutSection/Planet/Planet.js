import React, { useState } from 'react'
import styles from '../SkillSection.module.css'
import planetStyles from './Planet.module.css'

const Planet = ({ id, children, center, focus, ...props }) => {
  return (
    <div 
      id={`${id}`}
      className={`
        glass-card 
        ${planetStyles.planet}
        ${ center ? styles.planetCenter : styles.planet }
        ${ focus === `planet-${id}` ? planetStyles.focus : '' }
      `}
      {...props}
    >{ children }</div>
  )
}

export default Planet
