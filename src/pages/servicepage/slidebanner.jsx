import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './slidebanner.css';

// 슬라이드 데이터 배열
const slides = [
  { id: 1, image: '/assets/slide1.webp' },
  { id: 2, image: '/assets/slide2.webp' },
  { id: 3, image: '/assets/slide3.webp' },
  { id: 4, image: '/assets/slide4.webp' }
];

const SlideBanner = () => {
  // 현재 슬라이드 인덱스를 관리하는 상태
  const [currentIndex, setCurrentIndex] = useState(1);
  // 애니메이션 중인지 여부를 관리하는 상태
  const [isAnimating, setIsAnimating] = useState(false);
  // 슬라이드 컨테이너를 참조하기 위한 ref
  const slideContainerRef = useRef(null);

  // 슬라이드 전환 애니메이션이 끝났을 때 호출되는 함수
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    const newIndex = currentIndex === 0 ? slides.length : currentIndex === slides.length + 1 ? 1 : currentIndex;
    setCurrentIndex(newIndex);
    // 애니메이션 없이 슬라이드 위치를 재설정
    slideContainerRef.current.style.transition = 'none';
    slideContainerRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
  };

  // 특정 슬라이드로 이동하는 함수
  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  // 키보드 이벤트 핸들러 함수
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      goToSlide(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      goToSlide(currentIndex - 1);
    }
  };

  // 키보드 이벤트 리스너를 추가하고 제거하는 useEffect 훅
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isAnimating]);

  // 스와이프 이벤트를 처리하기 위한 핸들러
  const handlers = useSwipeable({
    onSwipedLeft: () => goToSlide(currentIndex + 1),
    onSwipedRight: () => goToSlide(currentIndex - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // 슬라이드 컨테이너에 애니메이션 속성과 이벤트 리스너를 추가하는 useEffect 훅
  useEffect(() => {
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transition = 'transform 0.4s ease-in-out';
      slideContainerRef.current.addEventListener('transitionend', handleTransitionEnd);
    }
    return () => {
      if (slideContainerRef.current) {
        slideContainerRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [currentIndex]);

  return (
    <div className="slider-container" tabIndex="0" {...handlers}>
      <div
        ref={slideContainerRef}
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {[slides[slides.length - 1], ...slides, slides[0]].map((slide, index) => (
          <div
            key={index}
            className="individual-slide"
          >
            {slide.image && <img src={slide.image} alt={`Slide ${index}`} className="slide-image" />}
          </div>
        ))}
      </div>
      <div className="pagination-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${index + 1 === currentIndex || (currentIndex === 0 && index === slides.length - 1) || (currentIndex === slides.length + 1 && index === 0) ? 'active' : ''}`}
            onClick={() => goToSlide(index + 1)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideBanner;
