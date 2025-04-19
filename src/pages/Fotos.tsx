import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto 60px;
  padding: 0 20px;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const PhotoItem = styled.div`
  aspect-ratio: 4/3;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(30,34,60,0.07);
`;

const ModernPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.28s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.28s;
  box-shadow: 0 4px 18px rgba(46,139,192,0.10);
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 8px 28px rgba(46,139,192,0.18);
  }
`;

import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.jpg';
import image9 from '../assets/images/image9.jpg';
import image10 from '../assets/images/image10.jpg';
import image11 from '../assets/images/image11.jpg';
import marinaBoats from '../assets/images/marina-boats.jpg';

const images: string[] = [
  marinaBoats,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const Fotos = () => {
  return (
    <PageContainer>
      <PhotoGrid>
        {images.map((img: string, idx: number) => (
          <PhotoItem key={idx}>
            <ModernPhoto src={img} alt={`Foto ${idx + 1}`} loading="lazy" />
          </PhotoItem>
        ))}
      </PhotoGrid>
    </PageContainer>
  );
};

export default Fotos;