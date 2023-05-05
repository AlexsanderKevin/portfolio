import styles from './Nav.module.css'
import '../../styles/animation.css'
import Anchor from '../Anchor/Anchor'
import { useContext, useEffect, useMemo, useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'
import { GlobalContext } from '../../GlobalContext'
import debounce from '../../helper/Debounce'

const Nav = () => {
    const [ activeItem, setActiveItem ] = useState(0)
    const [ activeMenu, setActiveMenu ] = useState(false)
    const storage = useContext(GlobalContext)

    const items = useMemo(() => ([
        { id: 0, label: 'Home', href: '#home', topRange: [0, 700] },
        { id: 1, label: 'Skills', href: '#skills', topRange: [700, 1400] },
        { id: 2, label: 'About', href: '#about' },
        { id: 3, label: 'Experience', href: '#experience' },
        { id: 4, label: 'Work', href: '#work' },
        { id: 5, label: 'Contact', href: '#contact' },
    ]), [])

    const handleClickItem = event => {
        setActiveItem(Number(event.target.getAttribute('id')))
        setActiveMenu(false)
    }

    const handleClickMenu = () => { setActiveMenu(!activeMenu) }

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

    useEffect(() => {
        console.log('ala')
        items.forEach((item, index) => {
            if (item.topRange && window.scrollY >= item.topRange[0] && window.scrollY <= item.topRange[1]) {
                setActiveItem(index)
            }
        })
    }, [items, storage.top])

    return (
        <>
            <Hamburger 
                data-item='menu'
                handleClick={handleClickMenu} 
                active={activeMenu ? true : false}
                className={`${styles.menuButton}`}
            />
            <nav 
                data-item='menu'
                className={` ${styles.navContainer} ${activeMenu ? styles.active : ''}`}
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
