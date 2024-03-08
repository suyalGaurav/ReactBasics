import reactIcon from '../assets/react-icon-small.png';

export default function Navbar() {
    return (
        <nav>
            <img src={reactIcon} className="nav--icon" alt="React Icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}