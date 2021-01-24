import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = () => {
    return (
        <div>
            <div className="mainNav">
                <ul>
                    <li><NavLink className="navlinks" to='/home' activeClassName="active_Class"><FontAwesomeIcon icon='home' /></NavLink></li>
                    <li><NavLink className="navlinks" to='/about' activeClassName="active_Class"><FontAwesomeIcon icon='address-card' /></NavLink></li>
                    <li><NavLink className="navlinks" to='/news' activeClassName="active_Class"><FontAwesomeIcon icon='book-dead' /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
