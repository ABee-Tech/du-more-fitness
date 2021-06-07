import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Logo from '../images/logo.png'

function Header({ title }) {
    return (
        <header className="header">
            <div className="container">

                {/* <h1>{title}</h1> */}
                <img src={Logo} alt="logo" className="logo" />
                <nav>
                    <Link to="/" className="btn btn-secondary"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </nav>
            </div>

        </header>
    )
}

export default Header
