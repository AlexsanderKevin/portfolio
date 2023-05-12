import { useContext, useEffect, useState } from 'react'
import LogoButton from './Logo/LogoButton'
import Nav from './Nav/Nav'
import styles from './Header.module.css'
import { GlobalContext } from '../../GlobalContext'

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
            <Nav sticked={sticked}/>
        </header>
    )
}

export default Header
