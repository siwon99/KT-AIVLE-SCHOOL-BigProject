import './App.css';
import React, { useEffect, useState, lazy, Suspense } from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy loading을 위해 동적으로 import
const Home = lazy(() => import('./pages/homepage/home'));

//로그인 및 회원가입
const Login = lazy(() => import('./pages/loginpage/login'));
const Logout = lazy(() => import('./pages/loginpage/logout'));
const Signup = lazy(() => import('./pages/signuppage/signup'));

//리스트 페이지
const ListAll = lazy(() => import('./pages/listpage/listall'));
const ListPage = lazy(() => import('./pages/listpage/listpage'));
const ListAdmin = lazy(() => import('./pages/listpage/listpage_admin'));

//상세정보 및 불법건축물 리스트
const DetailAdmin = lazy(() => import('./pages/detailpage/detail_admin'));
const DetailPage = lazy(() => import('./pages/detailpage/detail'));
const Iblist = lazy(() => import('./pages/listpage/iblist'));
const IbDetailPage = lazy(() => import('./pages/ibdetailpage/ibdetailpage'));

//외 페이지
const TeamInfo = lazy(() => import('./pages/servicepage/teamInfo'));
const ServicePage = lazy(() => import('./pages/servicepage/service'));
const FaqPage = lazy(() => import('./pages/faqpage/faq'));
const Map = lazy(() => import('./pages/map/map'));
const Notfound = lazy(() => import('./pages/notfoundpage/notfound'));
const Session = lazy(() => import('./pages/session/session'));
const Nomap = lazy(() => import('./pages/map/nomap'));

//마이페이지
const MyPage = lazy(() => import('./pages/mypage/mypage'));
const AdminMyPage = lazy(() => import('./pages/mypage/adminmypage'));
const UserMyPage = lazy(() => import('./pages/mypage/usermypage'));
const PrivacyPolicy = lazy(() => import('./pages/privacypolicy/policypage'));

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/listall" element={<ListAll />} />
          <Route path="/land_list" element={<ListPage />} />
          <Route path="/listadmin" element={<ListAdmin/>} />

          <Route path="/detailadmin/:farm_id" element={<DetailAdmin />}/>
          <Route path="/detail/:farm_id" element={<DetailPage />} />
          <Route path="/iblist" element={<Iblist />} />
          <Route path="/ibdetail/:farm_id" element={<IbDetailPage />} />

          <Route path="/teaminfo" element={<TeamInfo />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/session" element={<Session />}/>
          <Route path="/nomap" element={<Nomap />}/>

          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/admin" element={<AdminMyPage />} />
          <Route path="/mypage/user" element={<UserMyPage />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;