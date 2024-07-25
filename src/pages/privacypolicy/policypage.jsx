import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar.jsx';
import "./policypage.css";

const PrivacyInfo = () => {
  return (
    <div className='policy-info'>
      <div className="policy-title">개인정보처리방침</div>
      <div className="intro">
        <p>
          NONGBU는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여,
          <br/>
          적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고,
          <br/>
          이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립 ‧ 공개합니다.
        </p>
      </div>

      <div className="privacy-title">개인정보의 처리 목적, 수집항목, 보유 및 이용기간</div>
      <div className="privacy">
        <p number="1">NONGBU는 대국민 서비스 제공 및 민원처리, 소관업무 수행 등의 목적으로 필요에 의한 최소한으로 개인정보를 수집하고 있습니다.</p>
        <p number="2">NONGBU에서 처리하는 개인정보는 수집·이용 목적으로 명시한 범위 내에서 처리하며, 「개인정보보호법」 및 관련 법령에 따라 등록·공개하는 
        <br/>
        개인정보파일의 처리목적·보유기간 및 항목은 각 개인정보파일의 특성에 따라 달리 규정하고 있습니다.
        </p>
        <p number="3">NONGBU에서 처리하는 개인정보 목적, 수집항목, 보유 및 이용기간을 다음과 같습니다.</p>
        <br/>
        <table border = "2" style={{borderCollapse: 'collapse', textAlign: 'center', width: '100%' }}>
          <th>담당부서</th>
          <th>파일명</th>
          <th>운영근거</th>
          <th>처리목적</th>
          <th width = "20%">처리·수집 항목</th>
          <th>보유기간</th>
          <tr>
            <td rowSpan={2}>정보화담당관</td>
            <td>[내부]직원소개</td>
            <td>정보주체 동의	</td>
            <td>서비스 사이트를 통한 직원 조회</td>
            <td>이름:필수</td>
            <td>전출 또는 퇴직 시까지
            </td>
          </tr>
          <tr>
            <td>회원 정보</td>
            <td>정보주체 동의	</td>
            <td>회원가입 및 관리</td>
            <td>이름:필수, 생년월일:필수, E-Mail 기타:필수( 중복가입확인정보(DI))</td>
            <td>탈퇴 시 까지
            </td>
          </tr>
        </table>        
        </div>

      <div className="privacy-title">개인정보의 제3자 제공</div>
      <div className="privacy">
        <p number="1">NONGBU는 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
        <p number="2">NONGBU는 원활한 서비스 제공을 위해 다음의 경우 정보주체의 동의를 얻어 필요 최소한의 범위로만 제공합니다.</p>
        <br/>
        <table border = "2" style={{borderCollapse: 'collapse', textAlign: 'center', width: '100%' }}>
          <th>개인정보파일명</th>
          <th>제공받는자</th>
          <th>제공근거</th>
          <th>제공목적</th>
          <th width = "20%">제공항목</th>
          <th>보유기간</th>
          <tr>
            <td>농지임대 신청현황</td>
            <td>농림축산 식품부</td>
            <td>농지법 시행령 제 76조</td>
            <td>농지원부 자료정비시 활용</td>
            <td>성명, 주민등록번호, 주소, 농지정보 등</td>
            <td>이용목적 달성 시</td>
          </tr>
        </table>
      
      </div>

      <div className="privacy-title">개인정보의 처리파기</div>
      <div className="privacy">
        <p number="1">NONGBU는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
        <p number="2">정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 
        해당 개인정보 (또는 개인정보파일)를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
        </p>
        <p number="3">개인정보 파기의 절차 및 방법은 다음과 같습니다.
        <br/><br/>
        ▶ 파기절차
        <br/>
        NONGBU는 파기하여야 하는 개인정보(또는 개인정보파일)에 대해 내부관리계획에 따라 파기합니다. 
        <br/>
        NONGBU는 파기 사유가 발생한 개인정보(또는 개인정보파일)를 선정하고, 개인정보 보호책임자의 승인을 받아 개인정보(또는 개인정보파일)를 파기합니다.
        <br/><br/>
        ▶파기방법
        <br/>
        NONGBU는 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
        <br/>         
        </p>
      </div>

      <div className="privacy-title">정보주체와 법정대리인의 권리·의무 및 행사방법</div>
      <div className="privacy">
        <p number="1">정보주체는 NONGBU에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
        <br/>
        ※ 만 14세 미만 아동에 관한 개인정보의 열람등 요구는 법정대리인이 직접 해야 하며, 만 14세 이상의 미성년자인 정보주체는 정보주체의 개인정보에 관하여
        미성년자 본인이 권리를 행사하거나 법정대리인을 통하여 권리를 행사할 수도 있습니다.
        </p>
        <p number="2">권리 행사는 NONGBU에 대해 「개인정보 보호법」 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, NONGBU는 이에 대해 지체없이 조치하겠습니다.</p>        
        <p number="3">권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p>
        <p number="4">개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.</p>
        <p number="5">개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</p>
        <p number="6">NONGBU는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</p>
      </div>

      <div className="privacy-title">개인정보 안전성 확보 조치</div>
      <div className="privacy">
        <p>NONGBU는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
        <br/>
        ▶ 관리적 조치 : 내부관리계획 수립·시행, 정기적 직원 교육
        <br/>
        ▶ 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
        <br/>
        ▶ 물리적 조치 : 전산실, 자료보관실 등의 접근통제  
        </p>   
      </div>

      <div className="privacy-title">개인정보보호 책임자</div>
      <div className="privacy">
        <p>NONGBU는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
        <br/>
        ▶ 시스템 담당자 전화번호: 042-000-0000
        <br/>
        ▶ 시스템 담당자 메일주소: aivle@korea.com
        </p>
      
      </div>

      <div className="privacy-title">개인정보 열람청구</div>
      <div className="privacy">
        <p>정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
        <br/>
        ▶ 정보화담당관 전화번호: 042-000-0001
        <br/>
        ▶ 정보화담당관 메일주소: aivle_info@korea.com
        </p>
      </div>

      <div className="privacy-title">권익침해 구제방법</div>
      <div className="privacy">
        <p number="1">개인정보주체는 개인정보침해로 인한 피해를 구제 받기 위하여 개인정보 분쟁조정위원회, 한국인터넷진흥원 개인정보 침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
        <br/>
        ▶ 개인정보 분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)
        <br/>
        ▶ 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)
        <br/>
        ▶ 대검찰청: (국번없이) 02-3480-3570 (www.spo.go.kr)
        <br/>
        ▶ 경찰청: (국번없이) 182 (ecrm.cyber.go.kr)
        <br/>
        </p>
        <p number="2">「개인정보 보호법」 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
        <br/>
        ▶ ※ 중앙행정심판위원회 : (국번없이) 110(center.simpan.go.kr)
        </p>
      </div>

    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="page">
      <Navbar />
      <main className="policy-contents">
        <PrivacyInfo />
      </main>
    </div>
  );
};

export default PrivacyPolicy;