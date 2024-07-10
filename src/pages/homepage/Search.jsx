import React from 'react';
import "./Search.css"; // 권혜민 추가
import nongsaro from "../../assets/nongsaro.png";
import agriedu from "../../assets/agriedu.svg";
import green from "../../assets/green.svg";
import government from "../../assets/government.png";

const Search = () => (
  <div className="circle-container">
    <div className="circle" onClick={() => window.open('https://www.nongsaro.go.kr/portal/portalMain.ps?menuId=PS00001', '_blank')}>
      <img src={nongsaro} alt="Nongsaro" className='nongsaro' />
    </div>
    <div className="circle" onClick={() => window.open('https://agriedu.net/', '_blank')}>
      <img src={agriedu} alt="Agriedu" />
    </div>
    <div className="circle" onClick={() => window.open('https://www.greendaero.go.kr/', '_blank')}>
      <img src={green} alt="Greendaero" />
    </div>
    <div className="circle" onClick={() => window.open('https://www.rda.go.kr/main/mainPage.do', '_blank')}>
      <img src={government} alt="Government" className="government" />
    </div>
  </div>
);

export default Search;
