import Hero from '../components/ui/Hero';
import HomeServices from '../components/ui/HomeServices';
import SocialMedia from '../components/ui/SocialMedia';
import Reviews from '../components/ui/Reviews';
import About from '../components/ui/About';
import WhyChooseUs from '../components/ui/WhyChooseUs';
import Team from '../components/ui/Team';
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
      <HomeServices />
      <SocialMedia />
      <Reviews />
      <About />
      <WhyChooseUs />
      <Team />
    </HomeContainer>
  );
};

export default Home; 