import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'


export default function Footer() {
    return(
        <div className="footer">
            <h1>Get Connected with our network</h1>
            <div>
                <FaFacebook size={30} />
                <FaGithub size={30} />
                <FaLinkedin size={30} />
            </div>
        </div>
    );
}