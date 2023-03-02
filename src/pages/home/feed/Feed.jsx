import React from 'react'
import './feed.css'

import { Profile_cont } from '../../../components'
import { NoPictureLogo, Profile , More, Val, Val1, Val2, Kriti1, Kriti2, Manish1, Manish2, Manish3, Manish4, Like, Comment, SharePosts, Save, Emoji } from '../../../assets'


let userData = [
    { logo: NoPictureLogo, username: 'manishmh', img: Manish3, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'Valyrae', img: Val1, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'this_is_for_testing', img: Manish2, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'Valkyrae', img: Val2, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'manishmh', img: Manish1, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'kritisanon', img: Kriti1, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'kritisanon', img: Kriti2, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'Valkyrae', img: Val, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'manishmh', img: Manish2, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'manishmh', img: Manish4, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' },
    { logo: NoPictureLogo, username: 'manishmh', img: Manish4, likecount: '69000', postcaption: 'Hello this is Manish Malhtra', commentcount: '280' }
]


// stories component for home feed
const Profile_story = ({ image , username }) => {
    return (
        <>
            <div className="feed__story-profile">
                {/* calling Profile_cont component that is logo */}
                <Profile_cont image={ image }/>
                <div className="username">{ username }</div>
            </div>
        </>
    )
}

// header component of the post in the feed that contains user logo, username and more options
const Feed_profile_header = ( { image , username }) => {
    return (
        <>
            <div className="feed__post-profile">
                <div className="feed__post-profile-user">
                    {/* calling Profile_story component which is modified for the required header of the post */}
                    <Profile_story image={ image } username={ username } />
                    <div className="post-day-dot"></div>
                    <div className="post-day">2<span>d</span></div>
                </div>
                <div className="feed__post-profile-options">
                    <img src={ More } alt="more" />
                </div>
            </div>
        </>
    )
}

// Stories of friends in the feed
const FeedStories = ({ NoPictureLogo }) => {
    const [users, setUsers] = React.useState(userData) ;

    
    function eventListener(direction) {
        document.addEventListener("click", e => {
            let handle
            if(e.target.matches(".handle")) {
                handle = e.target
            } else {
                handle = e.target.closest(".handle")
            }
            if (handle != null) onHandleClick(direction)
        })
    }


    function onHandleClick(direction) {
        let slider = document.querySelector(':root');
        const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));

        //child count 
        const items = document.querySelector('.feed__story')
        const count = items.children.length

        const rightIndex = Math.floor((count-2)/4);
        
        if(direction === "next" && sliderIndex < Math.floor((count - 2)/4)) {
            slider.style.setProperty('--slider-index', sliderIndex + 1)
            console.log('next', sliderIndex)
        }
        
        if(direction === "previous" && sliderIndex != 0) {
            slider.style.setProperty('--slider-index', sliderIndex - 1)
            console.log('back', sliderIndex)
        }

        // setting left right arrow property 
        if (sliderIndex != 0) {
            slider.style.setProperty('--left-handle-display', 'block');
            console.log('block', sliderIndex)
        }

        if(sliderIndex != rightIndex-1) {
            slider.style.setProperty('--right-handle-display', 'block');
        }
        else slider.style.setProperty('--right-handle-display', 'none');
    }

    
    return (
        <>
            <div className="feed__story">
                <button className='handle left-handle hide-button' onClick={() => eventListener("previous")}>
                    <div className="text">&#8249;</div>
                </button>
                {/* mapping over user data to display story accounts */}
                    {users.map(user => {
                        return(
                            <Profile_story image={ NoPictureLogo } username={ user.username } />
                            )
                        })}
                <button className='handle right-handle' onClick={() => eventListener("next")}>
                    <div className="text">&#8250;</div>
                </button>
            </div>
        </>
    )
}

// content component of the feed containing posts, comments, likes saves and all
const HomeContents = ({NoPictureLogo, username, image, LikeCount, PostCaption, CommentCount}) => {
    return(
        <>
            <div className="feed">
                {/* picture div of the content's post */}
                <div className="feed__post">
                    <div className="post__container">
                        <Feed_profile_header image={ NoPictureLogo } username={ username } />
                        <div className="posts">
                            <div className="posts__img-container">
                                <img src={ image} alt="valkyrae" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* like, share, comment and save section */}
                <div className="feed__interaction">
                    <div className="like-comment-share">
                        <img src={ Like } alt="Like" />
                        <img src={ Comment } alt="Comment" />
                        <img src={ SharePosts } alt="Share Posts" />
                    </div>
                    <div className="feed__interaction-save">
                        <img src={ Save } alt="Save posts" />
                    </div>
                </div>

                {/* Like count section of the post */}
                <div className="feed__like-count">
                    <div className="mutual-like">
                        <Profile_cont image={ image }/>
                    </div>
                    <div className="like-count-container">
                        <div className="username-container">Liked by <span id='username'>{ username }</span> and</div> 
                        <div className="like_count">{ LikeCount }</div>
                        <div className="others">others</div>
                    </div>
                </div>

                {/* Caption of the post by the user */}
                <div className="feed__post-caption">
                    <div className="caption">
                        <div className="caption__username">{ username }</div>
                        <div className="user-caption">{ PostCaption }</div>
                    </div>
                </div>

                {/* to view all the comments section */}
                <div className="feed__view-comments">View all <span id='comment_count'>{ CommentCount }</span> comments</div>

                {/* to add the comment section by the user */}
                <div className="feed__add-comment">
                    <span className="textarea" role="textbox" contentEditable></span>
                    <div className="emoji_post-button">
                        <button id='comment-post-button'>Post</button>
                        <img src={ Emoji } alt="emoji" />
                    </div>
                </div>

                {/* line to indicate the end of one post and beginning of the next post */}
                <hr></hr>
            </div>
        </>
    )
}



const Feed = () => {
const [users, setUsers] = React.useState(userData);

return (
        <>
            <FeedStories NoPictureLogo={ NoPictureLogo } />
            {users.map(user => {
                return (
                    <HomeContents 
                    NoPictureLogo={ NoPictureLogo } username={ user.username } image= { user.img }
                    LikeCount={ user.likecount } PostCaption={ user.postcaption } CommentCount={ user.commentcount } 
                    />
                    )
                })}
        </>
    )
}

export default Feed