import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar.jsx';
import './listall.css';
import { getUser } from '../../service/apiService.js';

const FARM_IMAGE = '/assets/농지.gif';
const BUILDING_IMAGE = '/assets/빌딩.gif';

const ListAll = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isadmin, setIsadmin] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const preloadImages = [FARM_IMAGE, BUILDING_IMAGE];
    preloadImages.forEach(image => {
      new Image().src = image;
    });
    
    if (token) {
      getUser(token)
      .then(data => {
        console.log('data:', data);
        if (data.is_staff) {
          setIsadmin(true);
        }
        setLoading(false);
      })
      .catch(error => {
        navigate('/notfound');
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (loading) {
    return <> <Navbar /> </>
  }

  return (
    <>
      <Navbar />
      <div className="list-container">
        <div className="listbox">
          <div className='listbox_farm' style={{ backgroundImage: `url(${FARM_IMAGE})` }}>
            {isadmin ? (
              <a href="/listadmin">농지 리스트(공무원)</a>
            ) : (
              <a href="/land_list">농지 리스트</a>
            )}
          </div>
          <div className='listbox_building' style={{ backgroundImage: `url(${BUILDING_IMAGE})` }}>
            <a href="/iblist">불법 건축물 리스트</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAll;