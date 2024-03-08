import "./header.css"

function Header() {
    return (
        <header id="header">
            <p className="heading">Tenzies</p>
            <p className="header--paragraph">Roll until all dice are the same. Click
                each die to freeze it at its current value
                between rolls.
            </p>
        </header>
    )
}

export default Header