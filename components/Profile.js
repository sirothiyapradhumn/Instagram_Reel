import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import userlogo from '../assets/avatar.jpg'

function Profile() {
  return (
    <div>
        <Navbar/>
        <div>
            <div className='profile-intro'>
                <div style={{height:"8rem", width:'8rem', borderRadius:"50%"}}>
                    <Image src={userlogo} />
                </div>

                <div>
                    <h1>Sahil</h1>
                    <h1>Post:12</h1>
                </div>
                
            </div>

            <div className='profile-post'></div>
        </div>
    </div>
  )
}

export default Profile