import styled from 'styled-components';
import { FaHistory, FaBullseye, FaEye, FaHandshake, FaLeaf, FaChild } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto 60px;
  padding: 0 20px;
`;

const HeroSection = styled.section`
  background: linear-gradient(120deg, #e0f7fa 0%, #fff 100%);
  border-radius: 20px;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
  color: #155b7a;
  margin-bottom: 1.1rem;
`;

const HeroUSP = styled.p`
  font-size: 1.25rem;
  color: #2e8bc0;
  margin-bottom: 0.6rem;
  font-weight: 500;
`;

const HeroDesc = styled.p`
  color: #444;
  font-size: 1.1rem;
`;

const TimelineSection = styled.section`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 18px rgba(46,139,192,0.07);
  margin-bottom: 2.5rem;
  padding: 2rem 1.5rem;
`;

const TimelineTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: #2e8bc0;
  font-weight: 700;
  margin-bottom: 1rem;
  gap: 0.7rem;
`;

const TimelineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TimelineItem = styled.li`
  margin-bottom: 1.2rem;
  padding-left: 1.3rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55rem;
    width: 8px;
    height: 8px;
    background: #2e8bc0;
    border-radius: 50%;
  }
`;

const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 18px rgba(46,139,192,0.07);
  padding: 2rem 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardIcon = styled.div`
  color: #2e8bc0;
  font-size: 2.1rem;
  margin-bottom: 0.8rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #155b7a;
  margin-bottom: 0.6rem;
`;

const CardList = styled.ul`
  margin: 0;
  padding-left: 1.4rem;
  color: #444;
  font-size: 1rem;
`;

const SplitSection = styled.section`
  display: flex;
  gap: 2rem;
  margin: 2.5rem 0;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SplitCard = styled(Card)`
  flex: 1 1 350px;
`;

const Marina = () => {
  return (
    <PageContainer>
      {/* Hero / Welcome Section */}
      <HeroSection>
        <HeroTitle>Bem-vindos à Marina 188!</HeroTitle>
        <HeroUSP>
          Reconhecida pelos seus clientes como um “condomínio marítimo”, a Marina 188 vai muito além de ser apenas mais uma marina em Paraty. Privacidade, conforto e segurança são nossas palavras de ordem.
        </HeroUSP>
        <HeroDesc>
          Aqui nossos usuários encontram atendimento personalizado em um ambiente reservado, onde impera a amizade e a proximidade. O clima é de descontração e as equipes de trabalho estão focadas em atender com qualidade e exclusividade cada um dos clientes e visitantes.
        </HeroDesc>
      </HeroSection>

      {/* História / Timeline Section */}
      <TimelineSection>
        <TimelineTitle><FaHistory /> Fazendo história</TimelineTitle>
        <TimelineList>
          <TimelineItem>
            <b>2000:</b> Início das atividades em Paraty, quando existiam apenas quatro empresas do ramo.
          </TimelineItem>
          <TimelineItem>
            <b>2002:</b> Registro da marca Marina 188. Investimentos em infraestrutura crescentes.
          </TimelineItem>
          <TimelineItem>
            <b>Equipe:</b> Todos os colaboradores são de Paraty, qualificados e treinados na prática, com investimento contínuo em profissionalização.
          </TimelineItem>
        </TimelineList>
      </TimelineSection>

      {/* Missão, Visão, Valores */}
      <SectionGrid>
        <Card>
          <CardIcon><FaBullseye /></CardIcon>
          <CardTitle>Missão</CardTitle>
          <CardList>
            <li>Através do trabalho em equipe, assegurar um serviço diferenciado com padrão de qualidade e segurança.</li>
            <li>Proporcionar experiência de lazer inesquecível, sendo reconhecida como o melhor destino náutico de Paraty.</li>
            <li>Respeito ao meio ambiente como alicerce da melhoria contínua.</li>
            <li>Compromisso com clientes, colaboradores, fornecedores e parceiros.</li>
          </CardList>
        </Card>
        <Card>
          <CardIcon><FaEye /></CardIcon>
          <CardTitle>Visão</CardTitle>
          <CardList>
            <li>Ser reconhecida como referência em entretenimento, comodidade, conforto, segurança e atendimento.</li>
          </CardList>
        </Card>
        <Card>
          <CardIcon><FaHandshake /></CardIcon>
          <CardTitle>Valores</CardTitle>
          <CardList>
            <li>Respeito e compromisso com clientes e colaboradores</li>
            <li>Comunicação e informação</li>
            <li>Serviços diferenciados e de qualidade</li>
            <li>Segurança</li>
            <li>Atendimento prestativo com foco no cliente</li>
            <li>Ética e responsabilidade social</li>
          </CardList>
        </Card>
      </SectionGrid>

      {/* Responsabilidade Social & Ambiental */}
      <SplitSection>
        <SplitCard>
          <CardIcon><FaLeaf /></CardIcon>
          <CardTitle>Normas e fiscalização ambiental</CardTitle>
          <p>
            Seguimos todas as normas e exigências ambientais do INEA (Instituto Estadual do Ambiente), garantindo a sustentabilidade e responsabilidade ambiental de nossas operações.
          </p>
        </SplitCard>
        <SplitCard>
          <CardIcon><FaChild /></CardIcon>
          <CardTitle>Responsabilidade Social</CardTitle>
          <p>
            Investimos na capacitação de nossos colaboradores e apoiamos projetos sociais como o INP (aulas gratuitas de vela para crianças de Paraty) e o Galpão Aplauso (formação profissional para jovens em áreas náuticas e industriais).
          </p>
        </SplitCard>
      </SplitSection>
    </PageContainer>
  );
};

export default Marina;