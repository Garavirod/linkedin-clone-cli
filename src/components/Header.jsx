import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';
import "./Header.css"
import HeaderOptions from './HeaderOptions';
export default function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1655678276~hmac=c635a56c5bd0e05d7ed748990a08514b" alt="" />                
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messaging"/>                
                <HeaderOptions Icon={CircleNotificationsIcon} title="Notifications"/>
                <HeaderOptions avatar="https://media-exp1.licdn.com/dms/image/C5603AQE7irhfgX20_A/profile-displayphoto-shrink_800_800/0/1615571349635?e=1661385600&v=beta&t=Wc6v4lv04fCQEbPP9mRPv4wkUV1nbsoP2Zcs-yBloa0" title="Me"/>
            </div>
        </div>
    )
}
