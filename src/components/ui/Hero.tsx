import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, typography, transitions, shadows, spacing, borderRadius } from '../../styles/designSystem';
import Button from './Button';
import Container from '../layout/Container';
import heroImage from '../../assets/images/hero.svg';

// Import additional placeholder hero images
const heroImage2 = heroImage; // In a real app, use a different image

interface SlideProps {
  active?: boolean;
  imageUrl: string;
}

const HeroSection = styled.section`
  position: relative;
  // height: 100vh;
  min-height: 600px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: ${colors.primary.dark};
  margin-top: 0;
  padding-top: 80px;
  
  @media (max-width: 768px) {
    min-height: calc(100vh - 80px);
    height: auto;
  }
`;

const HeroBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(25, 24, 56, 0.7) 0%,
    rgba(25, 24, 56, 0.85) 100%
  );
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0;
  
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${spacing[6]};
  width: 100%;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: ${spacing[4]};
  }
`;

const HeroTextContent = styled.div`
  grid-column: span 6;
  z-index: 2;
  
  @media (max-width: 991px) {
    grid-column: span 12;
    text-align: center;
    order: 2;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${typography.fontFamily.secondary};
  font-size: clamp(2.5rem, 5vw, ${typography.fontSize['5xl']});
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing[4]};
  color: ${colors.text.inverse};
  line-height: 1.2;
