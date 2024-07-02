import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar'; 
import { TeamInfo, ServiceIntro, TeamIntro } from './teamInfo';
import "./service.css"

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <main className="contents">
        <TeamInfo />
        <TeamIntro />
        <ServiceIntro />
      </main>
    </>
  );
};

export default ServicePage;
