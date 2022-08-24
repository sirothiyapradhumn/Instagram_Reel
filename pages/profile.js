import React from 'react'
import Profile from '../components/Profile'

function profile() {
  return (
    //this component will only be visible when we are loged in, so a protect route will be wrapped
    <Profile/>
  )
}

export default profile