import styles from './Bg1.module.css'

const Bg1 = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.planet}></div>
      <div className={`${styles.wave} ${styles.wave1}`}></div>
      <div className={`${styles.wave} ${styles.wave2}`}></div>
      <div className={`${styles.wave} ${styles.wave3}`}></div>
    </div>
  )
}

export default Bg1
