import React, { useState, useEffect } from 'react';
import './slidebanner.css';

// 슬라이드 데이터 배열
const slides = [
  { id: 1, color: 'red', content: 'Slide 1' },
  { id: 2, color: 'orange', content: 'Slide 2' },
  { id: 3, color: 'yellow', content: 'Slide 3' },
  { id: 4, color: 'green', content: 'Slide 4' },
  { id: 5, color: 'blue', content: 'Slide 5' }
];

const SlideBanner = () => {
  // 현재 슬라이드 인덱스 상태 변수
  const [currentIndex, setCurrentIndex] = useState(0);

  // 주어진 인덱스로 슬라이드를 이동하는 함수
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // 키보드 이벤트 핸들러
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      // 오른쪽 화살표 키를 누르면 다음 슬라이드로 이동
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (event.key === 'ArrowLeft') {
      // 왼쪽 화살표 키를 누르면 이전 슬라이드로 이동
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
  };

  // 키보드 이벤트 리스너 추가 및 제거
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="slider" tabIndex="0">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentIndex ? 'active' : 'inactive'}`}
            style={{ backgroundColor: slide.color }}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <div className="pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideBanner;
