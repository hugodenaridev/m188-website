import React from 'react';
import styled from 'styled-components';
import aboutImg from '../../assets/images/image2.jpg';

const AboutSection = styled.section`
  background: transparent;
  padding: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1.3rem;
  text-align: center;
`;

const AboutText = styled.p`
  color: #fff;
  font-size: 1.15rem;
  max-width: 680px;
  text-align: center;
  line-height: 1.7;
  margin-bottom: 0;
`;

const About: React.FC = () => (
  <AboutSection>
  <img src={aboutImg} alt="Marina ambiente" style={{maxWidth: '420px', width: '100%', borderRadius: '18px', marginBottom: '1.6rem', boxShadow: '0 2px 24px rgba(0,0,0,0.13)', objectFit: 'cover'}} />
  <AboutTitle>Nossa Filosofia</AboutTitle>
  <AboutText>
    Nossa missão é proporcionar tranquilidade, confiança e um ambiente acolhedor para todos que chegam até nós. Mais do que serviços, oferecemos cuidado, atenção e experiências inesquecíveis. Aqui, cada cliente é tratado como parte da família.
  </AboutText>
</AboutSection>
);

export default About;
