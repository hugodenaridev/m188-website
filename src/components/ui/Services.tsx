import styled, { keyframes } from 'styled-components';
import Container from '../layout/Container';
import Card from './Card';
import Button from './Button';
import { colors, typography, spacing } from '../../styles/designSystem';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const iconPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(46, 139, 192, 0.18); }
  70% { box-shadow: 0 0 0 15px rgba(46, 139, 192, 0); }
  100% { box-shadow: 0 0 0 0 rgba(46, 139, 192, 0); }
`;

const ServicesSection = styled.section`
  color: #fff;
  padding: ${spacing[10]} 0;
  position: relative;
  overflow: hidden;
  z-index: 2;
  margin-top: 0;
  background: ${colors.primary.main};

  @media (max-width: 768px) {
    padding-top: ${spacing[12]};
  }
`;

const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: ${spacing[8]};
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-family: ${typography.fontFamily.secondary};
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeight.semiBold};
  color: #fff;
  margin-bottom: ${spacing[2]};
`;

const SectionSubtitle = styled.p`
  font-size: ${typography.fontSize.lg};
  color: #fff;
  max-width: 600px;
  margin: 0 auto;
`;

const Accent = styled.span`
  color: #fff;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing[6]};
  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const ServiceCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  background: rgba(255,255,255,0.08);
  border-radius: 22px;
  border: 1.5px solid rgba(255,255,255,0.22);
  color: #fff;
  box-shadow: 0 8px 32px rgba(0,0,0,0.16);
  backdrop-filter: blur(11px);
  overflow: hidden;
  z-index: 2;
  animation: ${fadeInUp} 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform, box-shadow;
  /* Animated accent bar */
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 5px;
    background: linear-gradient(90deg, #2e8bc0, #3edbf0, #90f1ef, #e0f7fa);
    background-size: 200% 100%;
    transition: background-position 0.5s;
    z-index: 3;
  }
  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 16px 56px rgba(0,0,0,0.22);
    &::before {
      background-position: 100% 0;
    }
  }
`;

const ServiceIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2e8bc0, #3edbf0);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing[4]};
  color: #fff;
  font-size: ${typography.fontSize['2xl']};
  box-shadow: 0 4px 16px rgba(46,139,192,0.15);
  transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform, box-shadow;
  &:hover, ${ServiceCard}:hover & {
    animation: ${iconPulse} 1.1s;
    transform: scale(1.11) rotate(-2deg);
    box-shadow: 0 8px 32px rgba(46,139,192,0.22);
  }
`;

const ServiceTitle = styled.h3`
  font-family: ${typography.fontFamily.secondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.medium};
  color: #fff;
  margin-bottom: ${spacing[3]};
  text-align: left;
  width: 100%;
`;

const ServiceDescription = styled.p`
  color: #fff;
  line-height: ${typography.lineHeight.relaxed};
  text-align: left;
  width: 100%;
  flex-grow: 1;
  margin-bottom: ${spacing[4]};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  margin-top: auto;
  padding-top: ${spacing[4]};
  border-top: 1px solid rgba(255,255,255,0.22);
  z-index: 3;
  /* Glow effect for button on hover */
  & > button {
    transition: box-shadow 0.25s, filter 0.25s;
  }
  & > button:hover {
    box-shadow: 0 0 16px 2px #3edbf0, 0 4px 32px rgba(46,139,192,0.18);
    filter: brightness(1.08) saturate(1.1);
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: ${colors.primary.main};
  z-index: 0;
  &.circle1 {
    top: -200px;
    left: -100px;
  }
  &.circle2 {
    bottom: -150px;
    right: -80px;
  }
`;

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'fa-warehouse',
      title: 'Vagas e Guarda-Barcos',
      description: 'Vagas cobertas e abertas para todos os tamanhos de embarcação. Segurança 24h e acesso fácil.',
      link: '/contato',
      cta: 'Consultar Disponibilidade'
    },
    {
      id: 2,
      icon: 'fa-tools',
      title: 'Manutenção e Reparos',
      description: 'Equipe técnica especializada para manutenção preventiva e corretiva no local.',
      link: '/contato?service=manutencao',
      cta: 'Solicitar Serviço'
    },
    {
      id: 3,
      icon: 'fa-gas-pump',
      title: 'Combustível e Abastecimento',
      description: 'Píer exclusivo para abastecimento rápido e seguro, com combustível premium.',
      link: '/contato?service=combustivel',
      cta: 'Agendar Abastecimento'
    },
    {
      id: 4,
      icon: 'fa-shield-alt',
      title: 'Segurança e Monitoramento',
      description: 'Monitoramento por câmeras e equipe de vigilância 24h para total tranquilidade.',
      link: '/contato?service=seguranca',
      cta: 'Falar com Segurança'
    },
    {
      id: 5,
      icon: 'fa-utensils',
      title: 'Restaurante & Lazer',
      description: 'Restaurante à beira-mar, lounge e eventos exclusivos para clientes e convidados.',
      link: '/marina#restaurante',
      cta: 'Ver Opções de Lazer'
    }
  ];

  return (
    <ServicesSection>
      <BackgroundCircle className="circle1" />
      <BackgroundCircle className="circle2" />
      
      <Container>
        <SectionHeading>
          <SectionTitle>Nossos <Accent>Serviços</Accent></SectionTitle>
          <SectionSubtitle>
            Oferecemos uma experiência completa para navegadores, com toda a infraestrutura para sua embarcação e conforto para você.
          </SectionSubtitle>
        </SectionHeading>
        
        <ServicesGrid>
          {services.map(service => (
            <ServiceCard key={service.id} elevation="low">
              <Card.Content>
                <ServiceIconWrapper>
                  <i className={`fas ${service.icon}`}></i>
                </ServiceIconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <CardFooter>
                  <Button 
                    variant="outlined" 
                    size="medium" 
                    to={service.link}
                    icon={<i className="fas fa-arrow-right"></i>}
                    iconPosition="right"
                  >
                    {service.cta}
                  </Button>
                </CardFooter>
              </Card.Content>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 