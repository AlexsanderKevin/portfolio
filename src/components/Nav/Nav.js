import styles from './Nav.module.css'
import '../../styles/animation.css'
import Anchor from '../Anchor/Anchor'
import { useEffect, useState } from 'react'
import { click } from '@testing-library/user-event/dist/click'

const Nav = () => {
    const [ activeItem, setActiveItem ] = useState(1)
    const [ activeMenu, setActiveMenu ] = useState(false)

    const items = [
        { id: 1, label: 'About', href: '#about' },
        { id: 2, label: 'Skills', href: '#skills' },
        { id: 3, label: 'Experience', href: '#experience' },
        { id: 4, label: 'Work', href: '#work' },
        { id: 5, label: 'Contact', href: '#contact' },
    ]

    const handleClickItem = event => {
        setActiveItem(Number(event.target.getAttribute('id')))
        setActiveMenu(false)
    }

    const handleClickMenu = event => {
        setActiveMenu(!activeMenu)
    }

    // useEffect(() => {
    //     const clickOutside = event => {
    //         if (event.target.getAttribute('id') !== 'nav-menu' || event.target.getAttribute('id') !== 'button-menu') {
    //             // setActiveMenu(false)
    //             console.log(event.target)
    //             console.log(activeMenu)
    //         }
    //     }

    //     if (activeMenu === true) {
    //         document.addEventListener('click', clickOutside)
    //     } else {
    //         document.removeEventListener('click', clickOutside)
    //     }
    // }, [ activeMenu ])

    return (
        <>
            <button 
                id='button-menu'
                className={`${styles.menuButton} ${activeMenu && styles.active}`}
                onClick={handleClickMenu}
            ></button>
            <nav 
                id='nav-menu'
                className={` ${styles.navContainer} ${activeMenu && styles.active} fade-in-right `}
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
