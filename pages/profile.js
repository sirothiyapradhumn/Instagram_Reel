import React from 'react'
import Profile from '../components/Profile';
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

function profile() {
  // const { user } = useContext(AuthContext);
  // console.log(user.uid);  

  // const Redirect = () => {
  //   const router = useRouter();
  //   router.push("/profile");
  // };

    return (
      //this component will only be visible when we are logged in , so a protect route will be wrapped
      <>
        {/* {
          user?.uid? <Profile/> :<Redirect/>
        } */}
        <Profile/>
      </>
   
  )
}

export default profile