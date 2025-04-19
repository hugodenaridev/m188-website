import { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 120px auto 60px;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ContactForm = styled.div`
  flex: 1;
  min-width: 300px;
`;

const InfoItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  
  i {
    margin-right: 15px;
    color: #4682B4;
    font-size: 18px;
    margin-top: 4px;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  margin-top: 40px;
  border: 1px solid #ddd;
  
  /* This would be replaced with actual map */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-style: italic;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  background-color: #4682B4;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  align-self: flex-start;
  
  &:hover {
    background-color: #3A6D99;
  }
`;

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
      <PageTitle>Contato</PageTitle>
      <ContactContent>
        <ContactInfo>
          <InfoItem>
            <i className="fa fa-map-marker"></i>
            <div>
              <p>Marina 188</p>
              <p>Rodovia BR 101 (Santos-Rio) Km 579</p>
              <p>Paraty, RJ</p>
            </div>
          </InfoItem>
          <InfoItem>
            <i className="fa fa-phone"></i>
            <div>
              <p>Whatsapp: (24) 99925-3683</p>
            </div>
          </InfoItem>
          <InfoItem>
            <i className="fa fa-envelope"></i>
            <div>
              <p>contato@marina188.com.br</p>
            </div>
          </InfoItem>
        </ContactInfo>
        
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
      </ContactContent>
      
      <Map id="mapa">
        <div>Google Map would be embedded here</div>
      </Map>
    </PageContainer>
  );
};

export default Contato; 