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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
`;

const NewsCard = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const NewsImage = styled.div`
  height: 200px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-style: italic;
`;

const NewsContent = styled.div`
  padding: 20px;
`;

const NewsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const NewsDate = styled.div`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

const NewsExcerpt = styled.p`
  color: #555;
  line-height: 1.5;
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

const Noticias = () => {
  // Sample news data
  const news = [
    {
      id: 1,
      title: 'Novo restaurante na Marina 188',
      date: '10 de Abril de 2023',
      excerpt: 'Inauguramos nosso novo restaurante com vista para a baía de Paraty. Venha conhecer e degustar o melhor da gastronomia local.'
    },
    {
      id: 2,
      title: 'Promoção para temporada de verão',
      date: '5 de Dezembro de 2022',
      excerpt: 'Preparamos uma promoção especial para a temporada de verão. Confira os detalhes e garanta sua vaga.'
    },
    {
      id: 3,
      title: 'Evento náutico em Paraty',
      date: '15 de Outubro de 2022',
      excerpt: 'Marina 188 será sede do evento náutico que acontecerá em Paraty no próximo mês. Veja a programação completa.'
    }
  ];
  
  return (
    <PageContainer>
      <PageTitle>Notícias</PageTitle>
      <NewsGrid>
        {news.map(item => (
          <NewsCard key={item.id}>
            <NewsImage>Imagem da notícia</NewsImage>
            <NewsContent>
              <NewsTitle>{item.title}</NewsTitle>
              <NewsDate>{item.date}</NewsDate>
              <NewsExcerpt>{item.excerpt}</NewsExcerpt>
              <NewsLink href="#">Leia mais</NewsLink>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </PageContainer>
  );
};

export default Noticias; 