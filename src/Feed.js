import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from "./Post"
import db from './firebase'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic=""
                message="Okay"
                timestamp="to ka"
                username="helmart"
                image="https://images.financialexpress.com/2017/11/modthumbs.png"
            />
            <Post 
                profilePic=""
                message="Okay"
                timestamp="to ka"
                username="helmart"
                />
        </div>
    )
}

export default Feed
