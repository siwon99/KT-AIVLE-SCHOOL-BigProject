import React from 'react';
import Navbar from '../navbar/navbar';
import FaqItem from './faqitem';
import "./faq.css";

// FAQ 데이터 배열
const faqData = [
  {
    id: 1,
    question: '고구마를 심고 싶은데 어느 정도 농지가 적당할까요?',
    answer: '안녕하세요. 고구마를 심기 위해서는 넓은 농지가 필요합니다. 보통 xx~yy 정도의 크기면 고구마를 심기 적당합니다.'
  },
  {
    id: 2,
    question: '농지 임대 절차는 어떻게 되나요?',
    answer: '농지 임대 절차는 간단합니다. 먼저 저희 서비스에 회원가입을 하시고, 임대하고자 하는 농지를 선택하신 후 신청서를 작성하시면 됩니다.'
  },
  {
    id: 3,
    question: '농지 임대 비용은 얼마나 되나요?',
    answer: '농지 임대 비용은 지역과 면적에 따라 다릅니다. 보통 1헥타르당 연간 xx원에서 yy원 사이입니다.'
  },
  {
    id: 4,
    question: 'AI 농지 탐지 시스템은 어떻게 작동하나요?',
    answer: 'AI 농지 탐지 시스템은 위성 이미지와 드론 촬영 데이터를 분석하여 사용되지 않는 농지를 탐지합니다. 이를 통해 효율적으로 농지를 관리할 수 있습니다.'
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
    answer: '농지 임대 후 중도 해약 시 위약금이 발생할 수 있습니다. 위약금은 계약서에 명시된 조건에 따라 다르며, 중도 해약 전에 반드시 확인하시기 바랍니다.'
  }
];

// FaqPage 컴포넌트 정의
const FaqPage = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="contents-wrapper">
        <main className="contents">
          <div className="title">FAQ</div>
          <div className="faq">
            <div className="list">
              {faqData.map((faq) => (
                <FaqItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FaqPage;
