import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar'; 
import { TeamInfo, ServiceIntro, TeamIntro } from './teamInfo';
import "./service.css"

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <TeamInfo />
      <TeamIntro />
      <ServiceIntro />
    </>
  );
};

export default ServicePage;
