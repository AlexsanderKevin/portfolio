import styles from './Nav.module.css'
import '../../styles/animation.css'
import Anchor from '../Anchor/Anchor'
import { useEffect, useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'

const Nav = () => {
    const [ activeItem, setActiveItem ] = useState(1)
    const [ activeMenu, setActiveMenu ] = useState(false)

    const items = [
        { id: 1, label: 'Home', href: '#home' },
        { id: 2, label: 'Skills', href: '#skills' },
        { id: 3, label: 'About', href: '#about' },
        { id: 4, label: 'Experience', href: '#experience' },
        { id: 5, label: 'Work', href: '#work' },
        { id: 6, label: 'Contact', href: '#contact' },
    ]

    const handleClickItem = event => {
        setActiveItem(Number(event.target.getAttribute('id')))
        setActiveMenu(false)
    }

    const handleClickMenu = () => { console.log('ala'); setActiveMenu(!activeMenu) }

    useEffect(() => {
        const clickOutside = event => {
            const target = event.target.getAttribute('data-item')
            if (target !== 'menu') setActiveMenu(false)
        }

        if (activeMenu === true) {
            document.addEventListener('click', clickOutside)
        } else {
            document.removeEventListener('click', clickOutside)
        }
    }, [ activeMenu ])

    return (
        <>
            <Hamburger 
                data-item='menu'
                handleClick={handleClickMenu} 
                active={activeMenu ? true : false}
                className={`fade-in-right ${styles.menuButton}`}
            />
            <nav 
                data-item='menu'
                className={` ${styles.navContainer} ${activeMenu ? styles.active : ''} fade-in-right `}
            >
                { items.map( item => (
                    <Anchor 
                        id={item.id}
                        href={item.href} 
                        key={item.id}
                        className={ activeItem === item.id ? 'active' : '' }
                        handleClick={handleClickItem}
                        >
                        
                        {item.label} 
                    </Anchor>
                ))}
            </nav>
        </>
    )
}

export default Nav
