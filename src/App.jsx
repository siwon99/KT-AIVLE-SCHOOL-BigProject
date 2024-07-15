import './App.css';
import React, { useEffect, useState, lazy, Suspense } from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy loading을 위해 동적으로 import
const Home = lazy(() => import('./pages/homepage/home'));
const Login = lazy(() => import('./pages/loginpage/login'));
const ListPage = lazy(() => import('./pages/listpage/listpage'));
const ServicePage = lazy(() => import('./pages/servicepage/service'));
const DetailPage = lazy(() => import('./pages/detailpage/detail'));
const Signup = lazy(() => import('./pages/signuppage/signup'));
const FaqPage = lazy(() => import('./pages/faqpage/faq'));
const Logout = lazy(() => import('./pages/loginpage/logout'));
const Map = lazy(() => import('./pages/map/map'));
const TeamInfo = lazy(() => import('./pages/servicepage/teamInfo'));
const ListAll = lazy(() => import('./pages/listpage/listall'));
const Iblist = lazy(() => import('./pages/listpage/iblist'));
const IbDetailPage = lazy(() => import('./pages/ibdetailpage/ibdetailpage'));

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(true);
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;