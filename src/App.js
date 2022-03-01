import './App.css';
import Logo from "./assets/svg/logo.svg"
import Keyboard from './components/Keyboard/Keyboard';
import Display from './components/display/display';

function App() {
  return (
    <div className="App">
      
      <img src={Logo}></img>
      <div className='container'>
        <Keyboard />
        <Display />
      </div>

    </div>
  );
}

export default App;
