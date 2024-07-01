import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar'; 
import { TeamInfo, TeamMessage } from './teamInfo';
import "./service.css"

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <TeamInfo />
      <TeamMessage />
    </>
  );
};

export default ServicePage;
