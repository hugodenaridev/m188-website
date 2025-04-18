import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout; 