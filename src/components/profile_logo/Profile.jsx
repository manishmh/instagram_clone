import React from 'react'
import './profile.css'

import Profile_cont from '../profile_cont/Profile_cont'

const Profile = ({image, username, name, action }) => {
    return (
        <div className="suggestions">
            <Profile_cont image={ image }/>
            <div className="profile__user">
                <div className="profile__user-container">
                    <div className="profile__username" onClick={() => {}}>
                        { username}
                    </div>
                    <div className="profile__user-name">
                        { name }
                    </div>
                </div>
                <div className="profile__action" onClick={() => {}}>
                    { action }
                </div>
            </div>
        </div>
    )
}

export default Profile 