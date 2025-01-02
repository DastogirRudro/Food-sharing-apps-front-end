import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.init';
export const AuthContext = createContext()
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';
const auth = getAuth(app)
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(loading, user)
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        // setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const provider = new GoogleAuthProvider
    const handleGoogleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const AuthInfo = {
        user,
        loading,
        setUser,
        logOut,
        userLogin,
        createNewUser,
        updateUser,
        handleGoogleSign
    }
  
    
    useEffect(() => {
        const unscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                const { data } = await axios.post('https://apps-server-part.vercel.app/jwt',{
                 email:currentUser?.email,
                },{withCredentials: true})
              console.log(data)
            }else{
              setUser(currentUser)
              const { data } = await axios.get('https://apps-server-part.vercel.app/logout',
              {withCredentials: true})
             console.log(data)
            }
            setLoading(false)
        })
         
        return () => {
            unscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;