import React from 'react';

import './sidebar.css';
import 'font-awesome/css/font-awesome.min.css'

import { Instagram ,FindPeople, HomeFill, Like, Menu, Messenger, NewPosts, Reels, Search, Tags, LogoBlack, Manish} from '../../assets';
import { Profile_cont } from '../'


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__img-logo">
            <img src={ LogoBlack } alt='Instagram'></img>
        </div>
        <div className="sidebar__img-short-logo">
            <img src={Instagram} alt="Instagram" />
        </div>
        <div className="sidebar__menu">
            <div className="sidebar__menu-home" onClick={() => {}}>
                <img src={ HomeFill } alt="Home" />
                <h3>Home</h3>
            </div>
            <div className="sidebar__menu-search" onClick={() => {}}>
                <img src={ Search } alt="Search" />
                <h3>Search</h3>
            </div>
            <div className="sidebar__menu-explore" onClick={() => {}}>
                <img src={ FindPeople } alt="FindPeople" />
                <h3>Explore</h3>
            </div>
            <div className="sidebar__menu-reels" onClick={() => {}}>
                <img src={ Reels } alt="Reels" />
                <h3>Reels</h3>
            </div>
            <div className="sidebar__menu-messages" onClick={() => {}}>
                <img src={ Messenger } alt="messenger" />
                <h3>Messages</h3>
            </div>
            <div className="sidebar__menu-notifications" onClick={() => {}}>
                <img src={ Like } alt="Like" />
                <h3>Notifications</h3>
            </div>
            <div className="sidebar__menu-create" onClick={() => {}}>
                <img src={ NewPosts } alt="NewPosts" />
                <h3>Create</h3>
            </div>
            <div className="sidebar__menu-profile" onClick={() => {}}>
                <Profile_cont image={ Manish }/>
                <h3>Profile</h3>
            </div>
        </div>
        <div className="sidebar__more" onClick={() => {}}>
            <img src={ Menu } alt="Menu" />
            <h3>More</h3>
        </div>
    </div>
  )
}

export default Sidebar