import { useEffect, useState } from 'react'
import LogoButton from '../Logo/LogoButton'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'

const Header = () => {
    const [ sticked, setSticked ] = useState(false)
    const [ active, setActive ] = useState(false)
    const [ top, setTop ] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setSticked( window.scrollY >= 60 ? true : false )
            setActive( window.scrollY < top ? true : false )
            setTop( window.scrollY )
        }

        document.addEventListener('scroll', handleScroll)
    }, [ top ])

    return (
        <header 
            className={` 
                grid-container
                ${styles.header} 
                ${sticked ? styles.sticked : ''}
                ${active ? styles.active : ''}
            `}
        >
            <LogoButton/>
            <Nav sticked={sticked}/>
        </header>
    )
}

export default Header
