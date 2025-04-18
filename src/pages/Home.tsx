import Hero from '../components/ui/Hero';
import Services from '../components/ui/Services';
import SocialMedia from '../components/ui/SocialMedia';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Services />
      <SocialMedia />
    </HomeContainer>
  );
};

export default Home; 