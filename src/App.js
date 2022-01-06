import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/navbar';
import Main from './Components/Main/main';
import Projects from './Components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="main-container">
      <div><Navbar/></div>
       <Main />
       <Projects />
    </div>
  );
}

export default App;
