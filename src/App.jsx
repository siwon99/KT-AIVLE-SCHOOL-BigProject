import './App.css'; 
import React from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/home';
import Login from './pages/loginpage/login';
import ListPage from './pages/listpage/listpage';
import ServicePage from './pages/servicepage/service'; // ServicePage 컴포넌트 임포트

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/land_list" element={<ListPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
