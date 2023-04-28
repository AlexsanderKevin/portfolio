import styles from './BackgroundIlustration.module.css'

const BackgroundIlustration = () => {
  return (
    <>
      <div className={styles.planet}></div>
      <div className={`${styles.wave} ${styles.wave1}`}></div>
      <div className={`${styles.wave} ${styles.wave2}`}></div>
      <div className={`${styles.wave} ${styles.wave3}`}></div>
    </>
  )
}

export default BackgroundIlustration
