import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px auto;
  padding: 65px 20px 60px 20px;
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

const ClassifiedsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 30px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ClassifiedCard = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(46,139,192,0.09);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(46,139,192,0.15);
  }
`;

const ClassifiedImage = styled.div`
  width: 100%;
  height: 220px;
  background-color: #e0f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2e8bc0;
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #e0e1ea;
`;

const ClassifiedInfo = styled.div`
  flex: 1;
  padding: 22px 24px 16px 24px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ClassifiedTitle = styled.h3`
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #23224c;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
`;

const ClassifiedPrice = styled.div`
  font-size: 1.09rem;
  font-weight: 700;
  color: #2e8bc0;
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
  border-top: 1px solid #e0e1ea;
  font-size: 0.97rem;
  color: #155b7a;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

const ClassifiedButton = styled.a`
  display: inline-block;
  padding: 10px 18px;
  background-color: #2e8bc0;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 12px;
  transition: background 0.18s;
  box-shadow: 0 2px 8px rgba(46,139,192,0.08);
  &:hover {
    background-color: #155b7a;
  }
`;

const FilterBar = styled.div`
  margin: 0 auto 36px auto;
  max-width: 900px;
  padding: 22px 24px 16px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(46,139,192,0.06);
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;

const Filter = styled.select`
  padding: 10px 16px;
  border: 1.5px solid #2e8bc0;
  border-radius: 8px;
  background: #f7fbfc;
  color: #23224c;
  font-size: 1rem;
  outline: none;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  transition: border 0.16s;
  &:focus {
    border-color: #155b7a;
  }
`;

const Classificados = () => {
  // Sample classified listings
  type Classified = {
  id: number;
  title: string;
  price: string;
  description: string;
  contact: string;
};

const classifieds: Classified[] = [
  {
    id: 1,
    title: 'Lancha 28 pés - 2019',
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
      <HeroSection>
        <HeroTitle>Classificados Náuticos</HeroTitle>
        <HeroUSP>Compre, venda ou anuncie embarcações e equipamentos náuticos</HeroUSP>
        <HeroDesc>Veja as melhores oportunidades do mercado náutico em Paraty e região.</HeroDesc>
      </HeroSection>
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
      <ClassifiedsGrid>
        {classifieds.map((item: Classified) => (
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
      </ClassifiedsGrid>
    </PageContainer>
  );
};

export default Classificados;