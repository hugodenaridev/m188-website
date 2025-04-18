import styled from 'styled-components';
import Container from '../layout/Container';
import Card from './Card';
import Button from './Button';
import { colors, typography, spacing, shadows, borderRadius } from '../../styles/designSystem';

const ServicesSection = styled.section`
  padding: ${spacing[10]} 0;
  background-color: ${colors.ui.backgroundAlt};
  position: relative;
  overflow: hidden;
  z-index: 2;
  margin-top: 0;
  
  /* Ensure the ServicesSection is displayed properly */
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
  color: ${colors.text.primary};
  margin-bottom: ${spacing[2]};
`;

const SectionSubtitle = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const Accent = styled.span`
  color: ${colors.secondary.main};
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  border-radius: ${borderRadius.lg};
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.lg};
  }
`;

const ServiceIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${colors.primary.light}, ${colors.primary.main});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing[4]};
  color: ${colors.text.inverse};
  font-size: ${typography.fontSize['2xl']};
  box-shadow: ${shadows.md};
`;

const ServiceTitle = styled.h3`
  font-family: ${typography.fontFamily.secondary};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.text.primary};
  margin-bottom: ${spacing[3]};
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: ${colors.text.secondary};
  line-height: ${typography.lineHeight.relaxed};
  text-align: center;
  flex-grow: 1;
  margin-bottom: ${spacing[4]};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${spacing[4]};
  border-top: 1px solid ${colors.ui.divider};
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.ocean.light}15, ${colors.ocean.medium}10);
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
      icon: 'fa-cogs',
      title: 'Infraestrutura e Serviços',
      description: 'Conheça nossa infraestrutura completa e todos os serviços disponíveis para navegadores e embarcações.',
      link: '/infraestrutura'
    },
    {
      id: 2,
      icon: 'fa-ship',
      title: 'Vagas para Embarcações',
      description: 'Consulte a disponibilidade de vagas para sua embarcação e garanta seu espaço em nossa marina.',
      link: '/contato'
    },
    {
      id: 3,
      icon: 'fa-utensils',
      title: 'Restaurante',
      description: 'Desfrute de uma gastronomia à beira-mar com vista privilegiada para a baía de Paraty.',
      link: '/marina#restaurante'
    },
    {
      id: 4,
      icon: 'fa-map-marker-alt',
      title: 'Localização Privilegiada',
      description: 'Estamos localizados em uma das regiões mais bonitas da costa brasileira. Conheça como chegar.',
      link: '/contato#mapa'
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
                    Saiba Mais
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