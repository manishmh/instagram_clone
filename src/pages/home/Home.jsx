import React from 'react';
import './home.css'

import { Sidebar, Footer, Header } from '../../components';
import Suggestions from './suggestions/Suggestions';
import Feed from './feed/Feed';


const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="sidebar__content-container">
        <div className="invisible-sidebar"></div>
        <div className="home__sidebar">
          <Sidebar />
        </div>
        <div className="feed__content">
          <div className="feed__suggestions-container">
            <div className="feed__story-container">
              <Feed />
            </div>
            <div className="home__suggestions-container">
              <div className="home__suggestions">
                <Suggestions />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Home