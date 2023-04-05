import Link from 'next/link'
import styles from './Logo.module.css'

export default function LogoButton () {
    
    const handleClick = event => {

    }

    return (
        <button 
            className={ styles.logo } 
            onClick={ handleClick }
        > K </button>
    )
}
