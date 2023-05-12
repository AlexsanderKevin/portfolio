import styles from './Logo.module.css'
import { ReactComponent as LogoSvg } from '../../../assets/svg/logo.svg'

const Logo = () => {
    return (
        <LogoSvg className={` ${styles.logo} `} height={'2.2rem'}/>
    )
}

export default Logo