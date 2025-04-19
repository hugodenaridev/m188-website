import styled from 'styled-components';
import marinaBoatsImg from '../../assets/images/marina-boats.jpg';
import Button from './Button';


const HeroSection = styled.section`
  color: #fff;
  position: relative;
  height: 85vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${marinaBoatsImg}) center center/cover no-repeat;
  margin-top: 84px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const HeroBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: linear-gradient(120deg, rgba(20,40,90,0.62) 0%, rgba(20,40,90,0.72) 100%);
  z-index: 2;
  pointer-events: none;
`;


const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 0;
`;


const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroBackdrop />
      <HeroContent>
        <div style={{
          width: '100%',
          maxWidth: 500,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 5,
          background: 'transparent',
          padding: '2.5rem 2rem',
          borderRadius: 22,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '0',
          }}>
            <Button variant="primary" size="large" to="/marina">Conheça a Marina</Button>
            <Button variant="secondary" size="large" to="/contato">Fale Conosco</Button>
          </div>
        </div>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 