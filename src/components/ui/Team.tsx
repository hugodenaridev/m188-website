import React from 'react';
import styled from 'styled-components';
import teamImg1 from '../../assets/images/image4.jpg';
import teamImg2 from '../../assets/images/image5.jpg';
import teamImg3 from '../../assets/images/image6.jpg';

const team = [
  {
    name: 'Ana Paula',
    role: 'Gerente Geral',
    bio: 'Sempre pronta para receber cada cliente com um sorriso e atenção especial.',
    photo: teamImg1,
  },
  {
    name: 'Carlos Silva',
    role: 'Atendimento ao Cliente',
    bio: 'Faz questão de garantir que todos se sintam em casa na Marina 188.',
    photo: teamImg2,
  },
  {
    name: 'Fernanda Souza',
    role: 'Supervisora de Operações',
    bio: 'Cuida de cada detalhe para que sua experiência seja perfeita.',
    photo: teamImg3,
  },
];

const TeamSection = styled.section`
  background: transparent;
  padding: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1.3rem;
  text-align: center;
`;

const TeamGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamCard = styled.div`
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

const TeamPhoto = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #fff;
`;

const TeamName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;

const TeamRole = styled.div`
  font-size: 0.98rem;
  color: #e0e1ea;
  margin-bottom: 0.5rem;
`;

const TeamBio = styled.div`
  font-size: 1rem;
  text-align: center;
`;

const Team: React.FC = () => (
  <TeamSection>
    <TeamTitle>Conheça nossa equipe</TeamTitle>
    <TeamGrid>
      {team.map((member, idx) => (
        <TeamCard key={idx}>
          <TeamPhoto src={member.photo} alt={member.name} />
          <TeamName>{member.name}</TeamName>
          <TeamRole>{member.role}</TeamRole>
          <TeamBio>{member.bio}</TeamBio>
        </TeamCard>
      ))}
    </TeamGrid>
  </TeamSection>
);

export default Team;
