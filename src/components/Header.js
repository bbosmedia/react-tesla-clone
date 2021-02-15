import React from 'react'
import "./Header.css"
import TeslaLogo from "../assets/teslaLogoSmall.svg"
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <header className="header">
           <div className="header__logo">
               <img src={TeslaLogo} alt=""/>
            </div> 
            <div className="header__center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>
            <div className="header__right">
                <p className="header__rightLink">Shop</p>
                <p className="header__rightLink">Tesla Account</p>
                <p><MenuIcon /></p>
            </div>
        </header>
    )
}

export default Header
