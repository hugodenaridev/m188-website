import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './Container';
import { colors, typography, spacing, shadows, borderRadius } from '../../styles/designSystem';
import logo from '../../assets/images/logo.svg';

const FooterContainer = styled.footer`
  background-color: ${colors.primary.main};
  color: ${colors.text.inverse};
  padding: ${spacing[6]} 0 ${spacing[4]};
  position: relative;
`;

const FooterTopGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, ${colors.ocean.medium}, ${colors.secondary.main}, ${colors.ocean.deep});
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${spacing[6]};
  margin-bottom: ${spacing[6]};
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const LogoColumn = styled.div`
  grid-column: span 3;
  
  @media (max-width: 991px) {
    grid-column: span 2;
  }
  
  @media (max-width: 576px) {
    grid-column: span 1;
  }
`;

const NavigationColumn = styled.div`
  grid-column: span 3;
  
  @media (max-width: 991px) {
    grid-column: span 1;
  }
`;

const ContactColumn = styled.div`
  grid-column: span 3;
  
  @media (max-width: 991px) {
    grid-column: span 1;
  }
`;

const SocialColumn = styled.div`
  grid-column: span 3;
  
  @media (max-width: 991px) {
    grid-column: span 2;
  }
  
  @media (max-width: 576px) {
    grid-column: span 1;
  }
`;

const FooterLogo = styled(Link)`
  display: inline-block;
  margin-bottom: ${spacing[4]};
  
  img {
    height: 60px;
    filter: brightness(0) invert(1);
  }
`;

const FooterTagline = styled.p`
  font-size: ${typography.fontSize.sm};
  margin-bottom: ${spacing[4]};
  line-height: ${typography.lineHeight.relaxed};
  opacity: 0.8;
`;

const FooterHeading = styled.h4`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.md};
  font-weight: ${typography.fontWeight.semiBold};
  color: ${colors.text.inverse};
  margin-bottom: ${spacing[4]};
  position: relative;
  padding-bottom: ${spacing[2]};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${colors.secondary.main};
  }
`;

const FooterNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: ${spacing[2]};
  }
  
  a {
    color: ${colors.text.inverse};
    opacity: 0.8;
    font-size: ${typography.fontSize.sm};
    transition: opacity 0.2s ease;
    display: inline-flex;
    align-items: center;
    
    &:hover {
      opacity: 1;
      color: ${colors.secondary.light};
    }
    
    i {
      margin-right: ${spacing[2]};
    }
  }
`;

const ContactInfo = styled.div`
  margin-bottom: ${spacing[4]};
  
  p {
    display: flex;
    margin-bottom: ${spacing[2]};
    font-size: ${typography.fontSize.sm};
    opacity: 0.8;
    
    i {
      margin-right: ${spacing[2]};
      color: ${colors.secondary.main};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${spacing[2]};
  margin-bottom: ${spacing[4]};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: ${colors.text.inverse};
  font-size: ${typography.fontSize.md};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${colors.secondary.main};
    transform: translateY(-3px);
  }
`;

const Newsletter = styled.div`
  margin-bottom: ${spacing[4]};
`;

const NewsletterForm = styled.form`
  display: flex;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: ${spacing[2]} ${spacing[3]};
  color: ${colors.text.inverse};
  border-radius: ${borderRadius.md} 0 0 ${borderRadius.md};
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  @media (max-width: 576px) {
    border-radius: ${borderRadius.md};
    margin-bottom: ${spacing[2]};
  }
`;

const NewsletterButton = styled.button`
  background-color: ${colors.secondary.main};
  color: ${colors.text.inverse};
  border: none;
  padding: ${spacing[2]} ${spacing[3]};
  font-weight: ${typography.fontWeight.medium};
  border-radius: 0 ${borderRadius.md} ${borderRadius.md} 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${colors.secondary.light};
  }
  
  @media (max-width: 576px) {
    border-radius: ${borderRadius.md};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${spacing[4]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacing[3]};
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${typography.fontSize.xs};
  opacity: 0.7;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${spacing[4]};
  
  a {
    font-size: ${typography.fontSize.xs};
    color: ${colors.text.inverse};
    opacity: 0.7;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 1;
      color: ${colors.secondary.light};
    }
  }
