import React, { useState } from 'react';
import WupArrow from "/assets/WupArrow.svg";
import WdownArrow from "/assets/WdownArrow.svg";
import PropTypes from 'prop-types';

// FaqItem 컴포넌트 정의
const FaqItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 답변을 열고 닫는 함수 정의
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="item">
      <div className="question" onClick={toggleAnswer}>
        <span className="number">No.{id}</span>
        <span className="text">[문의]&nbsp;&nbsp;{question}</span>
        <button className="button">
          <img src={isOpen ? WupArrow : WdownArrow} alt="toggle arrow" />
        </button>
      </div>
      {isOpen && (
        <div className="answer">
          <span className="answerfaq">[답변]&nbsp;&nbsp;</span>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

FaqItem.propTypes = {
  id: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string
};

export default FaqItem;
