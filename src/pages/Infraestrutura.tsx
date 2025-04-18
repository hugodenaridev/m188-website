import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto 60px;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

const PageContent = styled.div`
  line-height: 1.6;
  color: #555;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 30px 0;
`;

const FeatureItem = styled.li`
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-left: 4px solid #4682B4;
  display: flex;
  align-items: center;
  
  i {
    margin-right: 15px;
    color: #4682B4;
    font-size: 24px;
  }
`;

const Infraestrutura = () => {
  return (
    <PageContainer>
      <PageTitle>Infraestrutura e Serviços</PageTitle>
      <PageContent>
        <p>
          Na Marina 188, oferecemos infraestrutura completa para garantir conforto e segurança aos nossos clientes.
          Conheça os serviços e facilidades disponíveis:
        </p>
        
        <FeatureList>
          <FeatureItem>
            <i className="fa fa-wifi"></i>
            <span>Internet WiFi gratuita em toda a área da marina</span>
          </FeatureItem>
          <FeatureItem>
            <i className="fa fa-car"></i>
            <span>Estacionamento privativo para clientes</span>
          </FeatureItem>
          <FeatureItem>
            <i className="fa fa-video-camera"></i>
            <span>Sistema de segurança com 48 câmeras monitoradas 24h</span>
          </FeatureItem>
          <FeatureItem>
            <i className="fa fa-shower"></i>
            <span>Vestiários exclusivos para clientes</span>
          </FeatureItem>
          <FeatureItem>
            <i className="fa fa-cutlery"></i>
            <span>Restaurante com vista para a baía</span>
          </FeatureItem>
          <FeatureItem>
            <i className="fa fa-wrench"></i>
            <span>Serviços de manutenção para embarcações</span>
          </FeatureItem>
          <FeatureItem>
            <i className="fa fa-tint"></i>
            <span>Abastecimento de água potável</span>
          </FeatureItem>
          <FeatureItem>
            <i className="fa fa-bolt"></i>
            <span>Energia elétrica para embarcações</span>
          </FeatureItem>
        </FeatureList>
      </PageContent>
    </PageContainer>
  );
};

export default Infraestrutura; 