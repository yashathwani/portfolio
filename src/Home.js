import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import './Home.css';
import Typing from './Typing.js';
import profilepic from './images/profilepic2-removebg-preview.png';
function Home() {
  return (
    <div className='main-div'>
        <div className='left-side'>
            <p>TAKE A LOOK INTO MY JOURNEY</p>
            <h1>Hi, I'm Yash</h1>
            <Typing
            text={[
                    "Passionate Coder",
                    "Web Developer",
                    "Backend Developer",
                ]}
            typingSpeed={100}
            deletingSpeed={100}/> 
        <div className='resumeandcontact'>
            <a href='' className='resume'>Resume</a>
            <a href='' className='contact'> <FontAwesomeIcon icon={faUser} /></a>
        </div> 
        </div>
        <img src={profilepic} alt='' className='profile-pic'/> 
        
    </div>
  );

}
export default Home;
