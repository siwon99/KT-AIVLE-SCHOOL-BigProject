import React from 'react';
import Navbar from '../navbar/navbar';
import FaqItem from './faqitem';
import "./faq.css";

// FAQ 데이터 배열
const faqData = [
  {
    id: 1,
    question: '농지를 구매하지 않고 임대를 해도 괜찮을까요?',
    answer: '원칙적으로 농지임대차는 금지되어 있으나, 농지법상 예외적으로 임대를 허용하고 있습니다. 따라서 농지법상 임대가 허용된 농지를 임차하여 농사를 지을 수 있습니다.'
  },
  {
    id: 2,
    question: '농지 임대 절차는 어떻게 되나요?',
    answer: '농지 임대 절차는 간단합니다. 먼저 저희 서비스에 회원가입을 하시고, 임대하고자 하는 농지를 선택하신 후 신청서를 작성하시면 됩니다.'
  },
  {
    id: 3,
    question: '귀농귀촌교육을 받을 수 있는 곳이 있을까요?',
    answer: '귀농교육은 온/오프라인으로 수강이 가능합니다. 온라인교육은 농업교육포털(http://agriedu.net)과 농촌진흥청 농촌인적자원개발센터(http://hrd.rda.go.kr)에서 수강하실 수 있습니다.<br />오프라인교육은 농림축산식품부, 농촌진흥청, 산림청 및 지자체가 주관 또는 위탁하는 교육과정으로, 농업교육포털에 등록되어 수료증이 발급되는 경우만 인정됩니다.<br />특히 온라인 교육은 전체 수료시간의 50%만 인정이 되며, 최대 40시간 까지만 인정이 됩니다.'
  },
  {
    id: 4,
    question: '농지 임대 시 고려해야 할 사항은 무엇인가요?',
    answer: '농지 임대 시에는 토양 상태, 접근성, 물 공급, 주변 인프라 등을 고려해야 합니다. 이러한 요소들이 농작물 재배에 중요한 영향을 미칩니다.'
  },
  {
    id: 5,
    question: '농지 임대 시 계약 기간은 어떻게 되나요?',
    answer: '농지 임대 계약 기간은 최소 1년부터 최대 5년까지 가능합니다. 계약 기간은 임차인과 협의하여 조정할 수 있습니다.'
  },
  {
    id: 6,
    question: '농지 임대 후 농작물 재배 지원은 어떻게 받나요?',
    answer: '농지 임대 후에는 저희 서비스에서 제공하는 농작물 재배 지원 프로그램을 통해 다양한 도움을 받을 수 있습니다. 종자, 비료, 농기계 대여 등 다양한 지원을 제공합니다.'
  },
  {
    id: 7,
    question: '농지 임대 후 관리 비용은 어떻게 되나요?',
    answer: '농지 임대 후 관리 비용은 임차인이 부담해야 합니다. 관리 비용에는 농작물 재배에 필요한 모든 비용이 포함됩니다.'
  },
  {
    id: 8,
    question: '농지 임대 후 중도 해약 시 위약금이 있나요?',
    answer: '농지 임대 후 중도 해약 시 위약금이 발생할 수 있습니다.<br />위약금은 계약서에 명시된 조건에 따라 다르며, 중도 해약 전에 반드시 확인하시기 바랍니다.'
  }
];

// FaqPage 컴포넌트 정의
const FaqPage = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="faqpage">
        <main className="faq-container">
          <div className="faq-title">FAQ</div>
          <div className="list">
              {faqData.map((faq) => (
                <FaqItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
        </main>
      </div>
    </div>
  );
};

export default FaqPage;
