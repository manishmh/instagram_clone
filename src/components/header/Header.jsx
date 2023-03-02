import React from 'react'
import './header.css'

import {LogoBlack, Like, Search } from '../../assets'

const Header = () => {
  return (
    <div className="header-container">
        <div className="header-logo-container">
          <img src={ LogoBlack } className="instagram-logo" alt="newext-logo" />
        </div>
        <div className="search-and-account-container">
            <div className="search-bar-container">
                <form className="search-bar" action="">
                <div className="img-container">
                    <img src={ Search } alt="search" />
                </div>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    name="search-bar" 
                    onClick={() => {}}
                />
                </form>
            </div>
            <div className="notifications__icon">
                <img src={ Like } alt="notifications" />
            </div>
        </div> 
      </div>
  )
}

export default Header