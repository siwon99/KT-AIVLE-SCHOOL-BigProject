import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./ChatBot.css";

const ChatBot = ({ closeModal }) => {
  // 입력된 메시지 상태 관리
  const [input, setInput] = useState('');
  // 메시지 목록 상태 관리
  const [messages, setMessages] = useState([
    { text: "안녕하세요! 무엇을 도와드릴까요?", sender: "bot" }
  ]);

  // 메시지 전송
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages(prevMessages => [...prevMessages, { text: input, sender: "user" }]);
      setInput('');
    }
  };

  // Enter 키 누르면 메시지 전송
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="background">
      <div className="modal-container">
        {/* 모달 닫기 버튼 */}
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>ChatBot</h2>
        {/* 메시지 목록 */}
        <div className="message-list">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        {/* 메시지 입력 및 전송 */}
        <div className="input-container">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={handleKeyPress} 
            placeholder="메시지를 입력하세요." 
          />
          <button onClick={handleSendMessage}>전송</button>
        </div>
      </div>
    </div>
  );
};

// closeModal prop의 타입을 함수로 지정하고 필수 요소로 설정
ChatBot.propTypes = {
  closeModal: PropTypes.func.isRequired, 
};

export default ChatBot;
