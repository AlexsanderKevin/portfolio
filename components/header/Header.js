import styles from './Header.module.css'

export default function Header () {
    return (
        <header 
            className={`
                container
                ${ styles.header }
            `}
            style={{
                background: '#fea',
                width: '100%',
                height: '100px'
            }}
        >
        </header>
    )
}
