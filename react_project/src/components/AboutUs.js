import React from 'react';
import styled from 'styled-components';

const GlassContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  padding: 20px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;
  
  const Heading = styled.h1`
  color: black;
  `;
  
  const Paragraph = styled.p`
  color: black;
  font-size:20px;
`;

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <GlassContainer style={{color:'black'}}>
        <Heading>About Us</Heading>
        <Paragraph >
            Welcome to Real Estate.in, your premier destination for all your real estate needs. Established with a commitment to excellence, we take pride in providing a seamless and comprehensive platform for those looking to buy or rent their dream properties.
        </Paragraph>
        <Paragraph>
        At Real Estate.in, we understand that finding the perfect home is a significant milestone, whether you are looking to settle down in a new place or invest in real estate. Our dedicated team of experienced professionals is here to guide you through every step of the process.
        </Paragraph>
        <Paragraph>
        For those looking to buy, our extensive listings showcase a diverse range of properties, including houses, apartments, condominiums, and pristine land. We strive to match you with a home that suits your lifestyle and preferences. Our user-friendly interface and advanced search features make the home-buying experience both exciting and efficient.
        </Paragraph>
      </GlassContainer>
    </div>
  );
};

export default AboutUs;
