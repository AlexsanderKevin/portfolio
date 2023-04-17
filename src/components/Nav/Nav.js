import styles from './Nav.module.css'
import '../../styles/animation.css'
import Anchor from '../Anchor/Anchor'
import { useState } from 'react'

const Nav = () => {
    const [ active, setActive ] = useState(1)

    const items = [
        { id: 1, label: 'About', href: '#about' },
        { id: 2, label: 'Skills', href: '#skills' },
        { id: 3, label: 'Experience', href: '#experience' },
        { id: 4, label: 'Work', href: '#work' },
        { id: 5, label: 'Contact', href: '#contact' },
    ]

    const handleClick = event => {
        setActive(Number(event.target.getAttribute('id')))
    }

    return (
        <nav className={` ${styles.navContainer} fade-in-right `}>
            { items.map( item => (
                <Anchor 
                    id={item.id}
                    href={item.href} 
                    key={item.id}
                    className={ active === item.id ? 'active' : '' }
                    handleClick={handleClick}
                    >
                    
                    {item.label} 
                </Anchor>
            ))}

            <button className='button-main fill-bg'> Resume </button>
        </nav>
    )
}

export default Nav
