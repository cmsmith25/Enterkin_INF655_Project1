import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {
    return(
    <>
        <div className="header">
            <h1>Welcome To Your Task Manager</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
    );
}
