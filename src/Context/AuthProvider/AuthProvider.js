import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from './../../firebase/firebase.config';
import {getAuth, onAuthStateChanged} from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

useEffect(()=>{
    onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
    })
}, [])

    const authInfo ={
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;