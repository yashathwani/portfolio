import './App.css';
import Header from './Header.js';
import Typing from './Typing.js';
import Home from './Home.js';
import SocialMedia from './SocialMedia.js';
function App() {
  return (
    <div className="App">
      <Header /> 
      <Home />
      {/* <Typing 
      text={[
        "Hello, I'm a web developer",
        "I'm a web developer",
        "I'm a backend developer",
      ]}
      typingSpeed={100}
      deletingSpeed={100}/>  */}
      <div className='socialmedia-fixed'>
      <SocialMedia/>
      </div>
    </div>
  );
}

export default App;
