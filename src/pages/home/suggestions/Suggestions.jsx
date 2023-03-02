import React from 'react'
import './suggestions.css'

import { Manish, NoPictureLogo, Copyright } from '../../../assets'
import { Profile, HoverProfile } from '../../../components'


const Suggestions = () => {
  return (
    <div className="suggestions__container">
        <Profile image={ Manish } username="manishmh" name="Manish Malhotra" action="Switch" />
        <div className="suggestions__see-all">
            <h2>Suggestions for you</h2>
            <div className="suggestions__see-all-action">
                See All
            </div>
        </div>
        <div className="suggestions__follow">
            <HoverProfile />
            <Profile image={ NoPictureLogo } username="sandhya" name="Followed by aarushirx + 3 more" action="Follow" />
            <Profile image={ NoPictureLogo } username="mariya" name="Followed by you" action="Follow" />
            <Profile image={ NoPictureLogo } username="pankaj" name="Followed by beard" action="Follow" />
            <Profile image={ NoPictureLogo } username="_rohini_" name="New to instagram" action="Follow" />
            <Profile image={ NoPictureLogo } username="jumbo" name="Used to follow her" action="Follow" />
        </div>
    </div>
  )
}

export default Suggestions