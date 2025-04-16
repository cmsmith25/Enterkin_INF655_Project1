import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext";


export default function Header() {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signin");
        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    return (
        <div className="header">
            <h1>Welcome To Your Task Manager</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    {!user ? (
                    <li>
                        <Link to="/signin">Sign In</Link></li>
                    ) : (
                        <li>
                            <button onClick={handleLogout}>Sign Out</button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}
