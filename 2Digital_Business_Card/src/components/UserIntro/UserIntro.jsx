
import './userIntro.css';
import React from "react";
import userImage from "../../assets/MasterChief.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function UserIntro() {
    return (
        <div className="user--intro">
            <img src={userImage} alt="MasterChief" className="user-image"/>
            <h3 className="user-name">John-117</h3>
            <h5 className="user-title">Protagonist in Halo series</h5>
            <a className="user-web" href="https://en.wikipedia.org/wiki/Halo_(franchise)">john117.website</a>
            <div className="user-email-linkedin">
                <button className="email" onClick={() => window.location.href = 'https://mail.google.com/'}>
                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    Email
                </button>
                <button className="linkedin" onClick={() => window.location.href = 'https://www.linkedin.com/'}>
                    <span><FontAwesomeIcon icon={faLinkedin} /></span>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

