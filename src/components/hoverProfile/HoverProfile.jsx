import React from 'react'
import './hoverProfile.css'

import { Profile } from '../'
import { NoPictureLogo, privateAccount, followUserLogo } from '../../assets'

const HoverProfile = () => {
  return (
    <div className='hover__profile'>
        <Profile image={ NoPictureLogo } username="hover" name="hover Profile"/>
        <div className="user__details-numbers">
            <div className="user__posts">
                <div className="user__posts-number">69</div>
                <p>posts</p>
            </div>
            <div className="user__followers">
                <div className="user__followers-number">600</div>
                <p>followers</p>
            </div>
            <div className="user__following">
                <div className="user__following-number">500</div>
                <p>following</p>
            </div>
        </div>
        <hr />
        <div className="private__account-container">
            <div className="private_account">
                <img src={ privateAccount } alt="privateAccount" />
                <h2>The account is private</h2>
                <h3>Follow this account to see their photos and videos</h3>
            </div>
            <hr />
            <div className="follow-button">
                <img src={ followUserLogo } alt="follow" />
                <h1>Follow</h1>
            </div>
        </div>
    </div>
  )
}

export default HoverProfile