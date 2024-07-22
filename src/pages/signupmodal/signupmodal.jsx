import React from 'react';
import './signupmodal.css';

const SignupModal = ({ isOpen, onClose, onAgreeChange }) => {
  if (!isOpen) return null;

  const handleAgreeChange = (event) => {
    onAgreeChange(event.target.checked);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <h2>개인정보 수집 및 이용에 대한 안내</h2>
          <div className="text-area" tabIndex="0">
            <p>NONGBU는 (이하 '자사'는) NONGBU 포털 업무와 관련하여, 신청인들의 개인정보를 중요시하며, 개인정보보호법을 준수하고 있습니다.</p>
            <table>
              <caption>&lt;수집 및 이용에 대한 동의&gt;</caption>
              <tbody>
                <tr>
                  <th>1. 수집.이용목적</th>
                  <td>회원가입 및 서비스 이용 시 본인의 확인 및 회원관리</td>
                </tr>
                <tr>
                  <th>2. 수집 항목</th>
                  <td>이름, 생년월일, 휴대전화, 주소(선택), 이메일(선택), 추가연락처(선택), 본인확인기관 등을 통한 개인정보확인</td>
                </tr>
                <tr>
                  <th>3. 보유.이용기간</th>
                  <td className="highlighted-text">수집.이용 동의일로부터 회원가입 탈퇴 시까지</td>
                </tr>
                <tr>
                  <th>4. 개인정보 수집 및 이용 동의거부 시 불이익내용</th>
                  <td>개인정보 수집.이용에 대한 동의를 거부할 수 있으며, 동의거부 시 회원관리 및 민원사무처리가 불가능하며 회원가입을 하실 수 없습니다.</td>
                </tr>
              </tbody>
            </table>
            <p>※ 기타 개인정보 처리에 관한 상세한 사항은 「개인정보보호법」을 참조하시기 바랍니다.</p>
          </div>
          <p className="checkbox-container">
            <input type="checkbox" onChange={handleAgreeChange} />
            <label>
              개인정보 수집 및 이용에 동의합니다.
              <em className="required-text">(필수)</em>
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
