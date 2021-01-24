import React from 'react'
import icon from '../assets/IconC1.png'
import { NavLink } from 'react-router-dom';
import Home from './Home';

const Icon = () => {
    return (
        <div>
            <div className="icon">
                <NavLink to='/home'><img src={icon} alt=""/></NavLink>
            </div>
        </div>
    )
}

export default Icon
