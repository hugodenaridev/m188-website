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

const ParatyHero = styled.div`
  height: 400px;
  background-color: #f5f5f5;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-style: italic;
  border-radius: 4px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  line-height: 1.6;
  color: #555;
  
  h2 {
    font-size: 24px;
    margin: 30px 0 15px;
    color: #333;
  }
  
  p {
    margin-bottom: 20px;
  }
`;

const Sidebar = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  align-self: start;
`;

const SidebarTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const AttractionsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const AttractionItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoBox = styled.div`
  background-color: #E6F4F1;
  padding: 20px;
  border-radius: 4px;
  margin: 30px 0;
  
  h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 15px;
    color: #333;
  }
`;

const Paraty = () => {
  return (
    <PageContainer>
      <PageTitle>Paraty - Patrimônio Mundial</PageTitle>
      
      <ParatyHero>Imagem panorâmica de Paraty</ParatyHero>
      
      <Content>
        <MainContent>
          <p>
            Paraty é uma joia preservada do litoral brasileiro, localizada entre o mar e a montanha, 
            no estado do Rio de Janeiro. Com seu centro histórico preservado, praias paradisíacas e
            natureza exuberante, a cidade é um destino perfeito para quem busca história, cultura e belezas naturais.
          </p>
          
          <h2>História</h2>
          <p>
            Fundada em 1667, Paraty foi um importante porto para o escoamento do ouro de Minas Gerais
            durante o período colonial. Seu conjunto arquitetônico preservado é um testemunho vivo da
            história brasileira e foi reconhecido pela UNESCO como Patrimônio Mundial.
          </p>
          
          <InfoBox>
            <h3>Você sabia?</h3>
            <p>
              Paraty foi reconhecida como Patrimônio Mundial pela UNESCO em 2019, na categoria de
              Patrimônio Cultural e Natural, ressaltando a harmonia entre a arquitetura colonial e
              a exuberante natureza da Mata Atlântica.
            </p>
          </InfoBox>
          
          <h2>O que fazer em Paraty</h2>
          <p>
            Além de explorar o charmoso centro histórico com suas ruas de pedra e casarões coloniais,
            Paraty oferece diversas atividades para os visitantes. Passeios de barco pelas ilhas e praias
            da região, trilhas em meio à Mata Atlântica, cachoeiras de águas cristalinas e uma rica
            gastronomia local são algumas das atrações.
          </p>
          
          <h2>Como Chegar</h2>
          <p>
            Paraty está localizada a aproximadamente 250 km do Rio de Janeiro e 330 km de São Paulo.
            O acesso é feito pela Rodovia BR-101 (Rio-Santos). A Marina 188 está situada no Km 579
            dessa rodovia, oferecendo fácil acesso para quem chega de barco ou carro.
          </p>
        </MainContent>
        
        <Sidebar>
          <SidebarTitle>Principais Atrações</SidebarTitle>
          <AttractionsList>
            <AttractionItem>Centro Histórico</AttractionItem>
            <AttractionItem>Praia do Sono</AttractionItem>
            <AttractionItem>Ilha do Araújo</AttractionItem>
            <AttractionItem>Cachoeira do Tobogã</AttractionItem>
            <AttractionItem>Saco do Mamanguá</AttractionItem>
            <AttractionItem>Trindade</AttractionItem>
            <AttractionItem>Parque Nacional da Serra da Bocaina</AttractionItem>
            <AttractionItem>Casa da Cultura</AttractionItem>
            <AttractionItem>Alambique Pedra Branca</AttractionItem>
            <AttractionItem>Festa Literária de Paraty (FLIP)</AttractionItem>
          </AttractionsList>
        </Sidebar>
      </Content>
    </PageContainer>
  );
};

export default Paraty; 