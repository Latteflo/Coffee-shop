import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar';
import Home from './pages/Homepage/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
