import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Rodrigo García Ávila</h2>
            <h4>me@gmail.com</h4>            
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewd you?</p>
                <p className='sidebar__statNumber'>2,124</p>
            </div>
            <div className="diebar__stat">
                 <p>Who viewd you?</p>
                <p className='sidebar__statNumber'>2,124</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar