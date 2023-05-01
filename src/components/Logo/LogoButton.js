import Logo from "./Logo"

const LogoButton = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <button onClick={ handleClick }>
            <Logo/>
        </button>
    )
}

export default LogoButton
