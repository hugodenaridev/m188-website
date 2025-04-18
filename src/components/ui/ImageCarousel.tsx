import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { colors, shadows, spacing } from '../../styles/designSystem';

// Import all JPG images
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import image8 from '../../assets/images/image8.jpg';
import image9 from '../../assets/images/image9.jpg';
import image10 from '../../assets/images/image10.jpg';
import image11 from '../../assets/images/image11.jpg';
import marinaBoats from '../../assets/images/marina-boats.jpg';

// Array of all images
const carouselImages = [
  marinaBoats,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11
];

interface CarouselProps {
  autoPlay?: boolean;
  interval?: number;
}

const CarouselContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SlideTrack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface SlideProps {
  active: boolean;
  previous: boolean;
  next: boolean;
}

const Slide = styled.div<SlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center 35%;
  opacity: ${props => (props.active ? 1 : 0)};
  z-index: ${props => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ControlButton = styled.button`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 ${spacing[2]};
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
  box-shadow: ${shadows.md};
  
  &:hover {
    background: rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.primary.main}50;
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  gap: 8px;
`;

const Indicator = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  padding: 0;
  margin: 0 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${shadows.sm};
  
  &:hover {
    background: white;
    transform: scale(1.2);
  }
  
  &:focus {
    outline: none;
  }
`;

const ImageCarousel: React.FC<CarouselProps> = ({ 
  autoPlay = true, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);
  
  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  }, []);
  
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);
  
  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);
  
  useEffect(() => {
    let timer: number;
    
    if (isPlaying) {
      timer = window.setInterval(() => {
        nextSlide();
      }, interval);
    }
    
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isPlaying, interval, nextSlide]);
  
  return (
    <CarouselContainer>
      <SlideTrack>
        {carouselImages.map((image, index) => (
          <Slide
            key={index}
            active={index === currentIndex}
            previous={index === (currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1)}
            next={index === (currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1)}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </SlideTrack>
      
      <Controls>
        <ControlButton onClick={prevSlide} aria-label="Previous slide">
          <i className="fas fa-chevron-left"></i>
        </ControlButton>
        
        <ControlButton onClick={togglePlayPause} aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}>
          <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
        </ControlButton>
        
        <ControlButton onClick={nextSlide} aria-label="Next slide">
          <i className="fas fa-chevron-right"></i>
        </ControlButton>
      </Controls>
      
      <Indicators>
        {carouselImages.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

export default ImageCarousel; 