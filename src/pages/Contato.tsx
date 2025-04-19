import { useState } from 'react';
import styled from 'styled-components';
import contactHero from '../assets/images/marina-boats.jpg'; // Use your own asset or replace with Unsplash if not available

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px auto;
  padding: 55px 20px 60px 20px;
  background: #f7fbfc;
`;

const HeroSection = styled.section`
  position: relative;
  border-radius: 20px;
  padding: 0;
  margin-bottom: 2.5rem;
  text-align: center;
  min-height: 260px;
  overflow: hidden;
`;


const HeroImg = styled.img`
  position: absolute;
  left: 0; right: 0; bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  background: rgba(20, 40, 60, 0.38);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  padding: 44px 0 34px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.1rem;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1.2fr;
  gap: 44px;
  margin-top: 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const Card = styled.section`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(46,139,192,0.08);
  padding: 32px 32px 22px 32px;
  margin-bottom: 0;
  @media (max-width: 600px) {
    padding: 18px 10px 14px 10px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactForm = styled.div`
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 10px;
  svg {
    color: #2e8bc0;
    font-size: 2rem;
    margin-top: 2px;
    flex-shrink: 0;
  }
  p {
    margin: 0 0 2px 0;
    color: #444;
    font-size: 1.09rem;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }
`;

const MapCard = styled(Card)`
  padding: 0;
  overflow: hidden;
  height: 340px;
  margin-top: 36px;
  display: flex;
  align-items: stretch;
`;

const Map = styled.div`
  width: 100%;
  height: 340px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-style: italic;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #2e8bc0;
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.08rem;
  align-self: flex-start;
  margin-top: 10px;
  box-shadow: 0 2px 10px rgba(46,139,192,0.09);
  transition: background 0.2s;
  &:hover {
    background-color: #145374;
  }
`;

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Mensagem enviada com sucesso!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <PageContainer>
      <HeroSection>
        <HeroImg src={contactHero} alt="Fale Conosco" />
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Fale Conosco</HeroTitle>
        </HeroContent>
      </HeroSection>
      <ContactContent>
        <Card>
          <ContactInfo>
            <InfoItem>
              <FaMapMarkerAlt />
              <div>
                <p>Marina 188</p>
                <p>Rodovia BR 101 (Santos-Rio) Km 579</p>
                <p>Paraty, RJ</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FaPhoneAlt />
              <div>
                <p>Whatsapp: (24) 99925-3683</p>
              </div>
            </InfoItem>
            <InfoItem>
              <FaEnvelope />
              <div>
                <p>contato@marina188.com.br</p>
              </div>
            </InfoItem>
          </ContactInfo>
        </Card>
        <Card>
          <ContactForm>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Nome</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Mensagem</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
            </Form>
          </ContactForm>
        </Card>
      </ContactContent>
      <MapCard>
        <Map id="mapa">
          <iframe
            title="Marina 188 Location"
            src="https://www.google.com/maps?q=Marina+188,+Paraty,+RJ&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Map>
      </MapCard>
    </PageContainer>
  );
};

export default Contato;