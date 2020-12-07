import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.scss'

const NavigationBar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='nav-item'>
                <div >
                    Home
                </div>
            </Link>
            <Link to='/shoppage' className='nav-item'>
                <div >
                    Shop page
                </div>
            </Link>
            <Link to='/sign' className='nav-item'>
                <div >
                    Sign in
                </div>
            </Link>
        </div>
    );
}

export default NavigationBar;