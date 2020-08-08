import React from 'react';
import { Container } from 'react-bootstrap';

export default () => {
  return (
    <Container fluid style={{display: 'flex', height: '87.5vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#040B30', color: '#FFFFFF'}}>
      <h1 style={{fontWeight: 'normal'}}>Page Not Found</h1>
    </Container>
  );
}