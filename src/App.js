import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import SocialMedia from './SocialMedia.js';
import About from './About.js';
import React, { useEffect } from 'react';
import Timeline from './Timeline.js';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const app=document.querySelector('.App');
      const header = document.querySelector('.header');
      if (!app ) return;

      const appposition = app.getBoundingClientRect().top;
    

      if (appposition < 0) {
        header.style.backgroundColor = 'rgb(32, 34, 52)';
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        
      } else {
        header.style.backgroundColor = 'rgb(32, 34, 52)';
        header.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <div className='socialmedia-fixed'>
        <SocialMedia />
      </div>
      <About />
      <Timeline/>
    </div>
  );
}

export default App;
