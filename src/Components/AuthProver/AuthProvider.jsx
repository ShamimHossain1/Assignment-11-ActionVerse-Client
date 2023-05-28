import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from'../../Firebase/Firebase';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading]=useState(true)

   
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = (email)=>{
        setLoading(true);
       return sendPasswordResetEmail(auth, email)
    }

    const googleAuthProvider = new GoogleAuthProvider()
    
    const signInWithGoogle =()=>{
        
       
        return signInWithPopup(auth, googleAuthProvider);
       
    }

    const githubAuthProvider = new GithubAuthProvider()
    const signInWithGitHub =()=>{
        
        return signInWithPopup(auth, githubAuthProvider);
       
    }

    const logOut = () => {
        // console.log('hello')
        return signOut(auth);
    }

    // observer user auth state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        // stop observing while unmounting
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        resetPassword,
        signInWithGoogle,
        signInWithGitHub 
    }
    return (

        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;