import React from 'react'
import styles from './InfoCard.module.css'
import skills from './skills'

const InfoCard = ({ target, setTarget }) => {
  const skill = skills[target]

  const handleClick = event => {
    console.log(event.target)
  }

  if (!target) return null
  else return (
    <div id='skill-infocard-overlay' className={`${styles.background}`} onClick={handleClick}>
      <div id='skill-infocard-frame' className={styles.container}>
        <div className={styles.icon}>{ skill.icon }</div>

        <div className={`glass-card ${styles.infoCard}`}>
          <div className={styles.cardHeader}><h1>{ skill.name }</h1></div>
          <div className={styles.cardBody}><p>{ skill.description }</p></div>

          <div className={styles.buttonContainer}>
            <button onClick={() => setTarget(null)}><i className='pi pi-arrow-circle-left'></i></button>
            <a className='anchor-main' href={skill.url}>Learn more<i className='pi pi-external-link' style={{marginLeft: '.5rem'}}></i></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InfoCard
