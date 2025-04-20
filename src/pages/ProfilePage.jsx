import React, { useState, useEffect } from 'react';
import FormHeader from '../components/shared/FormHeader';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { auth } from "../firebase";
import { UserAuth } from "../components/context/AuthContext";


export default function ProfilePage() {
    const { user, updateUser } = UserAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

useEffect(() => {
    if (user) {
        setName(user.displayName || "");
        setEmail(user.email || "");
    }
}, [user]);

const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(name, email);
    } catch (err) {
        console.log(err);
    }
};
        

    return (
        <div className= "loginForm">
            
            <FormHeader title="Edit Profile" />
            <div className="imageContainer">
                <img className="img" src="/images/tiger.png" alt="Profile photo" />
                </div>
                <form onSubmit={onSubmit}>
                    <FormInput
                        description="Name"
                        type="text"
                        className="nameInput"
                        placeholder="Enter Your Full Name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormInput
                        description="Email"
                        type="email"
                        className="emailInput"
                        placeholder="Enter Your Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormButton title="Edit Profile" />
                    
                </form>    
        </div>
    );
}