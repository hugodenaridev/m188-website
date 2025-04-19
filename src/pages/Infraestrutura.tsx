import styled from 'styled-components';
import { FaWarehouse, FaShip, FaTractor, FaParking, FaHardHat, FaRestroom, FaVideo, FaChalkboardTeacher, FaUtensils } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px auto;
  padding: 55px 20px 60px 20px;
  background: #f7fbfc;
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

const HeroDesc = styled.p`
  color: #444;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
`;

const FeatureGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const FeatureCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 18px rgba(46,139,192,0.07);
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FeatureIcon = styled.div`
  color: #2e8bc0;
  font-size: 2.1rem;
  margin-bottom: 0.8rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #155b7a;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  color: #444;
  font-size: 1rem;
`;

const HighlightSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled(FeatureCard)`
  background: #e0f7fa;
`;

const Infraestrutura = () => {
  return (
    <PageContainer>
      {/* Hero / Intro Section */}
      <HeroSection>
        <HeroTitle>Infraestrutura e Serviços</HeroTitle>
        <HeroDesc>
          A Marina 188 proporciona segurança, conforto, atendimento personalizado, privacidade, responsabilidade ambiental e profissionalismo no cuidado da sua embarcação. Localizada no Km. 579 da BR 101 (Santos-Rio) com ambiente reservado onde impera a amizade e a proximidade, nossa empresa oferece infraestrutura de ponta e serviços impecáveis.
        </HeroDesc>
      </HeroSection>

      {/* Feature Cards Grid */}
      <FeatureGrid>
        <FeatureCard>
          <FeatureIcon><FaWarehouse /></FeatureIcon>
          <FeatureTitle>Hangares</FeatureTitle>
          <FeatureDesc>
            10 hangares com ótimas acomodações para embarcações de até 46 pés. Gestão profissional para fácil, rápida e segura movimentação.
          </FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaShip /></FeatureIcon>
          <FeatureTitle>Píeres</FeatureTitle>
          <FeatureDesc>
            Píer flutuante de 390m para embarcações até 120 pés, com água doce e energia elétrica. Píer de apoio para embarcações até 35 pés.
          </FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaTractor /></FeatureIcon>
          <FeatureTitle>Equipamentos</FeatureTitle>
          <FeatureDesc>
            4 tratores (um com macaco hidráulico), guincho elétrico de até 20 toneladas para movimentação segura das embarcações.
          </FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaParking /></FeatureIcon>
          <FeatureTitle>Estacionamento</FeatureTitle>
          <FeatureDesc>
            Amplo espaço interno exclusivo para clientes.
          </FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaHardHat /></FeatureIcon>
          <FeatureTitle>Apoio aos prestadores de serviços</FeatureTitle>
          <FeatureDesc>
            Área exclusiva para marinheiros e prestadores, com vestiário e refeitório.
          </FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaRestroom /></FeatureIcon>
          <FeatureTitle>Vestiários</FeatureTitle>
          <FeatureDesc>
            Vestiários modernos e completos para clientes e convidados, com privacidade e conforto.
          </FeatureDesc>
        </FeatureCard>
      </FeatureGrid>

      {/* Highlighted Feature Sections */}
      <HighlightSection>
        <HighlightCard>
          <FeatureIcon><FaVideo /></FeatureIcon>
          <FeatureTitle>Circuito interno de câmeras</FeatureTitle>
          <FeatureDesc>
            Sistema moderno de monitoramento com 48 câmeras estrategicamente distribuídas para máxima segurança.
          </FeatureDesc>
        </HighlightCard>
        <HighlightCard>
          <FeatureIcon><FaChalkboardTeacher /></FeatureIcon>
          <FeatureTitle>Espaço para cursos e palestras</FeatureTitle>
          <FeatureDesc>
            Sala confortável para cursos profissionalizantes e capacitação de mão de obra local na área náutica.
          </FeatureDesc>
        </HighlightCard>
        <HighlightCard>
          <FeatureIcon><FaUtensils /></FeatureIcon>
          <FeatureTitle>Restaurante Marina</FeatureTitle>
          <FeatureDesc>
            Restaurante à beira-mar com comida autêntica, fresca e deliciosa. Parceria com fornecedores locais para uma experiência única.
          </FeatureDesc>
        </HighlightCard>
      </HighlightSection>
    </PageContainer>
  );
};

export default Infraestrutura;