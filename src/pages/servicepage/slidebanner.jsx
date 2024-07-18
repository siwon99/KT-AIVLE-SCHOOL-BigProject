import React, { useState, useEffect } from 'react';
import './slidebanner.css';

// 슬라이드 데이터 배열
const slides = [
  { id: 1, color: '#6E9FED', content: 'Slide 1' },
  { id: 2, color: '#C1DAFB', content: 'Slide 2' },
  { id: 3, color: '#6E9FED', content: 'Slide 3' },
  { id: 4, color: '#C1DAFB', content: 'Slide 4' },
  { id: 5, color: '#6E9FED', content: 'Slide 5' }
];

const SlideBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스 상태

  // 특정 슬라이드로 이동하는 함수
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // 키보드 이벤트 핸들러 함수
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      // 오른쪽 화살표 키를 눌렀을 때
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (event.key === 'ArrowLeft') {
      // 왼쪽 화살표 키를 눌렀을 때
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
      <div className="slide-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="slide"
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
