import React from 'react';
import { Container } from 'react-bootstrap';

/**
 * @todo make this a class component
 */
export default () => {
  return (
    <Container fluid style={{display: 'flex', height: '89.1vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#040B30', color: '#FFFFFF'}}>
      <h1 style={{fontWeight: 'normal'}}>Page Not Found</h1>
    </Container>
  );
}