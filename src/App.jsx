import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Navbar from './components/Navbar/Navbar'; 
import Blogs from './Pages/Blogs/Blogs';
import BlogsDetails from './components/BlogsDetails/BlogsDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
