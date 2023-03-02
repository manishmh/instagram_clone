import React from 'react'
import "./profile_cont.css"

const Profile_cont= ({ image }) => {
  return (
    <div className="profile__logo-container">
        <div className="profile__logo" onClick={() => {}}>
            <img src={ image } alt="profile-logo" />
        </div>
    </div>
  )
}

export default Profile_cont