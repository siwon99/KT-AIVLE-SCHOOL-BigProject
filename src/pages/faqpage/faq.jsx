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
  // 추가적인 FAQ 데이터 여기에 추가
];

// FaqPage 컴포넌트 정의
const FaqPage = () => {
  return (
    <div className="page">
      <Navbar />
      <main className="contents">
        <div className="title">FAQ</div>
        
        <div className="list">
          {faqData.map((faq) => (
            <FaqItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default FaqPage;
