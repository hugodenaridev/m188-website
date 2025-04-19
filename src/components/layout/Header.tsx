import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Container from './Container';
import Button from '../ui/Button';
import { colors, typography } from '../../styles/designSystem';
import logo from '../../assets/images/logo.svg';


const fadeInDown = keyframes`
  from { opacity: 0; transform: translateY(-24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  background: ${colors.primary.main};
  box-shadow: ${props => props.scrolled ? '0 8px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.06)'};
  border-radius: 0 0 18px 18px;
  border: 1px solid rgba(255,255,255,0.18);
  transition: background 0.3s, box-shadow 0.3s, border-radius 0.3s;
  animation: ${fadeInDown} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  min-height: 70px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  transition: box-shadow 0.2s;
  color: #fff;
  &:hover {
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    img { filter: brightness(1.15); }
  }
  img {
    height: 44px;
    width: auto;
    transition: filter 0.2s;
  }
`;

const MainNav = styled.nav<{ mobileOpen: boolean }>`
  display: flex;
  color: #fff;
  align-items: center;
  flex: 1;
  justify-content: center;
  @media (max-width: 991px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: ${colors.primary.main};
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    border-radius: 0 0 24px 24px;
    transform: translateY(${props => props.mobileOpen ? '0' : '-110%'});
    transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
    z-index: 1200;
    justify-content: flex-start;
    padding-top: 110px;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 2.25rem;
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  position: relative;
  padding: 0;
`;

const underlineAnim = keyframes`
  from { width: 0; left: 50%; }
  to { width: 100%; left: 0; }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  font-family: ${typography.fontFamily.primary};
  font-size: 1.12rem;
  font-weight: 700;
  color: #fff;
  text-transform: none;
  letter-spacing: 0.5px;
  padding: 0.5rem 0.75rem;
  border-radius: 7px;
  transition: background 0.18s, color 0.18s;
  position: relative;
  background: none;
  &:hover, &:focus {
    color: #fff;
    background: rgba(0,0,0,0.04);
    text-decoration: none;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 3px;
    width: ${props => props.active ? '100%' : '0'};
    background: ${colors.primary.main};
    border-radius: 2px;
    transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
    animation: ${props => props.active ? underlineAnim : 'none'} 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 991px) {
    font-size: 1.3rem;
    color: #fff;
    text-align: center;
    padding: 0.6rem 0.5rem;
    &::after { display: none; }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-right: 1.5rem;
  @media (max-width: 991px) {
    margin-right: 0.5rem;
  }
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
  border-radius: 50%;
  transition: background 0.15s, color 0.15s, box-shadow 0.2s;
  background: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  &:hover {
    color: #fff;
    background: ${colors.primary.main};
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    transform: translateY(-2px) scale(1.08);
  }
  @media (max-width: 991px) {
    width: 32px;
    height: 32px;
    font-size: 1.1rem;
  }
`;

const MobileMenuButton = styled.button<{ open: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 44px;
  height: 44px;
  position: relative;
  z-index: 1300;
  border-radius: 50%;
  transition: background 0.18s;
  &:hover, &:focus {
    background: rgba(0,0,0,0.08);
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    display: block;
    width: 26px;
    height: 3px;
    margin: 3px 0;
    background: ${colors.primary.main};
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  span:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
  }
  span:nth-child(2) {
    opacity: ${({ open }) => open ? 0 : 1};
  }
  span:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
  }
`;

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 41, 59, 0.35);
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1100;
  backdrop-filter: blur(4px);
`;

const ContactButton = styled(Button)`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 24px;
  background: ${colors.primary.main};
  color: #fff;
  border: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  transition: background 0.18s, box-shadow 0.18s;
  &:hover, &:focus {
    background: ${colors.secondary.main};
    color: #fff;
    box-shadow: 0 4px 18px rgba(0,0,0,0.13);
  }
  @media (max-width: 767px) {
    display: none;
  }
`;


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, location]);

  const isActive = (path: string) => location.pathname === path;
  const toggleMobileMenu = () => setMobileOpen(m => !m);

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Container>
          <HeaderWrapper>
            <Logo to="/">
              <img src={logo} alt="Marina 188" />
            </Logo>
            <MainNav mobileOpen={mobileOpen}>
              <NavList>
                <NavItem active={isActive('/')}>
                <NavLink to="/" active={isActive('/')}>Início</NavLink>
              </NavItem>
              <NavItem active={isActive('/marina')}>
                <NavLink to="/marina" active={isActive('/marina')}>Marina</NavLink>
              </NavItem>
              <NavItem active={isActive('/infraestrutura')}>
                <NavLink to="/infraestrutura" active={isActive('/infraestrutura')}>Infraestrutura</NavLink>
              </NavItem>
              <NavItem active={isActive('/fotos')}>
                <NavLink to="/fotos" active={isActive('/fotos')}>Fotos</NavLink>
              </NavItem>
              <NavItem active={isActive('/noticias')}>
                <NavLink to="/noticias" active={isActive('/noticias')}>Notícias</NavLink>
              </NavItem>
              <NavItem active={isActive('/classificados')}>
                <NavLink to="/classificados" active={isActive('/classificados')}>Classificados</NavLink>
              </NavItem>
              <NavItem active={isActive('/paraty')}>
                <NavLink to="/paraty" active={isActive('/paraty')}>Paraty</NavLink>
              </NavItem>
              <NavItem active={isActive('/contato')}>
                <NavLink to="/contato" active={isActive('/contato')}>Contato</NavLink>
              </NavItem>
            </NavList>
          </MainNav>
          <RightSection>
            <SocialIcons>
              <SocialIcon href="https://www.facebook.com/marina188paraty" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/marina188paraty" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon href="https://wa.me/5524999253683" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </SocialIcon>
            </SocialIcons>
            <ContactButton
              variant="secondary"
              size="small"
              to="/contato"
              icon={<i className="fas fa-anchor"></i>}
            >
              Contato
            </ContactButton>
            <MobileMenuButton open={mobileOpen} onClick={toggleMobileMenu} aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </MobileMenuButton>
          </RightSection>
        </HeaderWrapper>
      </Container>
      <Overlay show={mobileOpen} onClick={() => setMobileOpen(false)} />
    </HeaderContainer>
    </>
  );
};

export default Header;