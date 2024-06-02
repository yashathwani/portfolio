import React, { useEffect } from 'react';
import './About.css';
import image from './images/20231020_152633-removebg-preview.png';

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.About');
      const aboutText = document.querySelector('.Aboutp');
      const hiTherePic = document.querySelector('.hitherepic');
      const aboutMe=document.querySelector('.AboutMe');
      if (!aboutSection || !aboutText || !hiTherePic) return;
      const aboutPosition = aboutSection.getBoundingClientRect().top;
      const screenPosition1 = window.innerHeight / 1.3;
      const screenPosition2 = window.innerHeight / 1.9;

      if (aboutPosition < screenPosition1) {
        
        aboutMe.classList.add('visible');
        
      }
      else {
        aboutMe.classList.remove('visible');
        
      }
        if (aboutPosition < screenPosition2) {
            
            hiTherePic.classList.add('visible');
        }
        else {
           
            hiTherePic.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='About'>
      <div className='AboutMe'>
        <h2>About Me</h2>
        <p className='Aboutp'>Become a world's no 1 full-stack web developer. That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.</p>
        <div className='Aboutmeline'></div>
      </div> 
      <div className='hitherepic'>
        <img src={image} alt='Profile' className='pic2'/>
        <div className='hithereblock'>
          <h3 className='hithere'>Hi There</h3>
          <p style={{ marginBottom: '2%' }}>I'm Yash, a freshman at Scaler School of Technology with a big dream to become the world's number one full-stack web developer and catch the attention of top tech companies.
            I'm currently honing my skills in web development and am eager to learn and grow in this field.</p>
          <p style={{ marginBottom: '2%' }}> Although I don't have professional experience yet, I have a solid foundation in front-end development and am proficient in various technologies. I stay updated with the latest web development trends and best practices.
            During my time at Scaler School of Technology, I've been working on personal projects and assignments, focusing on building a strong understanding of front-end development.</p>
          <p> I am highly motivated, results-oriented, and always eager to learn new things.
            My goal is to become a full-stack developer, specializing in mastering the backend. I thrive on challenges and am constantly seeking ways to improve. I am confident that with dedication and hard work, I can make a significant contribution to your team and build projects with the latest technologies.</p>
        </div>        
      </div>
    </section>
  );
}

export default About;
