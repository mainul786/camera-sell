import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from './../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);
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