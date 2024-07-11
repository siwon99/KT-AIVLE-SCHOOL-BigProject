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
import Map from './pages/map/map'
import TeamInfo from './pages/servicepage/teamInfo';
import ListAll from './pages/listpage/listall';
import Iblist from './pages/listpage/iblist';
import IbDetailPage from './pages/ibdetailpage/ibdetailpage'

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(true);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listall" element={<ListAll />} />
        <Route path="/land_list" element={<ListPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/detail/:farm_id" element={<DetailPage />} />
        <Route path="/iblist" element={<Iblist />} />
        <Route path="/ibdetail/:farm_id" element={<IbDetailPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/map" element={<Map />} />
        <Route path="/teaminfo" element={<TeamInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
