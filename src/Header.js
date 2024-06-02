import './Header.css';
import React, { useEffect } from 'react';
import logo from './images/Screenshot_2024-05-30_041036-removebg-preview.png'; 
function Header() {
let lastScrollTop = 0;
useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (!header) return;
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        header.style.top = '-12vh';
      } else {
        header.style.top = '0';
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

}, []);
  return (
    <header className="header">
      <img  src={logo} alt="" className='logo' />
      <nav>
        <ul className="navbar">
          <li  className='navbar-component'><a href=''>Home</a></li>
          <li  className='navbar-component'><a href=''>About</a></li>
          <li  className='navbar-component'><a href=''>Skills</a></li>
          <li className='navbar-component'><a href=''>Services</a></li>
          <li className='navbar-component'><a href=''>Achievements</a></li>
          <li className='navbar-component'><a href=''>Contact</a></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
