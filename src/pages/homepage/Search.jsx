import React from 'react';
import "./Search.css"; // 권혜민 추가
import Nongsaro from "../../../public/assets/nongsaro.jpg";
import Agriedu from "../../../public/assets/agriedu.svg";
import Green from "../../../public/assets/green.svg";
import Government from "../../../public/assets/government.jpg";

const Search = () => (
  <div className="circle-container">
    <div className="circle" onClick={() => window.open('https://www.nongsaro.go.kr/portal/portalMain.ps?menuId=PS00001', '_blank')}>
      <img src={Nongsaro} alt="Nongsaro" className='nongsaro' />
    </div>
    <div className="circle" onClick={() => window.open('https://agriedu.net/', '_blank')}>
      <img src={Agriedu} alt="Agriedu" />
    </div>
    <div className="circle" onClick={() => window.open('https://www.greendaero.go.kr/', '_blank')}>
      <img src={Green} alt="Greendaero" />
    </div>
    <div className="circle" onClick={() => window.open('https://www.rda.go.kr/main/mainPage.do', '_blank')}>
      <img src={Government} alt="Government" className="government" />
    </div>
  </div>
);

export default Search;
