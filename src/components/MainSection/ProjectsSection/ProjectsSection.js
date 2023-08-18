import React from 'react'
import styles from './ProjetcsSection.module.css'
import SectionHeader from '../../SectionHeader/SectionHeader'

const ProjectsSection = () => {
  return (
    <section
      id='projects'
      className={`
        grid-container
        section-container
        ${styles.projectsSection}
      `}
    >
      <div className={`${styles.headerContainer}`}>
        <h1 className={`title title-secondary`}>
          Things I've built
        </h1>
      </div>
    </section>
  )
}

export default ProjectsSection
