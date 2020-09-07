import React from 'react';
import { Container } from 'react-bootstrap';
import { darkBlue, white } from '../../constants/colors';

export default class NotFound extends React.Component {
  render() {
    return (
      <Container fluid style={{display: 'flex', height: '89.1vh', justifyContent: 'center', alignItems: 'center', backgroundColor: darkBlue, color: white}}>
        <h1 style={{fontWeight: 'normal'}}>Page Not Found</h1>
      </Container>
    );
  }
}