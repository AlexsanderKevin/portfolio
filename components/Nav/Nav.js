import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav () {
    return (
        <nav className={ styles.navContainer }>
            <Link className='active' href='#about' > About </Link>
            <Link href='#skills' > Skills </Link>
            <Link href='#experience' > Experience </Link>
            <Link href='#work' > Work </Link>
            <Link href='#contact' > Contact </Link>
        </nav>
    )
}
