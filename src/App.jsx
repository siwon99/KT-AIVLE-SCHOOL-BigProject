import './App.css'; 
import React from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/home';
import Login from './pages/loginpage/login';
import ListPage from './pages/listpage/listpage';
import DetailPage from './pages/detailpage/detail'; // 서비스 소개 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/land_list" element={<ListPage />} />
        <Route path="/service" element={<DetailPage />} /> {/* 서비스 소개 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
