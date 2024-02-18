import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from './../../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
const createUser = (email, password) =>{
    setLoading(true)
return createUserWithEmailAndPassword(auth, email, password)
}

const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

const updateProfile = () =>{
    
}

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
    })
    return () => unsubscribe();
}, [])

    const authInfo ={
        createUser,
        loginUser,
        signInWithGoogle,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;