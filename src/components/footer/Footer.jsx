import React from 'react'
import './footer.css'
import { Copyright } from '../../assets'

const Footer = () => {
  return (
    <div className="footer">
        <div className="pages__links">
          <div className="meta">Meta</div>
            <div className="">About</div>
            <div className="">Help</div>
            <div className="">Jobs</div>
            <div className="">Press</div>
            <div className="">Api</div>
            <div className="">Privacy</div>
            <div className="terms">Terms</div>
            <div className="terms-imprints">Terms and imprints</div>
            <div className="ranking">NetzDG/UrhDaG/ranking of content</div>
            <div className="top-accounts">Top Accounts</div>
            <div className="">Location</div>
            <div className="">Language</div>
            <div className="contact-nonusers">Contact uploading and non-users</div>
        </div>
        <div className="site__ownership">
            <img src={ Copyright } alt="copyright" />
            <div className="site__ownerhsip-year">2023</div>
            <div className="site__ownership-credit">INSTAGRAM FROM META</div>
        </div>
    </div>
  ) 
}

export default Footer