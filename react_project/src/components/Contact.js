import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


import googleMapsLogo from './google.png'; 
import whatsappLogo from './whatsapp.png'; 
import emailLogo from './Gmail.png'; 

const GlassContainer = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  padding: 20px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  margin: auto;
  margin-top: 20px;
`;

const Heading = styled.h1`
  color: black;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const GlassButton = styled.div`
  display:flex;
  align-items:center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  padding: 10px;
  margin: 0 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled.img`
  width: 60px; 
  height: 60px; 
`;

const LogoText = styled.p`
  margin-top: 5px;
  margin-left: 15px;
  font-size: 20px;  
  color: black;
`;

const Contact = () => {
  const { id, heading, description } = useParams();

  const dealerNames = [
    'Arivalagan',
    'Barath',
    'Aswin',
    'Yagna',
    'Manosri',
    'Sathish',
    'Ravichandiran',
    'DhanushKodi',
    'Karthikeyan',
    'Varshini',
    'Subalakshmi',
    'Thirupathi',
  ];

  const dealerIndex = parseInt(id, 10) - 1;
  const dealerName = dealerNames[dealerIndex] || 'Unknown Dealer';

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontSize: '25px'}}>
      <GlassContainer>
        <Heading>Contact Details</Heading>
        <p>Dealer Name: {dealerName}</p>
        <p>Location: {description}</p>
        <p>Property Type: {heading}</p>
        <p>E-mail: {dealerName}@gmail.com</p>
        <p>Phone No: 9876543210</p>
        <LogoContainer>
        <GlassButton>
  <a href="https://maps.google.com" style={{ textDecoration: 'none', color: 'black' }}>
    <Logo src={googleMapsLogo} alt="Google Maps" />
    <LogoText>Google Maps</LogoText>
  </a>
</GlassButton>

<GlassButton>
  <a href="https://wa.me/+916374474731" style={{ textDecoration: 'none', color: 'black' }}>
    <Logo src={whatsappLogo} alt="WhatsApp" />
    <LogoText>WhatsApp</LogoText>
  </a>
</GlassButton>

<GlassButton>
<a href="mailto:727822tucy010@skct.edu.in" style={{ textDecoration: 'none', color: 'black' }}>
  <Logo src={emailLogo} alt="Email" />
  <LogoText>Gmail</LogoText>
</a>

</GlassButton>


        </LogoContainer>
      </GlassContainer>
    </div>
  );
};

export default Contact;
