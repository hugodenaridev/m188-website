import styled from 'styled-components';
import paratyImg from '../assets/images/paraty.jpg';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px auto;
  padding: 55px 20px 60px 20px;
  background: #f7fbfc;
`;

const PageTitle = styled.h1`
  font-size: 2.7rem;
  color: #fff;
  margin-bottom: 0;
  text-align: center;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  letter-spacing: 0.01em;
  z-index: 2;
  position: relative;
`;

const ParatyHero = styled.div`
  position: relative;
  height: 350px;
  border-radius: 0 0 24px 24px;
  overflow: hidden;
  margin-bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 8px 36px rgba(46,139,192,0.09);
`;


const Content = styled.div`
  display: grid;
  grid-template-columns: 2.1fr 1fr;
  gap: 44px;
  margin-top: 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;


const Sidebar = styled.aside`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(46,139,192,0.06);
  padding: 28px 20px 18px 20px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const SidebarTitle = styled.h3`
  font-size: 1.14rem;
  color: #145374;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const AttractionsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const AttractionItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoBox = styled.div`
  background-color: #E6F4F1;
  padding: 20px;
  border-radius: 4px;
  margin: 30px 0;
  
  h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 15px;
    color: #333;
  }
`;

const Paraty = () => {
  return (
    <PageContainer>
      <ParatyHero>
        <img src={paratyImg} alt="Vista panorâmica de Paraty" style={{position:'absolute',left:0,right:0,bottom:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 30%',zIndex:1}} />
        <div style={{position:'absolute',left:0,right:0,top:0,bottom:0,background:'rgba(20, 40, 60, 0.38)',zIndex:2}} />
        <div style={{position:'relative',zIndex:3,width:'100%',padding:'44px 0 34px 0',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <PageTitle>Paraty: Patrimônio Mundial</PageTitle>
          <a href="https://paraty.com.br/" target="_blank" rel="noopener noreferrer" style={{marginTop: 18, color: '#fff', background: '#2e8bc0', padding: '10px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 10px rgba(46,139,192,0.09)'}}>Saiba mais em paraty.com.br</a>
        </div>
      </ParatyHero>

      <Content>
        <div>
          <section style={{background:'#fff',borderRadius:14,boxShadow:'0 4px 18px rgba(46,139,192,0.08)',padding:'32px 32px 22px 32px',marginBottom:36}}>
            <h2 style={{fontSize:'1.4rem',fontFamily:'Montserrat, Arial, Helvetica, sans-serif',color:'#2e8bc0',margin:'0 0 14px 0',fontWeight:700}}>Sobre Paraty</h2>
            <p style={{color:'#444',fontSize:'1.06rem',lineHeight:1.7,marginBottom:16}}>
              Paraty é uma joia preservada do litoral brasileiro, localizada entre o mar e a montanha, no estado do Rio de Janeiro. Com seu centro histórico tombado, praias paradisíacas e natureza exuberante, a cidade é um destino perfeito para quem busca história, cultura e belezas naturais.
            </p>
          </section>
          <section style={{background:'#fff',borderRadius:14,boxShadow:'0 4px 18px rgba(46,139,192,0.08)',padding:'32px 32px 22px 32px',marginBottom:36}}>
            <h2 style={{fontSize:'1.4rem',fontFamily:'Montserrat, Arial, Helvetica, sans-serif',color:'#2e8bc0',margin:'0 0 14px 0',fontWeight:700}}>História</h2>
            <p style={{color:'#444',fontSize:'1.06rem',lineHeight:1.7,marginBottom:16}}>
              Fundada em 1667, Paraty foi um importante porto para o escoamento do ouro de Minas Gerais durante o período colonial. Seu conjunto arquitetônico preservado é um testemunho vivo da história brasileira e foi reconhecido pela UNESCO como Patrimônio Mundial.
            </p>
            <InfoBox>
              <h3>Você sabia?</h3>
              <p>Paraty foi reconhecida como Patrimônio Mundial pela UNESCO em 2019, na categoria de Patrimônio Cultural e Natural, ressaltando a harmonia entre a arquitetura colonial e a exuberante natureza da Mata Atlântica.</p>
            </InfoBox>
          </section>
          <section style={{background:'#fff',borderRadius:14,boxShadow:'0 4px 18px rgba(46,139,192,0.08)',padding:'32px 32px 22px 32px',marginBottom:36}}>
            <h2 style={{fontSize:'1.4rem',fontFamily:'Montserrat, Arial, Helvetica, sans-serif',color:'#2e8bc0',margin:'0 0 14px 0',fontWeight:700}}>O que fazer em Paraty</h2>
            <p style={{color:'#444',fontSize:'1.06rem',lineHeight:1.7,marginBottom:16}}>
              Além de explorar o charmoso centro histórico com suas ruas de pedra e casarões coloniais, Paraty oferece diversas atividades para os visitantes. Passeios de barco pelas ilhas e praias da região, trilhas em meio à Mata Atlântica, cachoeiras de águas cristalinas e uma rica gastronomia local são algumas das atrações. Confira o <a href="https://paraty.com.br/o-que-fazer/" target="_blank" rel="noopener noreferrer" style={{color:'#2e8bc0',textDecoration:'underline'}}>guia de atrações</a>.
            </p>
          </section>
          <section style={{background:'#fff',borderRadius:14,boxShadow:'0 4px 18px rgba(46,139,192,0.08)',padding:'32px 32px 22px 32px',marginBottom:36}}>
            <h2 style={{fontSize:'1.4rem',fontFamily:'Montserrat, Arial, Helvetica, sans-serif',color:'#2e8bc0',margin:'0 0 14px 0',fontWeight:700}}>Como Chegar</h2>
            <p style={{color:'#444',fontSize:'1.06rem',lineHeight:1.7,marginBottom:16}}>
              Paraty está localizada a aproximadamente 250 km do Rio de Janeiro e 330 km de São Paulo. O acesso é feito pela Rodovia BR-101 (Rio-Santos). A Marina 188 está situada no Km 579 dessa rodovia, oferecendo fácil acesso para quem chega de barco ou carro. Veja <a href="https://paraty.com.br/como-chegar/" target="_blank" rel="noopener noreferrer" style={{color:'#2e8bc0',textDecoration:'underline'}}>dicas de transporte</a>.
            </p>
          </section>
        </div>
        <Sidebar>
          <SidebarTitle>Principais Atrações</SidebarTitle>
          <AttractionsList>
            <AttractionItem>🏛️ <a href="https://paraty.com.br/centro-historico/" target="_blank" rel="noopener noreferrer">Centro Histórico</a></AttractionItem>
            <AttractionItem>🏖️ <a href="https://paraty.com.br/praias/sono/" target="_blank" rel="noopener noreferrer">Praia do Sono</a></AttractionItem>
            <AttractionItem>⛵ <a href="https://paraty.com.br/ilha-do-araujo/" target="_blank" rel="noopener noreferrer">Ilha do Araújo</a></AttractionItem>
            <AttractionItem>💧 <a href="https://paraty.com.br/cachoeira-do-toboga/" target="_blank" rel="noopener noreferrer">Cachoeira do Tobogã</a></AttractionItem>
            <AttractionItem>🌄 <a href="https://paraty.com.br/saco-do-mamangua/" target="_blank" rel="noopener noreferrer">Saco do Mamanguá</a></AttractionItem>
            <AttractionItem>🌊 <a href="https://paraty.com.br/trindade/" target="_blank" rel="noopener noreferrer">Trindade</a></AttractionItem>
            <AttractionItem>🌳 <a href="https://paraty.com.br/serra-da-bocaina/" target="_blank" rel="noopener noreferrer">Parque Nacional da Serra da Bocaina</a></AttractionItem>
            <AttractionItem>🏠 <a href="https://paraty.com.br/casa-da-cultura/" target="_blank" rel="noopener noreferrer">Casa da Cultura</a></AttractionItem>
            <AttractionItem>🥃 <a href="https://paraty.com.br/alambique-pedra-branca/" target="_blank" rel="noopener noreferrer">Alambique Pedra Branca</a></AttractionItem>
            <AttractionItem>📚 <a href="https://www.flip.org.br/" target="_blank" rel="noopener noreferrer">Festa Literária de Paraty (FLIP)</a></AttractionItem>
          </AttractionsList>
        </Sidebar>
      </Content>
    </PageContainer>
  );
};

export default Paraty; 