`;

const ScrollToTop = styled.a`
  position: fixed;
  bottom: ${spacing[4]};
  right: ${spacing[4]};
  width: 40px;
  height: 40px;
  background-color: ${colors.secondary.main};
  color: ${colors.text.inverse};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${shadows.md};
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background-color: ${colors.secondary.light};
    transform: translateY(-3px);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterTopGradient />
      <Container>
        <FooterTop>
          <LogoColumn>
            <FooterLogo to="/">
              <img src={logo} alt="Marina 188" />
            </FooterLogo>
            <FooterTagline>
              Oferecendo serviços de qualidade e uma experiência única para navegadores em Paraty desde 2005.
            </FooterTagline>
          </LogoColumn>
          
          <NavigationColumn>
            <FooterHeading>Links Rápidos</FooterHeading>
            <FooterNav>
              <ul>
                <li><Link to="/"><i className="fas fa-chevron-right"></i> Início</Link></li>
                <li><Link to="/marina"><i className="fas fa-chevron-right"></i> Marina</Link></li>
                <li><Link to="/infraestrutura"><i className="fas fa-chevron-right"></i> Infraestrutura</Link></li>
                <li><Link to="/fotos"><i className="fas fa-chevron-right"></i> Fotos</Link></li>
                <li><Link to="/noticias"><i className="fas fa-chevron-right"></i> Notícias</Link></li>
                <li><Link to="/classificados"><i className="fas fa-chevron-right"></i> Classificados</Link></li>
                <li><Link to="/paraty"><i className="fas fa-chevron-right"></i> Paraty</Link></li>
                <li><Link to="/contato"><i className="fas fa-chevron-right"></i> Contato</Link></li>
              </ul>
            </FooterNav>
          </NavigationColumn>
          
          <ContactColumn>
            <FooterHeading>Contato</FooterHeading>
            <ContactInfo>
              <p><i className="fas fa-map-marker-alt"></i> Rodovia BR 101 (Santos-Rio) Km 579, Paraty, RJ</p>
              <p><i className="fas fa-phone-alt"></i> Whatsapp: (24) 99925-3683</p>
              <p><i className="fas fa-envelope"></i> contato@marina188.com.br</p>
              <p><i className="fas fa-clock"></i> Aberto todos os dias, 8h às 18h</p>
            </ContactInfo>
          </ContactColumn>
          
          <SocialColumn>
            <FooterHeading>Conecte-se</FooterHeading>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </SocialLink>
              <SocialLink href="https://wa.me/5524999253683" target="_blank" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </SocialLink>
            </SocialLinks>
            
            <Newsletter>
              <FooterHeading>Newsletter</FooterHeading>
              <p style={{ marginBottom: spacing[3], fontSize: typography.fontSize.sm, opacity: 0.8 }}>
                Inscreva-se para receber novidades e promoções:
              </p>
              <NewsletterForm>
                <NewsletterInput type="email" placeholder="Seu email" aria-label="Email para newsletter" />
                <NewsletterButton type="submit">Inscrever</NewsletterButton>
              </NewsletterForm>
            </Newsletter>
          </SocialColumn>
        </FooterTop>
        
        <FooterBottom>
          <Copyright>
            © {currentYear} Marina 188. Todos os direitos reservados.
          </Copyright>
          <FooterLinks>
            <a href="#">Termos de Uso</a>
            <a href="#">Privacidade</a>
            <a href="#">Cookies</a>
          </FooterLinks>
        </FooterBottom>
      </Container>
      
      <ScrollToTop href="#top" aria-label="Voltar ao topo">
        <i className="fas fa-chevron-up"></i>
      </ScrollToTop>
    </FooterContainer>
  );
};

export default Footer; 