import React from 'react'
import './MessageSender.css'
import {Avatar} from "@material-ui/core"
import VideoCamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"

function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input classsName="messageSender__input" placeholder={`What's on your mind..`} />
                    <input placeholder="image URL (optional)" />
                    <button onClick={handleSubmit} type = "submit">
                        Hidden                
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCamIcon style={{color: "red"}} />
                    <h3>Go Live</h3>
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
