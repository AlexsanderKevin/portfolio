import React from 'react'
import styles from './Bg2.module.css'
import { ReactComponent as StarSvg } from '../../../assets/svg/star.svg'

const Bg2 = () => {
  return (
    <div className={styles.bgContainer}>
      <div className='container'>
        <div className={styles.sun}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <StarSvg className={styles.star1}/>
        <StarSvg className={styles.star2}/>
        <StarSvg className={styles.star3}/> */}
      </div>
    </div>
  )
}

export default Bg2
