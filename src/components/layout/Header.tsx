import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import Button from '../ui/Button';
import { colors, typography, shadows, spacing, transitions, zIndex } from '../../styles/designSystem';
import logo from '../../assets/images/logo.svg';

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${props => props.scrolled ? colors.ui.surface : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: ${props => props.scrolled ? 'none' : 'blur(8px)'};
  box-shadow: ${props => props.scrolled ? shadows.md : 'none'};
  transition: ${transitions.default};
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing[3]} 0;
  transition: ${transitions.default};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  
  img {
    height: 60px;
    transition: ${transitions.default};
  }
`;

const MainNav = styled.nav<{ mobileOpen: boolean }>`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 991px) {
    position: fixed;s
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background-color: ${colors.primary.main};
    transform: translateX(${props => props.mobileOpen ? '0' : '100%'});
    transition: transform 0.3s ease-in-out;
    padding: ${spacing[6]} ${spacing[4]};
    // z-index: ${zIndex.overlay};
    overflow-y: auto;
    justify-content: flex-start;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  margin: 0 ${spacing[2]};
  position: relative;
  
  @media (max-width: 991px) {
    margin: ${spacing[2]} 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${colors.secondary.main};
    transform: scaleX(${props => props.active ? 1 : 0});
    transform-origin: left center;
    transition: transform 0.3s ease;
    
    @media (max-width: 991px) {
      display: none;
    }
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${props => props.active ? colors.primary.main : colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: ${spacing[2]};
  display: block;
  
  @media (max-width: 991px) {
    color: ${colors.text.inverse};
    padding: ${spacing[2]} 0;
    font-size: ${typography.fontSize.md};
  }
  
  &:hover {
    color: ${props => props.active ? colors.primary.main : colors.primary.light};
    
    @media (max-width: 991px) {
      color: ${colors.text.inverse};
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  margin-right: ${spacing[4]};
  
  @media (max-width: 991px) {
    margin-right: ${spacing[2]};
  }
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary.main};
  font-size: ${typography.fontSize.md};
  border-radius: 50%;
  transition: ${transitions.default};
  background-color: transparent;
  
  &:hover {
    color: ${colors.secondary.main};
    background-color: ${colors.ui.surfaceLight};
    transform: translateY(-2px);
  }
  
  @media (max-width: 991px) {
    width: 32px;
    height: 32px;
  }
`;

const MobileMenuButton = styled.button<{ open: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: ${zIndex.overlay + 1};
  
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${props => props.open ? colors.text.inverse : colors.text.primary};
    transition: ${transitions.default};
    
    &:nth-child(1) {
      transform: ${props => props.open ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)'};
    }
  }
`;

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: ${zIndex.overlay - 1};
`;

const ContactButton = styled(Button)`
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
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileOpen(false);
    
    // Prevent body scroll when mobile menu is open
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, location]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
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
  );
};

export default Header; 