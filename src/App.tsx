import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar';
import Home from './pages/Homepage/Home';
import About from './pages/About/About';
import Categories from './pages/Categories/Categories';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
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
      {/*<Route path/>*/}
    </Router>
  );
};

export default App;
