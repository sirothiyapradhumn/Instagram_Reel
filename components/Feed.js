import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Feed() {
  return (
    <div className='feed-container'>
        <Navbar/>
        <Upload/>
        <div className='videos-container'>
            <div className='post-container'>
                <video />
                <div className='video-info'>
                    <div className='avatar-container'>
                    <Avatar alt="Semy Sharp" src="/static/images/avatar/2.jpg" sx={{margin:'0.5rem'}}/>
                    <p>Sahil</p>
                    </div>
                    <div className='post-like'>
                        <FavoriteIcon/>
                        <p>10</p>
                    </div>
                </div>
            </div>

            <div className='post-container'>
                <video />
            </div>

            <div className='post-container'>
                <video />
            </div>

            <div className='post-container'>
                <video />
            </div>
        </div>
    </div>
  )
}

export default Feed