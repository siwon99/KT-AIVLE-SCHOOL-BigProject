import './App.css'; 
import React from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/home';
import Login from './pages/loginpage/login';
import ListPage from './pages/listpage/listpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
