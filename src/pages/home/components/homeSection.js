import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Button from '../../../components/button';

const SectionTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 10vh;
`

const SectionDescription = styled.div`
  position: relative;
  font-size: 3vh;
`

export default class HomeSection extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row style={{height: (window.innerHeight * .5), backgroundColor: '#040B30', color: '#FFFFFF'}}>
          <Col sm={6}>
            <SectionTitle>About Me</SectionTitle>
          </Col>
          <Col sm={6}>
            <Row style={{height: (window.innerHeight * .25), padding: 24, display: 'flex', alignItems: 'flex-end'}}>
              <SectionDescription>
                Producer. Songwriter. Wannabe composer. That's me! I'm open to all serious inquiries that involve music. Hit the button below to contact me and let's get locked in!
              </SectionDescription>
            </Row>
            <Row style={{height: (window.innerHeight * .25), padding: 24}}>
              <Button text={'Contact'} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}