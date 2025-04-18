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

const Marina = () => {
  return (
    <PageContainer>
      <PageTitle>Marina</PageTitle>
      <PageContent>
        <p>
          Conheça mais sobre a Marina 188, um dos melhores espaços para embarcações em Paraty.
          Nossa estrutura foi pensada para proporcionar conforto e segurança para navegadores e suas embarcações.
        </p>
        <p>
          Com uma vista privilegiada para a baía de Paraty, a Marina 188 oferece serviços completos para sua 
          experiência náutica.
        </p>
      </PageContent>
    </PageContainer>
  );
};

export default Marina; 