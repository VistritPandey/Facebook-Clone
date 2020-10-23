import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from "@material-ui/icons/Flag"
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined"
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined"
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"
import {Avatar, IconButton} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="data:image/png;base64,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" alt=""/>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__options">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Hello user</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
