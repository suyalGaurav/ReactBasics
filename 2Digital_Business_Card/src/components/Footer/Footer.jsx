
import './footer.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <ul className="social--media--links">
            <li>
                <a href="https://twitter.com" className="twitter"><FontAwesomeIcon icon= {faSquareTwitter}/></a>
            </li>
            <li>
                <a href="https://facebook.com" className="facebook"><FontAwesomeIcon icon= {faSquareFacebook}/></a>
            </li>
            <li>
                <a href="https://instagram.com" className="instagram"><FontAwesomeIcon icon= {faSquareInstagram}/></a>
            </li>
            <li>
                <a href="https://github.com" className="github"><FontAwesomeIcon icon= {faSquareGithub}/></a>
            </li>
        </ul>
    )
}