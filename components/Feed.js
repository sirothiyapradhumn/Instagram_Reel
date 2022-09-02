import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Upload from './Upload'
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AuthContext } from '../context/auth';
import { doc, onSnapshot } from "firebase/firestore";
import {db} from '../firebase'

function Feed() {

  const {user} = useContext(AuthContext)
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    console.log(user.uid)
    //read the user info from db
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
        console.log("Current data: ", doc.data());
        setUserData(doc.data());
    }); 
    return ()=>{unsub()};
  },[user])

  return (
    <div className='feed-container'>
        <Navbar userData={userData}/>
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