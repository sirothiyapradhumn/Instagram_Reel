import React, { useEffect, useState } from 'react'
import {auth} from '../firebase'
export const AuthContext = React.createContext();
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";

function AuthWrapper({children}) {
    console.log("hello u are in auth wrapper");

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
      onAuthStateChanged(auth, (user)=>{
        console.log("onAuthStatechanged called");
        setUser(user);
      })
      setLoading(false);
    }, [])


    // feature created
    function login(email,password){
      return signInWithEmailAndPassword(auth, email, password);
      //goes to firebase check if function called legit
      // email pass check with users table in authentication service
      // if present success, else fail
    }

    function logout(){
      return signOut(auth);
    }

    function forgetPassword(email){
      return sendPasswordResetEmail(auth, email);
    }

    const store = {
        login,
        user,
        logout,
        forgetPassword
    }

  return (
    <AuthContext.Provider value={store}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper