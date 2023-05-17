import React, { useContext } from 'react'
import styles from './SkillSection.module.css'
import { GlobalContext } from '../../../GlobalContext'
import { ReactComponent as JavascriptSVG } from '../../../assets/svg/icons/svg-javascript.svg'
import { ReactComponent as NodetSVG } from '../../../assets/svg/icons/svg-node.svg'
import { ReactComponent as HtmlSVG } from '../../../assets/svg/icons/svg-html.svg'
import { ReactComponent as CssSVG } from '../../../assets/svg/icons/svg-css.svg'
import { ReactComponent as GitSVG } from '../../../assets/svg/icons/svg-git.svg'
import { ReactComponent as ReactSVG } from '../../../assets/svg/icons/svg-react.svg'
import { ReactComponent as JquerySVG } from '../../../assets/svg/icons/svg-jquery.svg'
import { ReactComponent as BootstrapSVG } from '../../../assets/svg/icons/svg-bootstrap.svg'
import { ReactComponent as SassSVG } from '../../../assets/svg/icons/svg-sass.svg'
import { ReactComponent as FigmaSVG } from '../../../assets/svg/icons/svg-figma.svg'
import { ReactComponent as BustoMiniSVG } from '../../../assets/svg/busto-mini.svg'

const SkillSection = () => {
  const { section } = useContext(GlobalContext)

  return (
    <section
      id='about'
      className={`
        container
        section-container
        ${section === 1 ? styles.active : ''}
      `}
    >
      <div className={styles.planetarySystem}>
        <div className={`${styles.orbit} ${styles.orbit3}`}>
          <div className={`glass-card ${styles.planet}`}><ReactSVG/></div>
          <div className={`glass-card ${styles.planet}`}><JquerySVG/></div>
          <div className={`glass-card ${styles.planet}`}><BootstrapSVG/></div>
          <div className={`glass-card ${styles.planet}`}><SassSVG/></div>

          <div className={`${styles.orbit} ${styles.orbit2}`}>
            <div className={`glass-card ${styles.planet}`}><GitSVG/></div>
            <div className={`glass-card ${styles.planet}`}><FigmaSVG/></div>

            <div className={`${styles.orbit} ${styles.orbit1}`}>
              <div className={`glass-card ${styles.planet}`}><JavascriptSVG/></div>
              <div className={`glass-card ${styles.planet}`}><NodetSVG/></div>
              <div className={`glass-card ${styles.planet}`}><HtmlSVG/></div>
              <div className={`glass-card ${styles.planet}`}><CssSVG/></div>

              <div className={`glass-card ${styles.planetCenter}`}><BustoMiniSVG/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
