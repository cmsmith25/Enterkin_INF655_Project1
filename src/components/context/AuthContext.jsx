import React, { createContext, useContext, useState, useEffect, } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
         return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("onAuthStateChanged fired. Current user:", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    
    
    return (
        <UserContext.Provider 
            value= {{ createUser, signIn, logout, user, loading }}>
                {children}

        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};

