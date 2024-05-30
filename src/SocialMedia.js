import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialMedia.css';
function SocialMedia() {
    return (
        <div className='socialmedia'>
            <ul>
                <li><a href=''className='socialmediaicon'><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                <li><a href=''className='socialmediaicon'><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href=''className='socialmediaicon'><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href=''className='socialmediaicon'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href=''className='socialmediaicon'><FontAwesomeIcon icon={faEnvelope} /></a></li>      
            </ul>
            <div className='line'></div>
        </div>
    );
}

export default SocialMedia;
