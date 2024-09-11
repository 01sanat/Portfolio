
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


// pages
import Sanat from './pages/Sanat';
import Work from './pages/Work';
import ContactMe from './pages/ContactMe';
import Home from './pages/Home'


// components 

import NavbarComponent from './components/Navbar';


function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/sanat' element = { <Sanat/>} />
        <Route path='/work' element = { <Work/>} />
        <Route path='/contact' element = { <ContactMe/>} />
      </Routes>
    </Router>
  );
}

export default App;
