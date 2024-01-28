import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user//
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login User//
    const logInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Logout User//
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    //Google Login//
    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const userInfo = {
        user, 
        setUser,
        loading, 
        setLoading,
        createUser,
        logInUser,
        logOut,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;