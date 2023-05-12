import { useContext, useEffect, useState } from 'react'
import LogoButton from './Logo/LogoButton'
import Nav from './Nav/Nav'
import styles from './Header.module.css'
import { GlobalContext } from '../../GlobalContext'
import 'primeicons/primeicons.css'

const Header = () => {
    const [ sticked, setSticked ] = useState(false)
    const context = useContext(GlobalContext)

    useEffect(() => {
        setSticked( context.top >= 60 ? true : false )
    }, [ context.top ])

    return (
        <header 
            className={` 
                grid-container
                ${styles.header} 
                ${sticked ? styles.sticked : ''}
                ${context.header ? styles.active : ''}
            `}
        >
            <LogoButton/>
            <div className={styles.contactIcons}>
                <a href='https://www.linkedin.com/in/kevin-alexsander-1610b91ab/' target='blank'>
                    <i className='pi pi-linkedin'></i>
                </a>
                <a href='https://github.com/AlexsanderKevin' target='blank'>
                    <i className='pi pi-github'></i>
                </a>
                <a href='https://wa.me/5519984464386' target='blank'>
                    <i className='pi pi-whatsapp'></i>
                </a>
                <a href='https://wa.me/5519984464386' target='blank'>
                    <i className='pi pi-gmail'></i>
                </a>
            </div>
            <Nav sticked={sticked}/>
        </header>
    )
}

export default Header
