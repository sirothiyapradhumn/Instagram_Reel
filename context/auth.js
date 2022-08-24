import React, { useEffect, useState } from 'react'
import {auth} from '../firebase'
export const AuthContext = React.createContext();
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

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
    //goes to firebase check if function called legit // email pass check with users table in authentication service // if present success, else fail
      return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
      return signOut(auth);
    }

    function forgetPassword(email){
      return sendPasswordResetEmail(auth, email);
    }

    function signup(email, password){
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const store = {
        login,
        user,
        logout,
        forgetPassword,
        signup
    }

  return (
    <AuthContext.Provider value={store}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper