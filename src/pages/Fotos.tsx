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

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const PhotoItem = styled.div`
  height: 200px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-style: italic;
  border-radius: 4px;
  overflow: hidden;
`;

const Fotos = () => {
  // Normally we would have actual photos here
  const placeholderItems = Array(12).fill(null);
  
  return (
    <PageContainer>
      <PageTitle>Galeria de Fotos</PageTitle>
      <PhotoGrid>
        {placeholderItems.map((_, index) => (
          <PhotoItem key={index}>Foto {index + 1}</PhotoItem>
        ))}
      </PhotoGrid>
    </PageContainer>
  );
};

export default Fotos; 