import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'João S.',
    comment: 'Atendimento impecável! Equipe super atenciosa e ambiente acolhedor. Recomendo a todos!',
    date: 'Mar 2024',
  },
  {
    name: 'Maria P.',
    comment: 'A melhor marina que já visitei. Me senti em casa desde o primeiro contato. 5 estrelas!',
    date: 'Jan 2024',
  },
  {
    name: 'Carlos R.',
    comment: 'Serviço diferenciado, sempre prontos para ajudar. Voltarei com certeza!',
    date: 'Dez 2023',
  },
];

const ReviewsSection = styled.section`
  background: transparent;
  padding: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewsTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ReviewsGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ReviewCard = styled.div`
  background: rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 1.5rem 1.2rem;
  min-width: 260px;
  max-width: 340px;
  color: #fff;
  box-shadow: 0 2px 24px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ReviewerName = styled.div`
  font-weight: 600;
  margin-top: 1rem;
`;

const ReviewDate = styled.div`
  font-size: 0.95rem;
  color: #e0e1ea;
  margin-bottom: 0.5rem;
`;

const Stars = styled.div`
  color: #ffd700;
  margin-bottom: 0.6rem;
`;

const Reviews: React.FC = () => (
  <ReviewsSection>
    <ReviewsTitle>O que nossos clientes dizem</ReviewsTitle>
    <ReviewsGrid>
      {reviews.map((review, idx) => (
        <ReviewCard key={idx}>
          <Stars>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </Stars>
          <ReviewDate>{review.date}</ReviewDate>
          <div>"{review.comment}"</div>
          <ReviewerName>- {review.name}</ReviewerName>
        </ReviewCard>
      ))}
    </ReviewsGrid>
  </ReviewsSection>
);

export default Reviews;
