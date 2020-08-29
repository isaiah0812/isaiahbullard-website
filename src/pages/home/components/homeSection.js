import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Button from '../../../components/button';

const SectionTitle = styled.h3`
  font-weight: normal;
  font-size: 80px;
  width: 20%;
  text-align: center;

  @media (max-width: 740px) {
    font-size 40px;
  }
`

const SectionDescription = styled.div`
  position: relative;
  font-size: 150%;
  margin: 2% 0%;

  @media (max-width: 740px) {
    font-size: 85%;
  }
`

/**
 * @todo make this a class component
 */
export default ({primary, title, description, buttonText, href}) => {
  return (
    <Container 
      fluid 
      style={{
        padding: '2%', 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        minHeight: 300, 
        backgroundColor: primary ? '#040B30' : '#FFFFFF', 
        color: primary ? '#FFFFFF' : '#040B30',
      }}
    >
      <SectionTitle>{title}</SectionTitle>
      <Container fluid style={{display: 'flex', flexDirection: 'column', width: '40%', padding: 0, margin: 0}}>
        <SectionDescription>{description}</SectionDescription>
        <Button text={buttonText} secondary={!primary} href={href} />
      </Container>
    </Container>
  );
}