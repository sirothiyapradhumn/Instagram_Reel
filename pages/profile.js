import React from 'react'
import Profile from '../components/Profile'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { useRouter } from 'next/router'

function profile() {

  const {user} = useContext(AuthContext);

  const Redirect = () =>{
    const router = useRouter();
    router.push("/login");
  }
  
  return (
    //this component will only be visible when we are loged in, so a protect route will be wrapped
    <>
      {
        user?.uid? <Profile/> :<Redirect/>
      }
    </>
    
    
  )
}

export default profile