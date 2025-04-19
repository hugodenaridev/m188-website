import React from 'react';
import styled from 'styled-components';
import whyBgImg from '../../assets/images/image7.jpg';
import { FaHandshake, FaHeart, FaSmile } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaHandshake size={32} />,
    title: 'Atendimento Personalizado',
    desc: 'Cada cliente é único e recebe atenção especial em cada detalhe.'
  },
  {
    icon: <FaHeart size={32} />,
    title: 'Ambiente Acolhedor',
    desc: 'Nosso espaço transmite conforto e tranquilidade para você relaxar.'
  },
  {
    icon: <FaSmile size={32} />,
    title: 'Equipe Amigável',
    desc: 'Nossa equipe está sempre pronta para ajudar com um sorriso.'
  },
];

const WhySection = styled.section`
  background: linear-gradient(rgba(30,34,60,0.84), rgba(30,34,60,0.88)), url(${whyBgImg}) center/cover no-repeat;
  padding: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhyTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1.3rem;
  text-align: center;
`;

const WhyGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const WhyCard = styled.div`
  background: rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 1.5rem 1.2rem;
  min-width: 220px;
  max-width: 260px;
  color: #fff;
  box-shadow: 0 2px 24px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhyIcon = styled.div`
  margin-bottom: 1rem;
  color: #ffd700;
`;

const WhyTitleCard = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const WhyDesc = styled.div`
  font-size: 1rem;
  text-align: center;
`;

const WhyChooseUs: React.FC = () => (
  <WhySection>
    <WhyTitle>Por que escolher a Marina 188?</WhyTitle>
    <WhyGrid>
      {reasons.map((reason, idx) => (
        <WhyCard key={idx}>
          <WhyIcon>{reason.icon}</WhyIcon>
          <WhyTitleCard>{reason.title}</WhyTitleCard>
          <WhyDesc>{reason.desc}</WhyDesc>
        </WhyCard>
      ))}
    </WhyGrid>
  </WhySection>
);

export default WhyChooseUs;
