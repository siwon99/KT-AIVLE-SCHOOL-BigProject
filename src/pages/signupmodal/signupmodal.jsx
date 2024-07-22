import React from 'react';
import './signupmodal.css';

const SignupModal = ({ isOpen, onClose, onAgreeChange }) => {
  if (!isOpen) return null;

  const handleAgreeChange = (event) => {
    onAgreeChange(event.target.checked); // 체크박스 상태를 부모 컴포넌트로 전달
    onClose(); // 모달 닫기
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>개인정보 수집 및 이용에 대한 안내</h2>
        <div class="textArea" tabindex="0">
				<p>NOGBU는 (이하 '자사'는) NOGBU 포털 업무와 관련하여, 신청인들의 개인정보를 중요시하며, 개인정보보호법을 준수하고 있습니다.</p>
				<table>
					<caption>&lt;수집 및 이용에 대한 동의&gt;</caption>
					<tbody>
					<tr>
						<th>1. 수집.이용목적</th>
						<td>회원가입 및 서비스 이용 시 본인의 확인 및 회원관리</td>
					</tr>
					<tr>
						<th>2. 수 집 항 목</th>
						<td>이름, 생년월일, 휴대전화, 주소(선택), 이메일(선택), 추가연락처(선택), 본인확인기관 등을 통한 개인정보확인</td>
					</tr>
					<tr>
						<th>3. 보유.이용기간</th>
						<td class="pointCell">수집.이용 동의일로부터 회원가입 탈퇴 시까지</td>
					</tr>
					<tr>
						<th>4. 개인정보 수집 및 이용 동의거부 시 불이익내용</th>
						<td>개인정보 수집.이용에 대한 동의를 거부할 수 있으며, 동의거부 시 회원관리 및 민원사무처리가 불가능하며 회원가입을 하실 수 없습니다.</td>
					</tr>
					</tbody>
				</table>
				<p>※ 기타 개인정보 처리에 관한 상세한 사항은 「개인정보보호법」을 참조하시기 바랍니다. </p>
			</div>
            <p class="checkBox">
                <input type="checkbox" onChange={handleAgreeChange} />
                <label>
                    개인정보 수집 및 이용에 동의합니다. 
                    <em class="required">(필수)</em>
                </label>
            </p>
      </div>
    </div>
  );
};

export default SignupModal;