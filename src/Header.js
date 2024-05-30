import './Header.css';
import logo from './images/Screenshot_2024-05-30_041036-removebg-preview.png'; 
function Header() {
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
