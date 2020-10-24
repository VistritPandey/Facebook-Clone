import React from 'react'
import './Story.css'
import {Avatar} from "@material-ui/core"

function story({image, profileSrc, title}) {
    return (
        <div className="story">
            <Avatar src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default story
