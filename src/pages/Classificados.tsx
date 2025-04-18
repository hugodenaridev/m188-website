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

const ClassifiedsWrapper = styled.div`
  margin-top: 30px;
`;

const ClassifiedCard = styled.div`
  border: 1px solid #eee;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;

const ClassifiedImage = styled.div`
  width: 250px;
  height: 180px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-style: italic;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ClassifiedInfo = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 300px;
`;

const ClassifiedTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;

const ClassifiedPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #4682B4;
  margin-bottom: 10px;
`;

const ClassifiedDescription = styled.p`
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const ClassifiedContact = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: #777;
`;

const ClassifiedButton = styled.a`
  display: inline-block;
  padding: 8px 15px;
  background-color: #4682B4;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  
  &:hover {
    background-color: #3A6D99;
  }
`;

const FilterBar = styled.div`
  margin-bottom: 30px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Filter = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
`;

const Classificados = () => {
  // Sample classified listings
  const classifieds = [
    {
      id: 1,
      title: 'Lancba 28 pés - 2019',
      price: 'R$ 180.000,00',
      description: 'Lancha em excelente estado, com motor Mercury 250HP, 100 horas de uso. Inclui carreta rodoviária.',
      contact: 'contato@marina188.com.br | (24) 99925-3683'
    },
    {
      id: 2,
      title: 'Veleiro 32 pés - 2015',
      price: 'R$ 220.000,00',
      description: 'Veleiro em ótimo estado, completo com velas novas, geladeira, fogão e equipamentos de navegação.',
      contact: 'contato@marina188.com.br | (24) 99925-3683'
    },
    {
      id: 3,
      title: 'Jet Ski Yamaha - 2020',
      price: 'R$ 45.000,00',
      description: 'Jet Ski Yamaha com apenas 50 horas de uso, em estado de novo. Inclui carreta.',
      contact: 'contato@marina188.com.br | (24) 99925-3683'
    }
  ];
  
  return (
    <PageContainer>
      <PageTitle>Classificados</PageTitle>
      
      <FilterBar>
        <Filter defaultValue="">
          <option value="">Tipo de Embarcação</option>
          <option value="lancha">Lanchas</option>
          <option value="veleiro">Veleiros</option>
          <option value="jetski">Jet Skis</option>
        </Filter>
        
        <Filter defaultValue="">
          <option value="">Faixa de Preço</option>
          <option value="0-50000">Até R$ 50.000</option>
          <option value="50000-100000">R$ 50.000 - R$ 100.000</option>
          <option value="100000-200000">R$ 100.000 - R$ 200.000</option>
          <option value="200000-plus">Acima de R$ 200.000</option>
        </Filter>
        
        <Filter defaultValue="">
          <option value="">Ano</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="older">Anteriores</option>
        </Filter>
      </FilterBar>
      
      <ClassifiedsWrapper>
        {classifieds.map(item => (
          <ClassifiedCard key={item.id}>
            <ClassifiedImage>Foto da embarcação</ClassifiedImage>
            <ClassifiedInfo>
              <ClassifiedTitle>{item.title}</ClassifiedTitle>
              <ClassifiedPrice>{item.price}</ClassifiedPrice>
              <ClassifiedDescription>{item.description}</ClassifiedDescription>
              <ClassifiedButton href="#">Ver Detalhes</ClassifiedButton>
              <ClassifiedContact>{item.contact}</ClassifiedContact>
            </ClassifiedInfo>
          </ClassifiedCard>
        ))}
      </ClassifiedsWrapper>
    </PageContainer>
  );
};

export default Classificados; 