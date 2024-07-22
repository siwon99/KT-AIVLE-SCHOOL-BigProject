import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './slidebanner.css';

// 슬라이드 이미지 배열
const slides = [
  { id: 1, image: '/assets/slide1.webp' },
  { id: 2, image: '/assets/slide2.webp' },
  { id: 3, image: '/assets/slide3.webp' },
  { id: 4, image: '/assets/slide4.webp' }
];

const SlideBanner = () => {
  // 현재 슬라이드 인덱스
  const [currentIndex, setCurrentIndex] = useState(1);
  // 애니메이션 상태 여부
  const [isAnimating, setIsAnimating] = useState(false);
  // 자동 재생 여부
  const [isPlaying, setIsPlaying] = useState(true);
  // 자동 재생 간격 (초 단위)
  const [autoPlayInterval, setAutoPlayInterval] = useState(3);
  // 슬라이드 컨테이너 참조
  const slideContainerRef = useRef(null);
  // 자동 재생 함수 참조
  const autoPlayRef = useRef();

  // 애니메이션 종료 핸들러
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    const newIndex = currentIndex === 0 ? slides.length : currentIndex === slides.length + 1 ? 1 : currentIndex;
    setCurrentIndex(newIndex);
    slideContainerRef.current.style.transition = 'none';
    slideContainerRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
  };

  // 특정 슬라이드로 이동
  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  // 키보드 이벤트 핸들러
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      goToSlide(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      goToSlide(currentIndex - 1);
    }
  };

  // 키보드 이벤트 리스너 등록 및 해제
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isAnimating]);

  // 스와이프 이벤트 핸들러
  const handlers = useSwipeable({
    onSwipedLeft: () => goToSlide(currentIndex + 1),
    onSwipedRight: () => goToSlide(currentIndex - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // 슬라이드 컨테이너에 애니메이션 및 이벤트 리스너 등록
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

  // 자동 재생 함수 참조 갱신
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  // 자동 재생 설정
  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    if (isPlaying) {
      const interval = setInterval(play, autoPlayInterval * 1000); // 초 단위를 밀리초로 변환
      return () => clearInterval(interval);
    }
  }, [isPlaying, autoPlayInterval]);

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  // 자동 재생 토글
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="slider-container" tabIndex="0" {...handlers}>
      <div className="slides-wrapper" ref={slideContainerRef} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {[slides[slides.length - 1], ...slides, slides[0]].map((slide, index) => (
          <div key={index} className="individual-slide">
            {slide.image && <img src={slide.image} alt={`Slide ${index}`} className="slide-image" />}
          </div>
        ))}
      </div>
      <div className="pagination-indicators">
        <button onClick={togglePlay} className="control-button">
          {isPlaying ? '❚❚' : '▶'}
        </button>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${
              index + 1 === currentIndex ||
              (currentIndex === 0 && index === slides.length - 1) ||
              (currentIndex === slides.length + 1 && index === 0)
                ? 'active'
                : ''
            }`}
            onClick={() => goToSlide(index + 1)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideBanner;
