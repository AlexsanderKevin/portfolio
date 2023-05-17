import React, { useContext } from 'react'
import styles from './SkillSection.module.css'
import { GlobalContext } from '../../../GlobalContext'
import iconHtml from '../../../assets/img/icons/icon-html.png'
import iconCss from '../../../assets/img/icons/icon-css.png'
import iconGit from '../../../assets/img/icons/icon-git.png'
import iconReact from '../../../assets/img/icons/icon-react.png'
import { ReactComponent as JavascriptSVG } from '../../../assets/svg/icons/svg-javascript.svg'
import { ReactComponent as NodetSVG } from '../../../assets/svg/icons/svg-node.svg'

const SkillSection = () => {
  const { section } = useContext(GlobalContext)

  return (
    <section
      id='skills'
      className={`
        container
        section-container
        ${section === 1 ? styles.active : ''}
      `}
    >
      <div className={styles.planetarySystem}>
        <div className={`${styles.orbit} ${styles.orbit3}`}>
          <div className={`glass-card ${styles.planet}`}><img src={iconReact} alt=''></img></div>
          <div className={`glass-card ${styles.planet}`}></div>
          <div className={`glass-card ${styles.planet}`}></div>
          <div className={`glass-card ${styles.planet}`}></div>

          <div className={`${styles.orbit} ${styles.orbit2}`}>
            <div className={`glass-card ${styles.planet}`}><img src={iconGit} alt=''></img></div>
            <div className={`glass-card ${styles.planet}`}></div>

            <div className={`${styles.orbit} ${styles.orbit1}`}>
              <div className={`glass-card ${styles.planet}`}><JavascriptSVG/></div>
              <div className={`glass-card ${styles.planet}`}><NodetSVG/></div>
              <div className={`glass-card ${styles.planet}`}><img src={iconHtml} alt=''></img></div>
              <div className={`glass-card ${styles.planet}`}><img src={iconCss} alt=''></img></div>

              <div className={`glass-card ${styles.planetCenter}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