`;

const HeroSubtitle = styled.div`
  font-family: ${typography.fontFamily.accent};
  font-size: clamp(1.5rem, 3vw, ${typography.fontSize['2xl']});
  color: ${colors.secondary.main};
  margin-bottom: ${spacing[6]};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const HeroDescription = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.text.inverse};
  opacity: 0.95;
  margin-bottom: ${spacing[6]};
  max-width: 600px;
  line-height: ${typography.lineHeight.relaxed};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  
  @media (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${spacing[4]};
  
  @media (max-width: 991px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const SlideContainer = styled.div`
  grid-column: span 6;
  position: relative;
  aspect-ratio: 16/9;
  max-height: 500px;
  border-radius: ${borderRadius['2xl']};
  overflow: hidden;
  box-shadow: ${shadows.xl};
  z-index: 2;
  
  @media (max-width: 991px) {
    grid-column: span 12;
    order: 1;
    margin-top: ${spacing[4]};
    max-height: 400px;
  }
`;

const SlideTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Slide = styled.div<SlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 1s ease-in-out;
`;

const SlideOverlayText = styled.div`
  position: absolute;
  bottom: ${spacing[6]};
  left: ${spacing[6]};
  right: ${spacing[6]};
  color: ${colors.text.inverse};
  z-index: 5;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  padding: ${spacing[6]} ${spacing[4]} ${spacing[4]};
  border-radius: ${borderRadius.md};
  
  h3 {
    color: ${colors.text.inverse};
    margin-bottom: ${spacing[1]};
  }
  
  p {
    color: ${colors.text.inverse};
    opacity: 1;
  }
  
  @media (max-width: 576px) {
    bottom: ${spacing[4]};
    left: ${spacing[4]};
    right: ${spacing[4]};
    padding: ${spacing[4]} ${spacing[3]} ${spacing[2]};
  }
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: ${spacing[4]};
  right: ${spacing[4]};
  display: flex;
  gap: ${spacing[2]};
  z-index: 5;
`;

const SlideIndicator = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? colors.secondary.main : 'rgba(255, 255, 255, 0.5)'};
  transition: ${transitions.default};
  border: none;
  padding: 0;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? colors.secondary.main : 'rgba(255, 255, 255, 0.8)'};
  }
`;

const FeaturesPanel = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 320px;
  background: rgba(35, 34, 76, 0.85);
  backdrop-filter: blur(8px);
  padding: ${spacing[4]};
  border-top-right-radius: ${borderRadius.xl};
  z-index: 10;
  transform: translateY(calc(100% - 60px));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(0);
  }
  
  @media (max-width: 991px) {
    max-width: 280px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const FeaturesPanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing[4]};
  cursor: pointer;
`;

const FeaturesPanelTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.md};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.text.inverse};
  margin: 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  margin-bottom: ${spacing[3]};
  color: ${colors.text.inverse};
  opacity: 0.95;
  font-size: ${typography.fontSize.sm};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  
  i {
    color: ${colors.secondary.main};
    font-size: ${typography.fontSize.lg};
    width: 24px;
    text-align: center;
  }
`;

const DestinationHighlight = styled(Link)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(226, 152, 79, 0.95);
  backdrop-filter: blur(8px);
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.text.inverse};
  text-align: center;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  border: 2px solid rgba(255,255,255,0.2);
  
  &:hover {
    background: rgba(226, 152, 79, 1);
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 6px 25px rgba(0,0,0,0.4);
  }
  
  @media (max-width: 1200px) {
    width: 180px;
    height: 180px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const DestinationTitle = styled.h3`
  font-family: ${typography.fontFamily.accent};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.regular};
  margin-bottom: ${spacing[2]};
  color: ${colors.text.inverse};
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const DestinationText = styled.p`
  font-size: ${typography.fontSize.sm};
  max-width: 140px;
  line-height: ${typography.lineHeight.normal};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { 
      image: heroImage, 
      title: 'Restaurante da Marina', 
      subtitle: 'Gastronomia à beira-mar' 
    },
    { 
      image: heroImage2, 
      title: 'Marina 188', 
      subtitle: 'O melhor de Paraty' 
    },
  ];
  
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);
  
  
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <HeroSection id="hero">
      <HeroBackground />
      <HeroBackdrop />
      
      <Container>
        <HeroContent>
          <HeroGrid>
            <HeroTextContent>
              <HeroTitle>Sua embarcação merece o melhor espaço em Paraty</HeroTitle>
              <HeroSubtitle>Tradição, qualidade e segurança desde 2005</HeroSubtitle>
              <HeroDescription>
                Oferecemos uma estrutura completa para navegadores, com serviços de qualidade, segurança 24 horas e uma localização privilegiada na costa de Paraty.
              </HeroDescription>
              <HeroButtons>
                <Button 
                  variant="secondary" 
                  size="large"
                  to="/contato"
                  icon={<i className="fas fa-anchor"></i>}
                >
                  Reservar Vaga
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  to="/infraestrutura"
                  icon={<i className="fas fa-info-circle"></i>}
                >
                  Conheça Nossa Estrutura
                </Button>
              </HeroButtons>
            </HeroTextContent>
            
            <SlideContainer>
              <SlideTrack>
                {slides.map((slide, index) => (
                  <Slide 
                    key={index} 
                    active={index === currentSlide}
                    imageUrl={slide.image}
                  />
                ))}
              </SlideTrack>
              
              <SlideOverlayText>
                <h3 style={{ 
                  fontFamily: typography.fontFamily.accent, 
                  fontSize: typography.fontSize['2xl'], 
                  marginBottom: spacing[1]
                }}>
                  {slides[currentSlide].title}
                </h3>
                <p style={{ 
                  fontSize: typography.fontSize.md, 
                  opacity: 0.9 
                }}>
                  {slides[currentSlide].subtitle}
                </p>
              </SlideOverlayText>
              
              <SlideIndicators>
                {slides.map((_, index) => (
                  <SlideIndicator 
                    key={index} 
                    active={index === currentSlide}
                    onClick={() => goToSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </SlideIndicators>
            </SlideContainer>
          </HeroGrid>
        </HeroContent>
      </Container>
      
      <FeaturesPanel>
        <FeaturesPanelHeader>
          <FeaturesPanelTitle>Nossos Diferenciais</FeaturesPanelTitle>
          <i className="fas fa-chevron-up" style={{ color: colors.secondary.main }}></i>
        </FeaturesPanelHeader>
        <FeaturesList>
          <Feature>
            <i className="fas fa-wifi"></i>
            <span>Internet WiFi gratuita</span>
          </Feature>
          <Feature>
            <i className="fas fa-car"></i>
            <span>Estacionamento exclusivo</span>
          </Feature>
          <Feature>
            <i className="fas fa-video"></i>
            <span>Segurança com 48 câmeras</span>
          </Feature>
          <Feature>
            <i className="fas fa-shower"></i>
            <span>Vestiários privativos</span>
          </Feature>
        </FeaturesList>
      </FeaturesPanel>
      
      <DestinationHighlight to="/paraty">
        <DestinationTitle>Paraty</DestinationTitle>
        <DestinationText>Descubra esse paraíso histórico e natural</DestinationText>
      </DestinationHighlight>
    </HeroSection>
  );
};

export default Hero; 