import { useContext, useEffect, useState } from 'react'
import LogoButton from '../Logo/LogoButton'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'
import { GlobalContext } from '../../GlobalContext'

const Header = () => {
    const [ sticked, setSticked ] = useState(false)
    const storage = useContext(GlobalContext)

    useEffect(() => {
        setSticked( storage.top >= 60 ? true : false )
    }, [ storage.top ])

    return (
        <header 
            className={` 
                grid-container
                ${styles.header} 
                ${sticked ? styles.sticked : ''}
                ${storage.header ? styles.active : ''}
            `}
        >
            <LogoButton/>
            <Nav sticked={sticked}/>
        </header>
    )
}

export default Header
