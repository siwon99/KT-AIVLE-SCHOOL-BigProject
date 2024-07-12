import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import "./ChatBot.css";

// ChatBot 컴포넌트 정의
const ChatBot = ({ closeModal }) => {
  // 입력된 메시지를 상태로 관리
  const [message, setMessage] = useState('');
  // 메시지 목록을 상태로 관리
  const [chatHistory, setChatHistory] = useState([
    { text: "안녕하세요! 무엇을 도와드릴까요?", sender: "bot" }
  ]);

  // 메시지 목록 끝에 대한 참조 생성
  const endMessage = useRef(null);

  // 메시지가 추가될 때마다 자동 스크롤을 가장 아래로 이동
  useEffect(() => {
    endMessage.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // 메시지 전송 함수
  const sendMessage = () => {
    if (message.trim()) { // 입력이 있을 때
      // 사용자가 입력한 메시지를 메시지 목록에 추가
      setChatHistory(prevMessages => [...prevMessages, { text: message, sender: "user" }]);
      // 입력 필드 초기화
      setMessage('');
    }

    // 서버로 메시지 전송
    fetch('http://3.39.228.42/chatbot/chat/', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: message,
      }),
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // 응답을 JSON 형태로 변환
      } else {
        throw new Error('에러가 발생했습니다.');
      }
    })
    .then(data => {
      // 서버로부터 받은 응답 데이터 처리
      let result = data.result;
      if (result === 'irrelevant') {
        result = '답변할 수 없는 질문입니다.';
        // TODO: 답변할 수 없는 질문을 받았을 때 추가적인 처리
      }
      // 서버의 응답 메시지를 메시지 목록에 추가
      setChatHistory(prevMessages => [...prevMessages, { text: result, sender: "bot" }]);
    })
    .catch(error => {
      console.log('error'); // 에러 로그 출력
    });
  };

  // Enter 키를 눌렀을 때 메시지 전송
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const closeModalHandler = () => {
    closeModal(); // 상위 컴포넌트에서 전달받은 닫기 함수 호출
  };

  return (
    <div className="background">
      <div className="modal-container">
        {/* 모달 닫기 버튼 */}
        <button className="close-button" onClick={closeModalHandler}>X</button>
        <h2>ChatBot</h2>
        {/* 메시지 목록 */}
        <div className="message-list">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {/* 메시지 목록 끝에 대한 참조 요소 추가 */}
          <div ref={endMessage} />
        </div>
        {/* 메시지 입력 및 전송 */}
        <div className="input-container">
          <input 
            type="text" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            onKeyPress={handleEnterPress} 
            placeholder="메시지를 입력하세요." 
          />
          <button onClick={sendMessage}>전송</button>
        </div>
      </div>
    </div>
  );
};

 // 모달 창 닫기
 const closeModalHandler = () => {
  setIsOpen(false); 
  closeModal(); // 상위 컴포넌트에서 전달받은 닫기 함수 호출
};

// closeChat prop의 타입을 함수로 지정하고 필수 요소로 설정
ChatBot.propTypes = {
  closeChat: PropTypes.func.isRequired, 
};

export default ChatBot;
