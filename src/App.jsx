// src/App.jsx
import './App.css'; 
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/home';
import Login from './pages/loginpage/login';
import ListPage from './pages/listpage/listpage';
import ServicePage from './pages/servicepage/service';
import DetailPage from './pages/detailpage/detail';
import Signup from './pages/signuppage/signup';
import FaqPage from './pages/faqpage/faq';
import Logout from './pages/loginpage/logout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/land_list" element={<ListPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
