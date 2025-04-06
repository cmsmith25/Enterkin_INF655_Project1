import React, { useState, createContext, useContext } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
const [user, setUser] = useState({});

    const createUser = (email, password) => {
         return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth)
    };
    
    
    return (
        <UserContext.Provider 
            value= {{ createUser, signIn, logout, user }}>
                {children}

        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};

