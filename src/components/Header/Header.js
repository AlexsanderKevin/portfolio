import LogoButton from '../Logo/LogoButton'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'

export default function Header () {
    return (
        <header 
            className={`
                container
                ${styles.header}
            `}
        >
            <LogoButton/>
            <Nav/>
        </header>
    )
}
