import React, { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './SkillSection.module.css'
import { ReactComponent as IconJavascript } from '../../assets/svg/icon-javascript.svg'
import { ReactComponent as IconNode } from '../../assets/svg/icon-node.svg'
import { ReactComponent as IconExpress } from '../../assets/svg/icon-express.svg'
import { ReactComponent as IconReact } from '../../assets/svg/icon-react.svg'
import { ReactComponent as IconSequelize } from '../../assets/svg/icon-sequelize.svg'
import { ReactComponent as IconNpm } from '../../assets/svg/icon-npm.svg'
import { ReactComponent as IconJquery } from '../../assets/svg/icon-jquery.svg'
import { ReactComponent as IconTypescript } from '../../assets/svg/icon-typescript.svg'
import { ReactComponent as IconNext } from '../../assets/svg/icon-next.svg'
import { ReactComponent as IconCss } from '../../assets/svg/icon-css.svg'
import { ReactComponent as IconBootstrap } from '../../assets/svg/icon-bootstrap.svg'
import { ReactComponent as IconSass } from '../../assets/svg/icon-sass.svg'
import { ReactComponent as IconTailwind } from '../../assets/svg/icon-tailwind.svg'
import { ReactComponent as IconHtml } from '../../assets/svg/icon-html.svg'
import { ReactComponent as IconGit } from '../../assets/svg/icon-git.svg'

const SkillSection = () => {
  const [ activeJs, setActiveJs ] = useState(false)
  const [ activeCss, setActiveCss ] = useState(false)

  return (
    <section id='skills' className={`container section-container fade-in-left ${styles.skillSection}`}>
      <SectionHeader position='center'>My Skills</SectionHeader>

      <div className={styles.skillContainer}>
        <div className={`${styles.skillGrid}`}>

          <div className={`${styles.javascriptGrid} ${activeJs ? styles.active : ''}`}>
            <div className={styles.skill}><IconJavascript height={'4.5rem'} width={'5rem'}/></div>
            <div className={styles.skill}><IconNode height={'5rem'} width={'5rem'}/></div>
            <div className={styles.skill}><IconExpress height={'4.8rem'} width={'6rem'}/></div>
            <div className={styles.skill}><IconReact height={'5rem'} width={'6rem'}/></div>
            <div className={styles.skill}><IconSequelize height={'5rem'} width={'6rem'}/></div>
            <div className={styles.skill}><IconNpm height={'4.2rem'} width={'6rem'}/></div>
            <div className={styles.skill}><IconJquery height={'4.5rem'} width={'6rem'}/></div>
            <div className={styles.skill}><IconTypescript height={'4.2rem'} width={'6rem'}/></div>
            <div className={styles.skill}><IconNext height={'4.8rem'} width={'6rem'}/></div>
          </div>

          <div className={`${styles.cssGrid} ${activeCss ? styles.active : ''}`}>
            <div className={styles.skill}><IconCss height={'4.5rem'} width={'6rem'}/></div>
            <div className={styles.skill}><IconBootstrap height={'4rem'} width={'6rem'}/></div>
            <div className={styles.skill}><IconSass height={'4.8rem'} width={'6rem'}/></div>
            <div className={styles.skill}><IconTailwind height={'4.5rem'} width={'5rem'}/></div>
          </div>

          <div className={styles.skill}><IconHtml height={'4.5rem'} width={'6rem'}/></div>
          <div className={styles.skill}><IconGit height={'4.8rem'} width={'6rem'}/></div>

        </div>
      </div>
    </section>
  )
}

export default SkillSection
