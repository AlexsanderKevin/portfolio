import Logo from "./Logo"

const LogoButton = () => {
    const handleClick = () => {
        const body = document.querySelector('#body')
        body.scrollTo(0, 0)
    }

    return (
        <button onClick={ handleClick }>
            <Logo/>
        </button>
    )
}

export default LogoButton
