import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Explore from './components/Explore';
import Signup from './components/Signup';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
 
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/explore' element={<Explore />} />
        <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn} />} />
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
