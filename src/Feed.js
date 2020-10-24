import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post />
        </div>
    )
}

export default Feed
