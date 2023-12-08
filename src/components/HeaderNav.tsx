import React from "react";
import Phone from '../assets/Phone.png'
import Mail from '../assets/Email_ICO.png'
import LinkedIn from '../assets/LinkedIN.png'
import Github from '../assets/GitHeader.png'

export function HeaderNav() {
    return (
        <header className="page-header">
            <div>
                <nav>
                    <h1>Kristy Prieto</h1>
                    <a href="https://www.linkedin.com/in/kristy-prieto/"><img src={ LinkedIn } alt ="LinkedIn Logo"/></a>
                    <a href="https://github.com/kprieto14"><img src={ Github } alt="Github logo"/></a>
                </nav>

                <nav className="contact-info">
                    <img className='small-icon' src={ Phone } alt="Icon of a phone" />
                    <p>(305) 725 - 3124</p>
                    <img className='small-icon' src={ Mail } alt="Icon of an envelope" />
                    <p>kprieto14@gmail.com</p>
                </nav>
            </div>
        </header>
    )
}