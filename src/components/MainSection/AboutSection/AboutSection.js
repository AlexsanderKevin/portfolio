import React, { useContext, useEffect, useState } from 'react'
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
import BustMini from '../../Ilustrations/BustMini/BustMini'
import Planet from './Planet/Planet'

const SkillSection = () => {
  const [ focusMode, setFocusmode ] = useState(null)
  const [ focus, setFocus ] = useState(null)
  const { section } = useContext(GlobalContext)

  const handleFocus = () => {
    setFocusmode(focus !== null)
  }

  useEffect(() => setFocusmode(focus !== null), [focus])

  const handleClickPlanet = event => {
    setFocus(event.currentTarget.getAttribute('id'))
  }

  console.log(focus)


  return (
    <section
      id='about'
      className={`
        container
        section-container
        ${section === 1 ? styles.active : ''}
      `}
    >
      <div className={`${styles.planetarySystem} ${focusMode ? 'focus-mode' : ''}`}>

        <div className={`${styles.orbit} ${styles.orbit3}`}>
          <Planet id='react' onClick={handleClickPlanet} focus={focus}><ReactSVG/></Planet>
          <Planet id='jquery' onClick={handleClickPlanet} focus={focus}><JquerySVG/></Planet>
          <Planet id='bootstrap' onClick={handleClickPlanet} focus={focus}><BootstrapSVG/></Planet>
          <Planet id='sass' onClick={handleClickPlanet} focus={focus}><SassSVG/></Planet>

          <div className={`${styles.orbit} ${styles.orbit2}`}>
            <Planet id='git' onClick={handleClickPlanet} focus={focus}><GitSVG/></Planet>
            <Planet id='figma' onClick={handleClickPlanet} focus={focus}><FigmaSVG/></Planet>

            <div className={`${styles.orbit} ${styles.orbit1}`}>
              <Planet id='javascript' onClick={handleClickPlanet} focus={focus}><JavascriptSVG/></Planet>
              <Planet id='node' onClick={handleClickPlanet} focus={focus}><NodetSVG/></Planet>
              <Planet id='html' onClick={handleClickPlanet} focus={focus}><HtmlSVG/></Planet>
              <Planet id='css' onClick={handleClickPlanet} focus={focus}><CssSVG/></Planet>

              <Planet id='bust-mini' onClick={handleClickPlanet} center={true} focus={focus}><BustMini active={ section === 1 }/></Planet>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
