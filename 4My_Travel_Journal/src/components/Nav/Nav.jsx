import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarth } from "@fortawesome/free-solid-svg-icons"
import "./Nav.css"

export default function Nav() {
    return (
        <nav>
            <FontAwesomeIcon icon={ faEarth } className="nav-icon"/>
            <h6>travel journal.</h6>
        </nav>
        
    )
}