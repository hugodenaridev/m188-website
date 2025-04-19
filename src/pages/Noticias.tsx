import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto 60px;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 2.3rem;
  color: #23224c;
  margin-bottom: 32px;
  text-align: center;
  background: #fff;
  padding: 18px 0 10px 0;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(46,139,192,0.05);
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  letter-spacing: 0.01em;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(46,139,192,0.09);
  background: #fff;
  display: flex;
  flex-direction: column;
  min-height: 180px;
`;

const NewsContent = styled.div`
  padding: 22px 24px 20px 24px;
  background: #fff;
  color: #23224c;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const NewsTitle = styled.h3`
  font-size: 1.22rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #23224c;
  line-height: 1.25;
`;

const NewsDate = styled.div`
  color: #2e8bc0;
  font-size: 0.98rem;
  margin-bottom: 10px;
  font-weight: 500;
`;

const NewsLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  color: #4682B4;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const news = [
  {
    title: 'Semana Santa em Paraty 2025',
    date: '13 a 20 de abril de 2025',
    url: 'https://paraty.com.br/semana-santa-em-paraty/',
  },
  {
    title: 'Encontro de Ceramistas em Paraty 2025',
    date: '18 a 21 de abril de 2025',
    url: 'https://paraty.com.br/encontro-de-ceramistas-em-paraty/',
  },
  {
    title: 'Exposição O Homem e a Matéria',
    date: 'Abertura em 11/04/2025',
    url: 'https://paraty.com.br/exposicao-o-homem-e-a-materia/',
  },
  {
    title: 'Paulo Leminski é o autor homenageado da Flip 2025',
    date: '30/07 a 03/08/2025',
    url: 'https://paraty.com.br/paulo-leminski-e-o-autor-homenageado-da-flip-2025/',
  },
  {
    title: 'Circuito Sesc Jazz & Blues Paraty 2025',
    date: '11 a 13 de abril de 2025',
    url: 'https://paraty.com.br/circuito-sesc-jazz-blues-paraty-2025/',
  },
  {
    title: 'Maré Cultural – Biodiversidade de Paraty',
    date: '05/04/2025',
    url: 'https://paraty.com.br/mare-cultural-biodiversidade-de-paraty/',
  },
  {
    title: 'Fest Juá 2025',
    date: '27 a 30 de março de 2025',
    url: 'https://paraty.com.br/fest-jua-2025/',
  },
  {
    title: 'Maré Cultural – Dia da Mulher',
    date: '08/03/2025 às 19h',
    url: 'https://paraty.com.br/mare-cultural-dia-da-mulher/',
  },
  {
    title: '358º Aniversário de Paraty',
    date: '07 de março de 2025',
    url: 'https://paraty.com.br/aniversario-de-paraty/',
  },
  {
    title: 'Carnaval em Paraty 2025',
    date: '28/02 a 04/03/2025',
    url: 'https://paraty.com.br/carnaval-em-paraty/',
  },
  {
    title: 'Pré-Carnaval 2025',
    date: '21 a 27/02/2025',
    url: 'https://paraty.com.br/pre-carnaval-2025/',
  },
  {
    title: 'Maré Cultural',
    date: '22 de fevereiro de 2025',
    url: 'https://paraty.com.br/mare-cultural/',
  },
  {
    title: 'Boi de Pano em Paraty',
    date: '23 de fevereiro de 2025',
    url: 'https://paraty.com.br/boi-de-pano-em-paraty/',
  },
  {
    title: 'Show de Luís Perequê no SESC',
    date: '',
    url: 'https://paraty.com.br/show-de-luis-pereque-no-sesc/',
  },
  {
    title: 'Mostra Biodiversidade em Audiovisual',
    date: '19/02/2025 às 19h',
    url: 'https://paraty.com.br/mostra-biodiversidade-em-audiovisual-2/',
  },
  {
    title: 'Carnamar 2025',
    date: '22/02/2025',
    url: 'https://paraty.com.br/carnamar-2025/',
  },
];

const Noticias = () => {
  return (
    <PageContainer>
      <PageTitle>Últimas Notícias de Paraty</PageTitle>
      <NewsGrid>
        {news.map((item, idx) => (
          <NewsCard key={idx}>
            <NewsContent>
              <NewsTitle>{item.title}</NewsTitle>
              {item.date && <NewsDate>{item.date}</NewsDate>}
              <NewsLink href={item.url} target="_blank" rel="noopener noreferrer">Leia mais</NewsLink>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </PageContainer>
  );
};

export default Noticias;