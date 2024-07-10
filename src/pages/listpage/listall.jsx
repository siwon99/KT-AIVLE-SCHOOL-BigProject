import React, { useEffect } from 'react';
import Navbar from '../navbar/navbar.jsx';
import './listpage.css';

const FARM_IMAGE = '/src/assets/농지.gif';
const BUILDING_IMAGE = '/src/assets/빌딩.gif';

const ListAll = () => {
  useEffect(() => {
    const preloadImages = [FARM_IMAGE, BUILDING_IMAGE];
    preloadImages.forEach(image => {
      new Image().src = image;
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="list-container">
        <div className='listbox_farm' style={{ backgroundImage: `url(${FARM_IMAGE})` }}>
            <a href="/land_list">농지 리스트</a>
        </div>

        <div className='listbox_building' style={{ backgroundImage: `url(${BUILDING_IMAGE})` }}>
            <a href="/buildingpage">불법 건축물 리스트</a>
        </div>
      </div>
    </>
  );
};

export default ListAll;