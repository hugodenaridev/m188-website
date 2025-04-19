import styled from 'styled-components';
import { FaWarehouse, FaShip, FaTractor, FaParking, FaRestroom, FaVideo, FaChalkboardTeacher, FaUtensils } from 'react-icons/fa';
import Card from './Card';

import { colors } from '../../styles/designSystem';

const ServicesSection = styled.section`
  color: #fff;
  padding: 70px 0 60px 0;
  background: ${colors.primary.main};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.7rem;
`;

const SectionSubtitle = styled.p`
  color: #e0f7fa;
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 2.5vw;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0 4vw;
  }
`;

const ServiceCard = styled(Card)`
  background: rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 1.5rem 1.2rem;
  min-width: 220px;
  max-width: 340px;
  color: #fff;
  box-shadow: 0 2px 24px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`;

const ServiceIcon = styled.div`
  color: #e2984f;
  font-size: 2.1rem;
  margin-bottom: 0.8rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ServiceDesc = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0;
`;

const HomeServices = () => {
  const services = [
    {
      icon: <FaWarehouse />,
      title: 'Hangares',
      desc: '10 hangares para embarcações de até 46 pés. Gestão profissional e movimentação segura.',
    },
    {
      icon: <FaShip />,
      title: 'Píeres',
      desc: 'Píer flutuante de 390m para barcos até 120 pés e píer de apoio para embarcações menores.',
    },
    {
      icon: <FaTractor />,
      title: 'Equipamentos',
      desc: '4 tratores, guincho elétrico de até 20 toneladas e infraestrutura moderna para movimentação.',
    },
    {
      icon: <FaParking />,
      title: 'Estacionamento',
      desc: 'Amplo espaço interno exclusivo para clientes, com segurança e comodidade.',
    },
    {
      icon: <FaRestroom />,
      title: 'Vestiários',
      desc: 'Vestiários modernos e completos para clientes e convidados, com privacidade e conforto.',
    },
    {
      icon: <FaVideo />,
      title: 'Monitoramento 24h',
      desc: 'Sistema com 48 câmeras estrategicamente distribuídas para máxima segurança.',
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Espaço para Cursos',
      desc: 'Sala para cursos profissionalizantes e capacitação de mão de obra náutica.',
    },
    {
      icon: <FaUtensils />,
      title: 'Restaurante Marina',
      desc: 'Restaurante à beira-mar com comida autêntica e fresca, parceria com fornecedores locais.',
    },
  ];

  return (
    <ServicesSection>
      <SectionHeading>
        <SectionTitle>Infraestrutura de Destaque</SectionTitle>
        <SectionSubtitle>
          Conheça os principais diferenciais da Marina 188 para sua embarcação e conforto de toda a família.
        </SectionSubtitle>
      </SectionHeading>
      <ServicesGrid>
        {services.map((service, idx) => (
          <ServiceCard key={idx}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDesc>{service.desc}</ServiceDesc>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default HomeServices;
