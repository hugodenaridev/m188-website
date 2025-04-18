import styled from 'styled-components';
import { colors, typography, spacing } from '../../styles/designSystem';
import Button from './Button';
import Container from '../layout/Container';
import ImageCarousel from './ImageCarousel';

const HeroSection = styled.section`
  position: relative;
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${colors.primary.dark};
  margin-top: 84px;
  
  &::before {
    content: "";
    display: block;
    height: 80px; /* Same as header height */
  }
  
  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 80px; /* Header height */
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const HeroBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(25, 24, 56, 0.3) 0%,
    rgba(25, 24, 56, 0.5) 100%
  );
  z-index: 2;
  pointer-events: none;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing[10]} 0;
`;

const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${spacing[4]};
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(3px);
`;

const HeroTitle = styled.h1`
  font-family: ${typography.fontFamily.secondary};
  font-size: clamp(3rem, 6vw, ${typography.fontSize['5xl']});
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing[6]};
  color: ${colors.text.inverse};
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.div`
  font-family: ${typography.fontFamily.accent};
  font-size: clamp(1.5rem, 3vw, ${typography.fontSize['2xl']});
  color: ${colors.secondary.main};
  margin-bottom: ${spacing[8]};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${spacing[4]};
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <ImageCarousel autoPlay={true} interval={6000} />
      <HeroBackdrop />
    </HeroSection>
  );
};

export default Hero; 