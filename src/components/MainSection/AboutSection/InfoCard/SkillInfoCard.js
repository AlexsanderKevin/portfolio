import React from 'react'
import styles from './SkillInfoCard.module.css'
import skills from './skills'

const SkillInfoCard = ({ target, setTarget }) => {
  const skill = skills[target]

  const handleClick = event => {
    const clickedOutside = !event.target.closest(`#skill-infocard-frame svg`)
      && !event.target.closest(`#skill-infocard-frame .glass-card`)

    if (clickedOutside) setTarget(null)
  }

  if (!skill) return null
  else return (
    <div 
      id='skill-infocard-overlay' 
      className={`${styles.background}`} 
      onClick={handleClick}
    >
      <div className='grid-container'>
        <div id='skill-infocard-frame' className={styles.container}
        >
          <div className={styles.icon}>{ skill.icon }</div>

          <div className={`glass-card ${styles.infoCard}`}>
            <div className={styles.cardHeader}><h1>{ skill.name }</h1></div>
            <div className={styles.cardBody}><p>{ skill.description }</p></div>

            <div className={styles.buttonContainer}>
              <button onClick={() => setTarget(null)}><i className='pi pi-arrow-circle-left'></i></button>
              <a className='anchor-main' href={skill.url} target='blank'>Learn more<i className='pi pi-external-link' style={{marginLeft: '.5rem'}}></i></a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillInfoCard
