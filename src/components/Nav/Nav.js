import Button from '../Button/Button'
import styles from './Nav.module.css'
import '../../styles/animation.css'
import Anchor from '../Anchor/Anchor'
import { useState } from 'react'

const Nav = () => {
    const [ active, setActive ] = useState()

    return (
        <nav className={ styles.navContainer }>
            <Anchor href='#about' className='active'> About </Anchor>
            <Anchor href='#skills'> Skills </Anchor>
            <Anchor href='#experience'> Experience </Anchor>
            <Anchor href='#work'> Work </Anchor>
            <Anchor href='#contact'> Contact </Anchor>

            <Button> Resume </Button>
        </nav>
    )
}

export default Nav
