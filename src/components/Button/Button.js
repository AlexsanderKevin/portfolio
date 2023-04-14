import styles from './Button.module.css'

const Button = ({ children }) => {
  return (
    <button
      className={` ${styles.button} fill-bg `}
    >{ children }</button>
  )
}

export default Button
